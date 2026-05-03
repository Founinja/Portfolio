"use client"

import Link from "next/link"
import { ArrowLeft, Download, Search, Server, Activity, Database } from "lucide-react"

export default function GraylogProjectPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-green-500/30">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Retour
          </Link>
          <span className="text-xs font-mono text-green-400/70 uppercase tracking-widest">Épreuve E6 SISR</span>
        </div>
      </nav>

      {/* HEADER / HERO ARTICLE */}
      <header className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium border border-purple-500/20">
              Projet E6
            </span>
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-medium border border-green-500/20">
              Supervision
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Supervision & Centralisation des logs <br className="hidden md:block"/> avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Graylog</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Maquettage sous VMware d'une solution centralisée (SIEM) en vue d'un déploiement futur. L'objectif actuel est de maîtriser la stack d'indexation des journaux et la création de tableaux de bord de sécurité.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-mono">
            <span>Environnement : Proxmox / VMware</span>
            <span>•</span>
            <span>OS : Debian 12</span>
            <span>•</span>
            <span>Stack : MongoDB, OpenSearch</span>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL (FORMAT ARTICLE) */}
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          
          <article className="prose prose-invert prose-green max-w-none">
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Activity className="text-green-500" /> Objectif du Proof of Concept
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ce projet de Proof of Concept (PoC) vise à simuler un environnement complexe pour s'entraîner à la collecte et à l'analyse de données syslog. L'objectif est de préparer un véritable **Maintien en Condition Opérationnelle (MCO)** en maîtrisant les flux de logs et la corrélation d'événements.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Database className="text-blue-400" /> Architecture retenue
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              L'architecture technique s'appuie sur le déploiement de <strong>Graylog</strong> sur une machine virtuelle Debian 12. Cette solution d'entreprise nécessite trois composants fondamentaux pour fonctionner :
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              <div className="bg-[#111] p-5 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-2">MongoDB</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Stocke uniquement la configuration de Graylog (utilisateurs, dashboards, paramètres).</p>
              </div>
              <div className="bg-[#111] p-5 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-2">OpenSearch</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Le moteur de recherche puissant qui indexe et stocke l'immense volume de journaux entrants.</p>
              </div>
              <div className="bg-[#111] p-5 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-2">Graylog Server</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Le cerveau du système qui reçoit les logs, les traite, et fournit l'interface web (Port 9000).</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Server className="text-purple-400" /> Objectif : Intégration Syslog avec OPNsense
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              L'intégration technique prévue consiste à configurer un <strong>Input Syslog UDP</strong> sur le port 514 dans Graylog pour centraliser les flux de sécurité.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              La méthodologie côté pare-feu OPNsense implique le paramétrage d'une cible de journalisation (Logging Target) pointant vers le serveur Graylog. Cette configuration permettrait d'analyser en temps réel chaque paquet droppé ou accepté par les règles de filtrage.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Search className="text-orange-500" /> Dashboards et Alertes (Envisagés)
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8 ml-4">
              <li><strong>Conception d'un Dashboard :</strong> L'objectif est de visualiser le nombre de requêtes bloquées par le pare-feu avec une répartition par IPs sources (Top Sources).</li>
              <li><strong>Système d'Alertes :</strong> Le plan de déploiement inclut la configuration de notifications automatiques si un seuil critique de tentatives de connexion infructueuses est atteint (détection de Brute Force ou scan de ports).</li>
            </ul>



            <p className="text-gray-400 text-sm mt-12 border-l-2 border-green-500 pl-4 py-2">
              <strong>Statut :</strong> Ce projet sert de base d'expérimentation sur un environnement VMware Workstation local pour valider chaque étape technique du référentiel SISR avant l'examen final.
            </p>

          </article>

          {/* DOCUMENTS E6 DOWNLOAD */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Plan de Réalisation & Ressources</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/Portfolio/Graylog_E6_EPREUVE_PRATIQUE.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                    <Download size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">Fiche de Réalisation E6</p>
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
