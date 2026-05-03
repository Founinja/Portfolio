# Documentation d'entraînement E6 : OPNsense sur VMware

Ce document t'explique comment reproduire chez toi le TP Proxmox de la Maison des Ligues (M2L) en utilisant VMware (Workstation ou Player).

## 1. Topologie Réseau VMware (Le plus important !)

Sous Proxmox, tu avais des switchs virtuels et physiques. Sous VMware, on utilise le **Virtual Network Editor** (`vmnetcfg.exe`).

*   **Réseau WAN (Accès Internet de l'école) :** 
    *   Utilise la carte réseau **NAT (VMnet8)** ou **Bridged (VMnet0)** de VMware. 
    *   *Rôle :* Fournir Internet à OPNsense.
*   **Réseau LAN (Switch L3) :** 
    *   Utilise un réseau **Host-Only (ex: VMnet1)** ou un **LAN Segment**.
    *   *Rôle :* Connecter OPNsense à tes futures machines virtuelles de test (clients, serveurs) et faire passer tes VLANs (210, 220, etc.).

## 2. Création de la Machine Virtuelle

1.  **OS Invité :** Choisis **FreeBSD 13 64-bit** (OPNsense est basé sur FreeBSD).
2.  **Ressources :** 
    *   RAM : 2 Go (Minimum 1 Go, mais 2 Go recommandés).
    *   CPU : 2 vCores.
    *   Disque dur : 20 Go (Thin Provisioning).
3.  **Cartes Réseau (vNICs) :**
    *   **Network Adapter 1 :** NAT (Sera ton interface WAN, ex: `em0`).
    *   **Network Adapter 2 :** Host-Only ou LAN Segment (Sera ton interface LAN trunkée, ex: `em1`).

## 3. Installation Initiale

1.  Démarre sur l'ISO d'OPNsense.
2.  Connecte-toi en tant que `installer` (mot de passe: `opnsense`).
3.  Utilise le formatage ZFS (recommandé si tu as de la RAM) ou UFS.
4.  Une fois redémarré, connecte-toi en tant que `root` (mot de passe: `opnsense`).
5.  Le système va te demander d'assigner les interfaces.
    *   *WAN interface :* `em0` (ou `vmx0` selon le pilote VMware).
    *   *LAN interface :* `em1` (ou `vmx1`).

## 4. Reproduction du TP (Configuration via Web GUI)

Une fois l'installation terminée, OPNsense t'affichera son adresse IP LAN. Tape cette adresse dans le navigateur de ton PC Fixe (puisque tu es en Host-Only).

### A. Routage Inter-VLAN (Le cœur du TP M2L)
1.  Aller dans **Interfaces > Other Types > VLAN**.
2.  Crée tes VLANs :
    *   VLAN 210 (Admin) sur l'interface parent LAN (`em1`).
    *   VLAN 220 (DMZ) sur l'interface parent LAN.
    *   VLAN 230 (WiFi), 240 (Invité), 250 (Utilisateurs).
3.  Aller dans **Interfaces > Assignments** et ajoute tes VLANs pour les activer.
4.  Va dans les paramètres de chaque nouvelle interface (ex: `OPT1` renommé en `VLAN_ADMIN`) et configure le plan d'adressage statique (ex: `10.20.210.1/24`).

### B. DHCP
*   Va dans **Services > ISC DHCPv4** et active le DHCP pour chaque interface VLAN (sauf la DMZ si tes serveurs sont en IP fixes).

### C. NAT
*   Va dans **Firewall > NAT > Outbound**. Laisse en "Automatic rule generation" au début. OPNsense fera le NAT automatiquement de tes réseaux VLAN vers ton WAN.
*   Pour ton serveur DMZ, va dans **Firewall > NAT > Port Forward** pour rediriger les ports 80/443 de l'interface WAN vers l'IP interne de la DMZ (`10.20.220.10`).

### D. Règles de Filtrage (L'isolation)
*   Va dans **Firewall > Rules > VLAN_INVITE**.
    *   *Règle 1 (Bloquer) :* Action `Block`, Destination `LAN net` (Pour empêcher l'accès au réseau interne).
    *   *Règle 2 (Autoriser) :* Action `Pass`, Destination `any` (Pour autoriser Internet).

---
*Cette doc te permet de recréer l'exact environnement de ton épreuve E6 depuis ton PC fixe.*
