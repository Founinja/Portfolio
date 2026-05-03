# Phase 2 & 3 : GSB, Active Directory et GLPI

Ces trois briques forment le cœur de ton infrastructure "traditionnelle" pour l'examen. Le jury t'attendra sur la gestion des droits et l'automatisation du support.

## 1. GSB (L'Infrastructure de base)
**C'est quoi ?** Un projet académique simulant le réseau d'un laboratoire pharmaceutique.
**Rôle** : Montrer ta capacité à segmenter un réseau et à fournir des services de base.
*   **Segmentation** : Utilisation de **VLANs** (VLAN 10: Admin, VLAN 20: Prod, VLAN 30: Guest) pour isoler les flux.
*   **Routage** : Inter-VLAN pour permettre (ou bloquer) la communication entre services.

## 2. Active Directory Domain Services (AD DS)
**C'est quoi ?** L'annuaire qui centralise tout (utilisateurs, ordinateurs, droits).
**Points clés à expliquer :**
*   **DNS** : Indispensable. Sans DNS, pas d'AD. Il permet de résoudre les noms des contrôleurs de domaine.
*   **DHCP** : Distribue les IPs automatiquement. Le jury demandera : "Pourquoi une IP fixe sur le serveur et dynamique sur les clients ?".
*   **OU (Unités d'Organisation)** : Permettent de structurer l'entreprise par service (RH, Ventes, IT) pour appliquer des politiques différentes.
*   **GPO (Group Policy Objects)** : L'outil d'automatisation par excellence.
    *   *Exemples* : Déploiement de lecteurs réseau, restriction du panneau de configuration, fond d'écran imposé.

## 3. GLPI (Gestion de Parc et Ticketing)
**C'est quoi ?** Un outil ITSM (IT Service Management) pour gérer le matériel et les demandes utilisateurs.
**L'intégration cruciale : Authentification LDAP**
Le jury demandera souvent : "Pourquoi lier GLPI à l'AD ?".
*   **Réponse** : "Pour la centralisation. L'utilisateur utilise le même mot de passe que sa session Windows. S'il quitte l'entreprise, on désactive son compte dans l'AD et son accès GLPI est coupé instantanément."
**FusionInventory / GLPI Agent :**
*   Permet de remonter automatiquement la configuration des PCs (RAM, CPU, logiciels installés) sans saisie manuelle.

---

### 💡 Questions probables du jury :
1.  **"C'est quoi un contrôleur de domaine ?"** -> C'est le serveur qui héberge la base de données de l'AD et authentifie les utilisateurs.
2.  **"À quoi sert une GPO ?"** -> À appliquer des configurations de manière industrielle sur des centaines de machines en quelques clics.
3.  **"Quelle est la différence entre un groupe de sécurité et une Unité d'Organisation ?"** -> L'OU sert à ranger et à appliquer des GPO, le Groupe sert à donner des droits sur des dossiers ou fichiers.
