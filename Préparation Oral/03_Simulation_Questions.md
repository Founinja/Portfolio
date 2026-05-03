# Phase 5 : Simulation Questions / Réponses

Voici un panel de questions que le jury pourrait te poser après ta présentation. Prépare-toi à y répondre de manière concise et technique.

## 🛡️ Thème : Sécurité (Le plus important en SISR)

1.  **"Comment sécurisez-vous les accès à vos serveurs VPS ?"**
    *   *Réponse* : SSH par clé (pas de mot de passe), changement du port par défaut, Fail2Ban pour bloquer les attaques par force brute, et pare-feu UFW/Nginx.
2.  **"À quoi sert un certificat SSL et comment l'avez-vous mis en place ?"**
    *   *Réponse* : À chiffrer les échanges entre le client et le serveur. Mis en place via Let's Encrypt et Certbot sur le Reverse Proxy Nginx.
3.  **"Si votre serveur Graylog vous alerte d'une intrusion, quelle est votre première action ?"**
    *   *Réponse* : Isolation de la machine compromise (couper le réseau), analyse des logs pour identifier la source, puis remédiation.
4.  **"C'est quoi un VPN ? Pourquoi l'utiliser ?"**
    *   *Réponse* : Un réseau privé virtuel. Pour accéder aux ressources internes (ex: serveurs de prod) depuis l'extérieur de manière chiffrée sans exposer les services sur le web.
5.  **"Quelle est la différence entre HTTP et HTTPS ?"**
    *   *Réponse* : Le 'S' signifie Secure (SSL/TLS). En HTTP, les données circulent en clair. En HTTPS, elles sont chiffrées.

## 🌐 Thème : Réseaux & Systèmes

6.  **"Expliquez-moi le fonctionnement du DNS."**
    *   *Réponse* : C'est l'annuaire du web. Il traduit un nom de domaine (google.fr) en adresse IP (8.8.8.8).
7.  **"À quoi servent les VLANs dans votre projet GSB ?"**
    *   *Réponse* : À segmenter le réseau pour que les invités ne puissent pas accéder aux serveurs de production, par exemple.
8.  **"Quelle est la différence entre une adresse IP publique et privée ?"**
    *   *Réponse* : Privée = interne au réseau (non routable sur internet). Publique = l'adresse de ta box/serveur sur le web.
9.  **"Pourquoi utiliser LDAP pour GLPI ?"**
    *   *Réponse* : Pour centraliser l'authentification sur l'Active Directory et éviter de gérer deux bases d'utilisateurs.
10. **"C'est quoi une GPO ? Donnez-moi un exemple concret."**
    *   *Réponse* : Group Policy Object. Exemple : Mapper automatiquement un lecteur réseau `Z:` au démarrage pour tous les utilisateurs du service Comptabilité.

## 💼 Thème : Profil Entrepreneur & Méthodologie

11. **"Comment assurez-vous la veille technologique pour votre agence ?"**
    *   *Réponse* : Flux RSS, Twitter (X) technique, newsletters spécialisées en IA et sécurité, et tests pratiques sur mon lab personnel.
12. **"Quel a été votre plus gros échec technique et comment l'avez-vous résolu ?"**
    *   *Piste* : Parle d'une mauvaise configuration DNS ou d'un container qui ne démarrait pas. L'important est la méthode de résolution (lecture des logs, tests successifs).
13. **"Pourquoi avoir choisi l'IPSSI ?"**
    *   *Réponse* : Pour son approche concrète et sa proximité avec le monde de l'entreprise, ce qui colle à mon tempérament d'entrepreneur.
14. **"Comment gérez-vous la sécurité des données de vos clients dans votre agence ?"**
    *   *Réponse* : Chiffrement des bases de données, sauvegardes régulières externalisées, et accès restreint au strict nécessaire (principe du moindre privilège).
15. **"Où vous voyez-vous dans 5 ans ?"**
    *   *Réponse* : Expert en infrastructure et automatisation IA, dirigeant une équipe technique pour accompagner la transformation digitale des entreprises.

## ⚡ Questions Flash (Réponses en 1 phrase)

*   **"Port du HTTPS ?"** -> 443.
*   **"Port du SSH ?"** -> 22.
*   **"Port du DNS ?"** -> 53.
*   **"C'est quoi Docker ?"** -> Une plateforme de conteneurisation pour isoler des applications.
*   **"C'est quoi un SIEM ?"** -> Un outil de gestion des événements et des informations de sécurité (ex: Graylog).
