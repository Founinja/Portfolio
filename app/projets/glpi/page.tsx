"use client"

import Link from "next/link"
import { ArrowLeft, Download, Shield, Layout, Settings, Database, Users } from "lucide-react"

export default function GLPIProjectPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-blue-500/30">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Retour
          </Link>
          <span className="text-xs font-mono text-blue-400/70 uppercase tracking-widest">Épreuve E4 SISR</span>
        </div>
      </nav>

      {/* HEADER / HERO ARTICLE */}
      <header className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
              Gestion de Parc
            </span>
            <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-medium border border-red-500/20">
              Support ITIL
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Gestion de Parc & Helpdesk <br className="hidden md:block"/> avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">GLPI</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Optimisation du support utilisateur et de l'inventaire matériel via la solution open-source GLPI, couplée à FusionInventory pour une remontée automatique des données.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-mono">
            <span>Environnement : Proxmox</span>
            <span>•</span>
            <span>OS : Debian 12</span>
            <span>•</span>
            <span>Stack : Apache2, MariaDB, PHP</span>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          
          <article className="prose prose-invert prose-blue max-w-none">
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Users className="text-blue-500" /> Le Besoin Métier
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              La gestion d'un parc informatique moderne impose de s'éloigner des tableurs manuels au profit d'une solution centralisée. L'enjeu de ce projet était de mettre en œuvre une solution respectant les bonnes pratiques <strong>ITIL</strong> pour assurer une visibilité en temps réel sur les actifs et un support utilisateur fluide.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Settings className="text-blue-400" /> Architecture & Fonctionnalités
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              La solution s'appuie sur une stack <strong>LAMP</strong> (Linux Apache MariaDB PHP) et s'articule autour de trois axes majeurs de gestion :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 ml-4">
              <li><strong>Inventaire Automatisé :</strong> Utilisation de l'agent <strong>FusionInventory</strong> pour remonter automatiquement les caractéristiques matérielles (CPU, RAM, Disques) et logicielles des postes.</li>
              <li><strong>Gestion des Tickets (Helpdesk) :</strong> Centralisation des demandes d'assistance, permettant un suivi précis de l'historique des incidents et des résolutions.</li>
              <li><strong>Cycle de Vie des Actifs :</strong> Suivi des garanties, des contrats de maintenance et de l'amortissement du matériel informatique.</li>
            </ul>

            <p className="text-gray-400 text-sm mt-12 border-l-2 border-blue-500 pl-4 py-2">
              <strong>Bilan :</strong> Ce projet a permis de valider la mise en œuvre d'une solution de gestion de services (ITSM) et de comprendre l'importance de la donnée d'inventaire pour la prise de décision.
            </p>

          </article>

          {/* DOCUMENTS DOWNLOAD */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Documentation Technique</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href={`${process.env.NEXT_PUBLIC_BASE_PATH}/Projet_GLPI_Documentation.pdf`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Download size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Documentation GLPI</p>
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
