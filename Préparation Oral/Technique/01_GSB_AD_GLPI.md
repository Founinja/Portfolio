# Fiche Technique : GSB, Active Directory et GLPI (Expert)

Ce document est ta "bible" pour la partie infrastructure traditionnelle. L'objectif est de montrer au jury que tu maîtrises la centralisation et l'automatisation.

---

## 1. GSB (L'Architecture Réseau)
**Analogie** : Imagine un hôpital. On ne veut pas que les patients en salle d'attente puissent entrer dans le bloc opératoire ou accéder aux dossiers médicaux. Le réseau, c'est pareil.

*   **VLANs (Virtual LAN)** : On découpe physiquement un seul switch en plusieurs réseaux virtuels.
    *   *Exemple* : VLAN 10 (Administration), VLAN 20 (Visiteurs). Même s'ils sont branchés sur le même appareil, ils ne se voient pas.
*   **Trunk (802.1Q)** : C'est l'autoroute qui permet de faire passer tous les VLANs entre un switch et un routeur sur un seul câble.

> [!TIP]
> **Astuce Jury** : Si on te demande pourquoi faire des VLANs, ne dis pas juste "pour séparer". Dis : "Pour **réduire la surface d'attaque** et optimiser la bande passante en limitant les domaines de diffusion."

---

## 2. Active Directory (Le Cerveau)
**Analogie** : C'est comme le système de badges d'une grande entreprise. Un seul badge (ton compte AD) te permet d'ouvrir les portes du bureau, d'utiliser l'imprimante et d'accéder à ton PC.

*   **Le Contrôleur de Domaine (DC)** : Le serveur qui détient la base de données.
    *   *Concept clé* : L'**Annuaire**. C'est une base de données d'objets (Utilisateurs, Ordinateurs, Groupes).
*   **DNS (Le GPS)** : Sans lui, l'AD meurt. Les ordinateurs utilisent le DNS pour trouver l'adresse IP du Contrôleur de Domaine.
*   **DHCP (Le Distributeur)** : Il donne les adresses IP. 
    *   *Question piège* : "Pourquoi le serveur a une IP fixe ?" -> "Parce que c'est un point de repère. Si le GPS (DNS) change de place tout le temps, personne ne le trouve."

### L'arme fatale : Les GPO (Group Policy Objects)
C'est ton outil de pouvoir. Tu définis une règle une fois, et elle s'applique à 1000 personnes.
*   **Exemple concret 1 (Sécurité)** : "Interdire l'exécution de fichiers .exe depuis une clé USB pour limiter les ransomwares."
*   **Exemple concret 2 (Productivité)** : "Connecter automatiquement le lecteur réseau `S:` (Partage) pour tout le service Marketing."

> [!TIP]
> **Astuce Jury** : Parle de "gestion industrielle". Dis : "Grâce aux GPO, je n'administre pas des PC individuellement, j'administre une **politique de sécurité globale**."

---

## 3. GLPI (Le Support et le Parc)
**Analogie** : C'est le carnet d'entretien de ta voiture mixé avec un service après-vente.

*   **Inventaire Automatisé** : Utilisation d'un agent (FusionInventory ou GLPI Agent) qui "scanne" le PC et envoie tout à GLPI.
    *   *Pourquoi ?* Pour savoir quel PC est trop vieux, qui a besoin de RAM, ou quels logiciels illégaux sont installés.
*   **Liaison AD / LDAP** :
    *   *L'intérêt* : L'utilisateur n'a pas de nouveau mot de passe à retenir. Il utilise ses identifiants Windows.
    *   *Explication technique* : GLPI va "interroger" l'AD via le protocole LDAP (port 389) pour vérifier l'identité de l'utilisateur.

> [!TIP]
> **Astuce Jury** : Insiste sur la **traçabilité**. "GLPI me permet de suivre l'historique d'un ticket : qui est intervenu, quand, et quelle a été la solution. C'est la base de la démarche **ITIL**."

---

## 📚 Résumé des flux (Pour le schéma)
1. **PC Client** demande une IP au **DHCP**.
2. **PC Client** demande au **DNS** où est le serveur AD.
3. **Utilisateur** se connecte (Auth **Kerberos** via l'AD).
4. **GPO** descend sur le PC pour configurer le fond d'écran et les lecteurs réseau.
5. **GLPI** vérifie les droits de l'utilisateur via **LDAP** pour le laisser ouvrir un ticket.
