"use client"

import Link from "next/link"
import { ArrowLeft, Download, Network, Server, ShieldCheck, ChevronRight } from "lucide-react"

export default function GSBProjectPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-blue-500/30">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Retour
          </Link>
          <span className="text-xs font-mono text-blue-400/70 uppercase tracking-widest">Projet Académique SISR</span>
        </div>
      </nav>

      {/* HEADER / HERO ARTICLE */}
      <header className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
              Projet E4
            </span>
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium border border-green-500/20">
              Note : Excellent
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Infrastructure Réseau <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">GSB</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Refonte de l'infrastructure d'un laboratoire pharmaceutique. Un projet majeur divisé en deux phases : la gestion du parc informatique (Support) et le maquettage du réseau (Infrastructure).
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
            <span>Environnement : Cisco / Windows</span>
            <span>•</span>
            <span>Phase : Déploiement & Réseau</span>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL (FORMAT ARTICLE) */}
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          
          <article className="prose prose-invert prose-blue max-w-none">
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <ShieldCheck className="text-blue-500" /> Le Besoin Client
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Le laboratoire GSB (Galaxy Swiss Bourdin) a sollicité une restructuration complète de ses services informatiques. Le projet visait à la fois à uniformiser le parc de terminaux utilisateurs et à segmenter le réseau pour sécuriser les données sensibles de recherche.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Server className="text-blue-500" /> Phase 1 : Gestion de Parc & Support
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              La première étape a consisté à rationaliser le parc informatique. J'ai travaillé sur la sélection de terminaux adaptés aux besoins des collaborateurs (mobilité vs sédentarité) et sur l'uniformisation logicielle.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 ml-4">
              <li><strong>Masterisation :</strong> Élaboration d'une procédure de création d'images système (Masters) pour un déploiement rapide et identique sur l'ensemble des postes.</li>
              <li><strong>Fiches Techniques :</strong> Analyse et sélection de matériel fiable (Dell Latitude, HP ProBook, Lenovo ThinkPad) en fonction des profils utilisateurs.</li>
              <li><strong>Charte d'Utilisation :</strong> Rédaction d'une charte informatique définissant les droits et devoirs des utilisateurs vis-à-vis du SI.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Network className="text-indigo-400" /> Phase 2 : Infrastructure Réseau (Cisco)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              La seconde phase concernait la conception de la topologie réseau sous <strong>Packet Tracer</strong>. L'enjeu était de gérer le flux de données entre les différents départements tout en optimisant l'adressage IP.
            </p>
            
            <div className="bg-[#111] p-6 rounded-2xl border border-white/5 my-8">
              <h4 className="text-lg font-bold text-white mb-4">Compétences validées :</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> <strong>VLANs & Segmentation :</strong> Isolation des flux RH, Comptabilité et Recherche.</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> <strong>Routage Inter-VLAN :</strong> Configuration du routage sur switch de niveau 3.</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> <strong>Adressage VLSM :</strong> Découpage intelligent des sous-réseaux pour économiser les adresses.</li>
              </ul>
            </div>

            {/* ENCART SCHÉMA PACKET TRACER */}
            <div className="my-12">
              <div className="bg-[#111] p-2 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="/Portfolio/gsb-network.png" 
                  alt="Topologie Réseau GSB Cisco Packet Tracer" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <p className="text-center text-xs text-gray-500 mt-3 italic">Topologie réseau centralisée et segmentation VLAN du projet GSB</p>
            </div>

            <p className="text-gray-400 text-sm mt-12 border-l-2 border-blue-500 pl-4 py-2">
              <strong>Bilan :</strong> Ce projet m'a permis de comprendre l'importance d'une documentation rigoureuse (fiches de procédures, schémas réseau) pour assurer la continuité de service.
            </p>

          </article>

          {/* DOCUMENTS DOWNLOAD */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Documents techniques</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/Portfolio/GSB_Archives.zip" download className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Download size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Projets GSB</p>
                    <p className="text-xs text-gray-500">Archive ZIP (Phases 1 & 2)</p>
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
