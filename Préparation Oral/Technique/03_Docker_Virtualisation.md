# Fiche Technique : Docker et Conteneurisation (Expert)

Docker est l'outil qui fait le lien entre ton infrastructure SISR et tes applications d'automatisation IA. Il faut savoir expliquer pourquoi tu l'utilises plutôt que des machines virtuelles (VM) classiques.

---

## 1. Machine Virtuelle (VM) vs Conteneur (Docker)
**Analogie** : 
*   **La VM**, c'est comme une **maison individuelle**. Elle a sa propre tuyauterie (OS), son propre toit, ses propres fondations. C'est solide mais c'est lourd et ça prend de la place.
*   **Docker**, c'est comme un **appartement dans un immeuble**. Tous les appartements partagent les fondations et la tuyauterie principale (le Noyau Linux du serveur), mais chacun a sa propre porte et ses propres meubles. C'est beaucoup plus léger et on peut en mettre plus au même endroit.

*   **Avantage Docker** : Ça démarre en 2 secondes, ça consomme 10x moins de RAM qu'une VM.

---

## 2. Docker Compose (L'Architecte)
**C'est quoi ?** C'est un fichier (`docker-compose.yml`) qui décrit toute ton infrastructure comme une recette de cuisine.
*   **Pourquoi l'utiliser ?** Au lieu de taper 50 commandes pour lancer n8n, sa base de données et son cache, tu tapes une seule commande : `docker-compose up -d`.
*   **Infrastructure as Code (IaC)** : Ton infrastructure devient un simple fichier texte. Tu peux le copier sur un autre serveur et tout se relance à l'identique en 1 minute.

---

## 3. Les Volumes et les Networks (La Persistance et la Liaison)
*   **Les Volumes** : Par défaut, si un conteneur est supprimé, toutes ses données disparaissent. Les volumes permettent de "sortir" les données importantes (ex: la base de données de n8n) et de les stocker sur le disque dur du VPS. 
    *   *Analogie* : Le conteneur est la télé, le volume est le disque dur externe. Si tu changes de télé, tu gardes tes films.
*   **Les Networks** : Docker crée un réseau privé interne. Tes conteneurs se parlent entre eux sans que personne sur Internet ne puisse les voir. C'est une couche de sécurité supplémentaire.

---

## 💡 Questions probables du jury :
1.  **"C'est quoi la différence entre une Image et un Conteneur ?"** -> L'Image est le plan de construction (la recette), le Conteneur est le bâtiment fini (le gâteau).
2.  **"Pourquoi utiliser Docker sur un VPS ?"** -> Pour l'**isolation** (si une app plante, elle ne fait pas planter le serveur) et la **portabilité** (je peux déplacer mon agence IA sur n'importe quel serveur en 2 minutes).
3.  **"Comment sécurisez-vous Docker ?"** -> En n'utilisant pas l'utilisateur `root` à l'intérieur des conteneurs quand c'est possible, et en limitant les ports exposés sur l'hôte.

> [!TIP]
> **Astuce Jury** : Parle de **scalabilité**. "Docker me permet de cloner un service instantanément si mon agence IA a besoin de plus de puissance de calcul pour un client."
