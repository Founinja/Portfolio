"use client"

import Link from "next/link"
import { ArrowLeft, Download, Shield, Activity, Lock, Search, Eye } from "lucide-react"

export default function WazuhProjectPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-red-500/30">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Retour
          </Link>
          <span className="text-xs font-mono text-red-400/70 uppercase tracking-widest">Expertise Cybersécurité</span>
        </div>
      </nav>

      {/* HEADER / HERO ARTICLE */}
      <header className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-medium border border-red-500/20">
              SIEM & XDR
            </span>
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium border border-green-500/20">
              SISR Secure
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Protection des Endpoints <br className="hidden md:block"/> avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Wazuh</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Déploiement d'une plateforme de sécurité unifiée pour la détection des menaces, la surveillance de l'intégrité (FIM) et la conformité réglementaire.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-mono">
            <span>Environnement : Cloud / On-Prem</span>
            <span>•</span>
            <span>OS : Ubuntu Server</span>
            <span>•</span>
            <span>Composants : Indexer, Server, Dashboard</span>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          
          <article className="prose prose-invert prose-red max-w-none">
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Shield className="text-red-500" /> Sécurité Défensive Avancée
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Face à l'augmentation des cybermenaces, la simple protection par pare-feu ne suffit plus. Wazuh apporte une visibilité complète sur ce qui se passe <strong>à l'intérieur</strong> des serveurs et des postes de travail.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Activity className="text-blue-400" /> Fonctionnalités SISR Déployées
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 ml-4">
              <li><strong>FIM (File Integrity Monitoring) :</strong> Surveillance en temps réel des fichiers critiques du système. Toute modification non autorisée génère une alerte immédiate.</li>
              <li><strong>Détection de Rootkits :</strong> Scan régulier des systèmes pour identifier les comportements anormaux ou les processus cachés.</li>
              <li><strong>Réponse Active :</strong> Bannissement automatique des adresses IP en cas de détection d'attaque par force brute sur SSH.</li>
            </ul>

            {/* ENCART CAPTURE (PLACEHOLDER) */}
            <div className="my-12">
              <div className="bg-[#111] p-2 rounded-2xl border border-white/10">
                <div className="aspect-video bg-[#0a0a0a] rounded-xl flex items-center justify-center border border-white/5 relative overflow-hidden group">
                  <div className="relative text-center p-6">
                    <Eye className="w-10 h-10 text-gray-500 mx-auto mb-3" />
                    <p className="text-sm text-gray-400 font-medium">Tableau de bord de sécurité Wazuh</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-3 italic">Visualisation des alertes de sécurité en temps réel</p>
            </div>

          </article>

          {/* DOCUMENTS DOWNLOAD */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Documentation Technique</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/Projet_Wazuh_Documentation.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                    <Download size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">Documentation Wazuh</p>
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
