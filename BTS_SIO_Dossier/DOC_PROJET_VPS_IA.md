# Documentation Technique E4 - Déploiement VPS Agence IA

Ce document détaille l'architecture complète, pas à pas, pour déployer et sécuriser une infrastructure d'automatisation IA comprenant n8n et Chatwoot derrière un reverse proxy Nginx sur un VPS Hostinger. 

## 1. Architecture Cible & Prérequis

*   **Hébergement :** VPS Hostinger sous Linux (Ubuntu 22.04 ou 24.04 LTS recommandé).
*   **Domaines :** 
    *   `n8n.tondomaine.com` (pour l'automatisation)
    *   `chat.tondomaine.com` (pour Chatwoot)
*   **Technologies :** Docker, Docker Compose, Nginx (Reverse Proxy), Certbot (SSL).
*   **Sécurité :** UFW (Uncomplicated Firewall), fail2ban (optionnel mais recommandé).

---

## 2. Étape 1 : Sécurisation Initiale du VPS Hostinger

Dès la réception du VPS, il faut sécuriser l'accès et configurer le pare-feu.

1.  **Mise à jour du système :**
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```
2.  **Configuration du Pare-feu (UFW) :**
    On n'autorise que le strict minimum (SSH, HTTP, HTTPS).
    ```bash
    sudo ufw default deny incoming
    sudo ufw default allow outgoing
    sudo ufw allow 22/tcp   # SSH
    sudo ufw allow 80/tcp   # HTTP (pour le challenge Let's Encrypt et la redirection)
    sudo ufw allow 443/tcp  # HTTPS
    sudo ufw enable
    ```

---

## 3. Étape 2 : Installation du moteur Docker

L'utilisation de Docker garantit l'isolation des services (n8n vs Chatwoot) et évite les conflits de dépendances (ex: versions de Node.js ou Ruby différentes).

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
```

---

## 4. Étape 3 : Déploiement de n8n (Automatisation IA)

On crée un dossier dédié pour isoler la configuration.

1.  **Création des dossiers :**
    ```bash
    mkdir -p /opt/n8n/n8n_data
    cd /opt/n8n
    ```
2.  **Création du fichier `docker-compose.yml` :**
    ```yaml
    services:
      n8n:
        image: docker.n8n.io/n8nio/n8n:latest
        restart: unless-stopped
        ports:
          - "127.0.0.1:5678:5678" # On n'expose que sur localhost, Nginx fera le pont
        environment:
          - N8N_HOST=n8n.tondomaine.com
          - N8N_PORT=5678
          - N8N_PROTOCOL=https
          - WEBHOOK_URL=https://n8n.tondomaine.com/
          - N8N_PROXY_HOPS=1 # Important quand on est derrière un Reverse Proxy
          - TZ=Europe/Paris
        volumes:
          - ./n8n_data:/home/node/.n8n
    ```
3.  **Lancement :**
    ```bash
    docker compose up -d
    ```

---

## 5. Étape 4 : Déploiement de Chatwoot (Support & Omnicanal)

Chatwoot est une application complexe nécessitant PostgreSQL (Base de données) et Redis (Cache/Workers). Le plus simple est d'utiliser leur stack Docker officielle.

1.  **Téléchargement de l'environnement :**
    ```bash
    mkdir /opt/chatwoot && cd /opt/chatwoot
    wget -O docker-compose.yaml https://raw.githubusercontent.com/chatwoot/chatwoot/develop/docker-compose.production.yaml
    wget -O .env https://raw.githubusercontent.com/chatwoot/chatwoot/develop/.env.example
    ```
2.  **Configuration du `.env` :**
    Il faut modifier ce fichier pour définir les mots de passe de la BDD et surtout l'URL :
    *   `FRONTEND_URL=https://chat.tondomaine.com`
3.  **Initialisation de la base de données :**
    ```bash
    docker compose run --rm rails bundle exec rails db:chatwoot_prepare
    ```
4.  **Lancement :**
    ```bash
    docker compose up -d
    ```
    *Note: Par défaut, Chatwoot écoute sur `127.0.0.1:3000`.*

---

## 6. Étape 5 : Configuration du Reverse Proxy Nginx

Nginx va intercepter toutes les requêtes web (Port 80/443) et les rediriger vers le bon conteneur Docker en fonction du nom de domaine.

1.  **Installation de Nginx :**
    ```bash
    sudo apt install nginx -y
    ```
2.  **Configuration pour n8n (`/etc/nginx/sites-available/n8n`) :**
    > **Attention:** n8n utilise des **WebSockets** pour mettre à jour l'interface en temps réel. Il faut impérativement ajouter les headers `Upgrade` et `Connection`.
    ```nginx
    server {
        server_name n8n.tondomaine.com;
        location / {
            proxy_pass http://127.0.0.1:5678;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
    ```
3.  **Configuration pour Chatwoot (`/etc/nginx/sites-available/chatwoot`) :**
    > **Attention:** Chatwoot utilise des headers avec des underscores pour ses API. Il faut activer `underscores_in_headers on;`.
    ```nginx
    server {
        server_name chat.tondomaine.com;
        underscores_in_headers on;
        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
    ```
4.  **Activation des sites :**
    ```bash
    sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
    sudo ln -s /etc/nginx/sites-available/chatwoot /etc/nginx/sites-enabled/
    sudo nginx -t && sudo systemctl reload nginx
    ```

---

## 7. Étape 6 : Certificats SSL (HTTPS) avec Certbot

Sécurisation obligatoire des flux.

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d n8n.tondomaine.com
sudo certbot --nginx -d chat.tondomaine.com
```
*Certbot va modifier automatiquement les fichiers Nginx pour forcer la redirection HTTP vers HTTPS.*

---

## 🎓 Traduction en Compétences BTS SISR (Pour l'oral E4)

Ce projet est fantastique pour l'oral car il valide des compétences fondamentales du référentiel :
*   **Gérer le patrimoine informatique :** Déploiement d'un VPS, gestion des conteneurs.
*   **Répondre aux incidents et aux demandes d'assistance :** Mise en place de Chatwoot (outil de ticketing/helpdesk).
*   **Mettre à disposition des utilisateurs un service informatique :** Publication web, DNS, reverse proxy.
*   **Travailler en mode projet :** Cahier des charges agence IA, architecture, déploiement.
*   **Organiser son développement professionnel :** Apprentissage de Docker, Nginx et intégration d'outils modernes (n8n).
