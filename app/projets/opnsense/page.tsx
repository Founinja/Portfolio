"use client"

import Link from "next/link"
import { ArrowLeft, Download, ShieldAlert, Network, Server, Lock } from "lucide-react"

export default function OpnsenseProjectPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-orange-500/30">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Retour
          </Link>
          <span className="text-xs font-mono text-purple-400/70 uppercase tracking-widest">Épreuve E6 SISR</span>
        </div>
      </nav>

      {/* HEADER / HERO ARTICLE */}
      <header className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium border border-purple-500/20">
              Projet E6
            </span>
            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-xs font-medium border border-orange-500/20">
              Sécurité
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Infrastructure de Sécurité avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">OPNsense</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Conception d'une maquette de pare-feu centralisé en laboratoire. Le projet est actuellement en phase d'auto-formation dans un environnement virtualisé (VMware) pour valider les concepts de routage et de filtrage.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
            <span>Environnement : Proxmox / VMware</span>
            <span>•</span>
            <span>OS : FreeBSD</span>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL (FORMAT ARTICLE) */}
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          
          <article className="prose prose-invert prose-orange max-w-none">
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <ShieldAlert className="text-orange-500" /> Le Contexte (Labo E6)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Afin de préparer l'épreuve E6 et d'approfondir mes compétences en sécurité périmétrique, j'ai décidé de monter une maquette complète simulant une entreprise hébergeant de multiples services web. L'objectif de ce Proof of Concept est d'apprendre à déployer et configurer un véritable pare-feu NGFW open-source.
            </p>

            <div className="bg-[#111] p-6 rounded-2xl border border-white/5 my-8">
              <h4 className="text-lg font-bold text-white mb-4">Objectifs de sécurité :</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Isoler le réseau Invité (VLAN 240) du réseau interne.</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Sécuriser l'accès aux serveurs internes (DMZ - VLAN 220).</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Gérer le routage des 5 VLANs métiers.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Network className="text-purple-400" /> Topologie & Routage Inter-VLAN
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              La topologie étudiée repose sur le déploiement d'<strong>OPNsense</strong> sous forme de machine virtuelle. La configuration s'appuie sur deux interfaces réseau principales : une patte WAN connectée à Internet et une patte LAN connectée au switch cœur de réseau en mode Trunk (802.1Q).
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              L'objectif est d'utiliser le pare-feu comme passerelle par défaut pour l'ensemble du parc en créant des sous-interfaces virtuelles côté LAN pour gérer la segmentation :
            </p>

            {/* TABLEAU DES VLANS */}
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-sm text-gray-400">
                    <th className="pb-3 font-medium">VLAN ID</th>
                    <th className="pb-3 font-medium">Nom / Zone</th>
                    <th className="pb-3 font-medium">Réseau IP</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-orange-400 font-mono">210</td>
                    <td className="py-3 text-gray-300">Administration</td>
                    <td className="py-3 text-gray-400 font-mono">10.20.210.0/24</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-purple-400 font-mono">220</td>
                    <td className="py-3 text-gray-300">DMZ (Serveurs)</td>
                    <td className="py-3 text-gray-400 font-mono">10.20.220.0/24</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 text-gray-400 font-mono">240</td>
                    <td className="py-3 text-gray-300">Invités (Isolé)</td>
                    <td className="py-3 text-gray-400 font-mono">10.20.240.0/24</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Lock className="text-orange-500" /> Filtrage et Règles (Objectifs)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              La politique de sécurité ciblée repose sur une approche <em>Deny All</em>. La mise en œuvre prévoit la conception d'une matrice de flux stricte :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 ml-4">
              <li>Le <strong>VLAN Invité</strong> possède une règle l'autorisant à sortir vers la passerelle WAN, mais une règle prioritaire bloque toute destination vers les réseaux privés RFC1918.</li>
              <li>Le <strong>VLAN Administration</strong> est le seul autorisé à accéder à l'interface d'administration web d'OPNsense (sur le port 443).</li>
              <li>Une règle de <strong>Port Forwarding (NAT)</strong> a été mise en place sur l'interface WAN pour rediriger le trafic HTTP/HTTPS entrant vers le serveur web situé en DMZ.</li>
            </ul>



            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Server className="text-purple-400" /> Simulation VMware
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Pour valider ces compétences avant l'examen final, ce projet sert de base d'expérimentation sur un environnement VMware Workstation. L'utilisation des Virtual Networks (`vmnet`) permet de simuler le switch L3 et de segmenter les machines clientes de manière étanche.
            </p>

          </article>

          {/* DOCUMENTS E6 DOWNLOAD */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Plan de Réalisation & Ressources</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/OPNSense_E6_EPREUVE_PRATIQUE.pdf`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Download size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">Fiche de Réalisation E6</p>
                    <p className="text-xs text-gray-500">Format PDF</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
