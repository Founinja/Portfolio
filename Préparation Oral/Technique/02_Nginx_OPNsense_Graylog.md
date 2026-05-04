# Fiche Technique : Nginx, OPNsense et Graylog (Expert)

Ces outils représentent ta capacité à sécuriser et superviser une infrastructure exposée sur Internet. C'est ici que tu justifies ton titre d'Entrepreneur IA.

---

## 1. Nginx (Le Portier de l'immeuble)
**Analogie** : Imagine un immeuble de luxe. Tu ne rentres pas directement dans l'appartement de quelqu'un. Tu parles au portier à l'entrée. C'est lui qui vérifie qui tu es et qui t'accompagne au bon étage.

*   **Le Reverse Proxy** : Nginx reçoit toutes les requêtes web (port 80/443).
    *   *Pourquoi ?* Pour ne pas exposer tes applications (Docker) directement. Si n8n a une faille, Nginx sert de bouclier.
*   **SSL Termination (Le chiffrement)** : C'est Nginx qui gère les certificats SSL/TLS.
    *   *Exemple* : Le client parle en HTTPS (chiffré) à Nginx. Nginx déchiffre et parle en HTTP (clair) à n8n sur le réseau interne Docker. C'est plus simple et performant.
*   **Virtual Hosts** : Permet de gérer `n8n.jordan.fr` et `portfolio.jordan.fr` sur la même adresse IP.

> [!TIP]
> **Astuce Jury** : Si on te demande "Pourquoi pas Apache ?", réponds : "Nginx est basé sur une **architecture événementielle**, ce qui le rend beaucoup plus performant pour gérer des milliers de connexions simultanées avec très peu de RAM."

---

## 2. OPNsense (La Douane)
**Analogie** : C'est le poste frontière entre ton réseau privé (LAN) et le monde sauvage (Internet/WAN). Il vérifie chaque paquet qui passe.

*   **Le Firewall (Filtrage d'état)** : Il ne regarde pas seulement l'adresse, il regarde le comportement. S'il voit une réponse à une question que TU as posée, il laisse passer. S'il voit une tentative d'entrée non sollicitée, il bloque.
*   **Le NAT (Network Address Translation)** : Ton VPS n'a qu'une IP publique. Le NAT permet à toutes tes machines internes de sortir sur Internet en utilisant cette unique adresse.
*   **Le VPN (Le Tunnel)** : Permet de créer un lien sécurisé entre ton PC et ton réseau, comme si tu étais branché physiquement sur ton serveur, même à 1000km.

> [!TIP]
> **Astuce Jury** : Parle de **Segmentation**. "OPNsense me permet de créer une **DMZ (Zone Démilitarisée)** pour mes serveurs web, afin de les isoler de mon réseau d'administration."

---

## 3. Graylog (La Vidéosurveillance SIEM)
**Analogie** : OPNsense et Nginx sont les serrures. Graylog, c'est la caméra de surveillance qui enregistre tout ce qui se passe et qui sonne l'alarme si quelqu'un rôde trop longtemps.

*   **La Centralisation des Logs** : Au lieu de lire 10 fichiers textes sur 10 serveurs, Graylog regroupe tout dans une interface web magnifique.
*   **SIEM (Security Information and Event Management)** : C'est le niveau au-dessus de la simple supervision. Graylog analyse les logs en temps réel.
*   **Alerting** :
    *   *Exemple concret* : "Si le Firewall OPNsense bloque 50 tentatives de connexion sur le même port en 1 minute, Graylog m'envoie un message (Telegram/Email) pour me prévenir d'une attaque par force brute."

> [!TIP]
> **Astuce Jury** : Utilise le mot **Corrélation**. "Graylog me permet de corréler les logs du Firewall avec ceux du serveur web pour comprendre tout le cheminement d'une attaque."

---

## 📚 Résumé des flux (Le parcours d'une requête)
1. Un client tape `https://n8n.jordan.fr`.
2. Le paquet arrive sur la **Douane (OPNsense)** qui vérifie que le port 443 est ouvert.
3. Le paquet arrive au **Portier (Nginx)**.
4. Nginx vérifie le **Certificat SSL**, déchiffre la requête et voit que c'est pour `n8n`.
5. Nginx envoie la requête au conteneur **Docker** interne.
6. Pendant ce temps, Nginx et OPNsense envoient un petit rapport (log) à **Graylog** pour dire : "Tout va bien, Jordan s'est connecté".
