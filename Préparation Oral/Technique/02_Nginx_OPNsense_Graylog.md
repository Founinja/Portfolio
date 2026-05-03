# Phase 2 & 3 : Nginx, OPNsense et Graylog

C'est ton "Expert Stack". Ces outils montrent que tu sais gérer la sécurité d'une infrastructure moderne et connectée.

## 1. Nginx en Reverse Proxy
**C'est quoi ?** Un serveur qui se place devant tes applications web (ex: ton portfolio, n8n, Chatwoot).
**Pourquoi l'utiliser ?**
*   **Sécurisation** : On ne contacte jamais le serveur d'application directement. Nginx reçoit tout et fait le tri.
*   **Gestion SSL/TLS** : C'est Nginx qui porte les certificats (Let's Encrypt). Le trafic entre Nginx et les conteneurs peut être en HTTP (plus rapide), mais tout ce qui sort sur le web est en HTTPS.
*   **Masquage d'IP** : Il cache l'infrastructure interne. Le client voit une URL, pas une structure de serveurs.

## 2. OPNsense (Le Firewall Open Source)
**C'est quoi ?** Un système d'exploitation basé sur FreeBSD dédié à la sécurité réseau.
**Fonctions clés à maîtriser :**
*   **Filtrage (Stateful Firewall)** : Il analyse l'état des connexions. S'il voit une réponse à une requête que tu as envoyée, il la laisse passer. S'il voit une tentative de connexion non sollicitée, il bloque.
*   **NAT / Port Forwarding** : Permet de faire correspondre une IP publique à une IP privée interne.
*   **VPN (OpenVPN / WireGuard)** : Crucial pour le télétravail sécurisé. Il crée un tunnel chiffré entre un client et ton réseau.
*   **IPS/IDS (Suricata)** : Analyse le contenu des paquets pour détecter des signatures d'attaques connues.

## 3. Graylog (Supervision et SIEM)
**C'est quoi ?** Une plateforme de gestion de logs qui permet de centraliser et d'analyser tout ce qui se passe.
**Pourquoi c'est du SISR ?**
*   **Centralisation** : Au lieu de se connecter sur 50 serveurs pour voir les erreurs, tout arrive dans Graylog.
*   **Audit de sécurité** : On peut voir qui s'est connecté, à quelle heure, et d'où. 
*   **Alerting** : "Si plus de 5 tentatives de connexion échouent en 1 minute sur le SSH, envoie un email à l'admin".
*   **Flux de logs** : Les logs partent des sources (Servers, Firewall) via le protocole **Syslog** (souvent port 514 UDP/TCP).

---

### 💡 Questions probables du jury :
1.  **"C'est quoi la différence entre un Proxy et un Reverse Proxy ?"** -> Un Proxy aide les gens internes à sortir (ex: filtrage web en entreprise). Un Reverse Proxy aide les gens externes à entrer sur tes services de manière sécurisée.
2.  **"Pourquoi utiliser OPNsense plutôt qu'une box internet ?"** -> Pour le contrôle granulaire, les VLANs, le VPN, l'IDS/IPS et les rapports de sécurité détaillés.
3.  **"Comment Graylog reçoit-il les informations ?"** -> Via des "Inputs" configurés pour écouter des flux (Syslog, GELF, Raw) envoyés par les serveurs distants.
