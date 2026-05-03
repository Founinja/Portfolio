# Documentation d'entraînement E6 : Graylog sur VMware

Ce document t'explique comment reproduire chez toi le TP Proxmox de la Maison des Ligues (M2L) pour la centralisation des logs via Graylog, en utilisant VMware (Workstation ou Player).

## 1. Topologie Réseau VMware

Pour que Graylog puisse recevoir les logs depuis OPNsense, les deux VMs doivent pouvoir se ping.
*   Assure-toi que la VM Graylog est connectée sur le même réseau virtuel (ex: **VMnet1 Host-Only** ou **LAN Segment**) que l'interface LAN de ton OPNsense.
*   Attribue une IP fixe à ton serveur Debian (ex: `10.20.10.10`).

## 2. Création de la Machine Virtuelle

1.  **OS Invité :** Choisis **Debian 12 64-bit** (ou Ubuntu 22.04 LTS).
2.  **Ressources :** La stack Graylog est lourde (Java, MongoDB, OpenSearch).
    *   RAM : **4 Go Minimum** (8 Go recommandés si ton PC le permet).
    *   CPU : 2 vCores minimum.
    *   Disque dur : 40 Go (Pour stocker les logs de test).
3.  **Carte Réseau :** 1 vNIC connecté au réseau interne (VMnet1).

## 3. Installation de la Stack Graylog (Debian)

Connecte-toi en SSH ou via la console VMware sur ta VM Debian.

### A. Prérequis
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install apt-transport-https openjdk-17-jre-headless uuid-runtime pwgen dirmngr gnupg wget -y
```

### B. Installation de MongoDB
Graylog utilise MongoDB pour stocker sa configuration (pas les logs).
```bash
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg --dearmor
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] http://repo.mongodb.org/apt/debian bullseye/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl daemon-reload
sudo systemctl enable --now mongod
```

### C. Installation d'OpenSearch
C'est le moteur qui va stocker et indexer tes logs Syslog.
```bash
curl -o- https://artifacts.opensearch.org/publickeys/opensearch.pgp | sudo gpg --dearmor --batch --yes -o /usr/share/keyrings/opensearch-keyring
echo "deb [signed-by=/usr/share/keyrings/opensearch-keyring] https://artifacts.opensearch.org/releases/bundle/opensearch/2.x/apt stable main" | sudo tee /etc/apt/sources.list.d/opensearch-2.x.list
sudo apt update
sudo apt install opensearch -y
```
*Important :* Édite `/etc/opensearch/opensearch.yml` pour définir :
```yaml
cluster.name: graylog
node.name: ${HOSTNAME}
network.host: 127.0.0.1
discovery.type: single-node
```
Puis : `sudo systemctl enable --now opensearch`

### D. Installation de Graylog Server
```bash
wget https://packages.graylog2.org/repo/packages/graylog-5.2-repository_latest.deb
sudo dpkg -i graylog-5.2-repository_latest.deb
sudo apt update && sudo apt install graylog-server -y
```

### E. Configuration Sécurisée
1.  Génère un secret (password_secret) : `pwgen -N 1 -s 96`
2.  Génère un mot de passe Admin (root_password_sha2) : `echo -n "TonMotDePasse" | shasum -a 256`
3.  Édite le fichier `/etc/graylog/server/server.conf` :
    *   Colle le `password_secret`.
    *   Colle le `root_password_sha2`.
    *   Configure `http_bind_address = 0.0.0.0:9000` (pour y accéder depuis ton PC fixe).
4.  Démarre Graylog : `sudo systemctl enable --now graylog-server`

## 4. Liaison avec OPNsense (TP E6)

1.  **Sur Graylog (Web GUI sur le port 9000) :**
    *   Va dans **System > Inputs**.
    *   Sélectionne **Syslog UDP** et clique sur "Launch new input".
    *   Title: OPNsense, Port: 514, Bind address: 0.0.0.0.
2.  **Sur OPNsense (Web GUI) :**
    *   Va dans **System > Settings > Logging / targets**.
    *   Ajoute une cible : Protocol: UDP, IP Address: `10.20.10.10` (IP de ton Debian), Port: 514.
    *   Sélectionne "Firewall" ou "All" dans les applications.
3.  **Validation :** Retourne sur Graylog et clique sur "Show received messages" pour voir le trafic de ton pare-feu s'afficher en temps réel !
