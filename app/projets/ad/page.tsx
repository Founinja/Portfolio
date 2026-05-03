"use client"

import Link from "next/link"
import { ArrowLeft, Download, Server, ShieldCheck, Users, Settings } from "lucide-react"

export default function ADProjectPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-indigo-500/30">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Retour
          </Link>
          <span className="text-xs font-mono text-indigo-400/70 uppercase tracking-widest">Formation Académique</span>
        </div>
      </nav>

      {/* HEADER / HERO ARTICLE */}
      <header className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-medium border border-indigo-500/20">
              Atelier Pratique
            </span>
            <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs font-medium border border-white/10">
              Windows Server
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Gestion d'un Domaine <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Active Directory</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Projet de découverte et de mise en œuvre des services d'annuaire AD DS. Apprentissage de la centralisation des ressources et de la sécurisation des accès utilisateurs.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
            <span>OS : Windows Server 2022</span>
            <span>•</span>
            <span>Rôle : AD DS / DNS / DHCP</span>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          
          <article className="prose prose-invert prose-indigo max-w-none">
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Users className="text-indigo-500" /> Gestion des Identités
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              L'objectif principal de cet atelier était de comprendre comment centraliser la gestion des utilisateurs et des ordinateurs au sein d'une infrastructure d'entreprise. 
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 ml-4">
              <li><strong>Installation du rôle AD DS :</strong> Promotion du serveur en tant que Contrôleur de Domaine (DC).</li>
              <li><strong>Structure hiérarchique :</strong> Création d'Unités d'Organisation (OU) pour organiser les objets par service ou par site géographique.</li>
              <li><strong>Provisioning :</strong> Création de comptes utilisateurs, de groupes de sécurité et de listes de distribution.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Settings className="text-purple-400" /> Stratégies de Groupe (GPOs)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              La puissance de l'AD réside dans les GPOs, qui permettent d'appliquer des configurations de manière industrielle sur tout ou partie du parc.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 ml-4">
              <li><strong>Restrictions de sécurité :</strong> Désactivation de l'invite de commande, du panneau de configuration et de l'utilisation des clés USB.</li>
              <li><strong>Automatisation :</strong> Déploiement automatique de lecteurs réseau et d'imprimantes en fonction de l'appartenance aux groupes.</li>
              <li><strong>Personnalisation :</strong> Configuration du fond d'écran d'entreprise et des paramètres proxy pour les navigateurs.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Server className="text-indigo-500" /> Services de Base
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Un domaine Active Directory ne peut fonctionner sans une infrastructure DNS et DHCP robuste.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 ml-4">
              <li><strong>DNS :</strong> Gestion des zones de recherche directe et inversée pour la résolution de noms.</li>
              <li><strong>DHCP :</strong> Configuration des étendues et des réservations pour automatiser l'adressage IP des clients.</li>
            </ul>

          </article>

          {/* DOCUMENTS DOWNLOAD */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Documentation de formation</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/Portfolio/Projet_AD_Documentation.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Download size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">Documentation AD DS</p>
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
