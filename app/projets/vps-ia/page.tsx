"use client"

import Link from "next/link"
import { ArrowLeft, Download, Server, ShieldCheck, Box, Network, Cpu } from "lucide-react"

export default function VPSProjectPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-orange-500/30">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Retour
          </Link>
          <span className="text-xs font-mono text-orange-400/70 uppercase tracking-widest">Projet Client - Freelance</span>
        </div>
      </nav>

      {/* HEADER / HERO ARTICLE */}
      <header className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-xs font-medium border border-orange-500/20">
              Docker
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/20">
              Nginx
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">IA & Reverse Proxy</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Déploiement d'une stack technique pour une agence d'automatisation. Mise en place d'un VPS Hostinger sécurisé, conteneurisation des services et gestion des flux via un reverse proxy optimisé.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 font-mono">
            <span>Environnement : Hostinger VPS</span>
            <span>•</span>
            <span>OS : Ubuntu 24.04 LTS</span>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL (FORMAT ARTICLE) */}
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          
          <article className="prose prose-invert prose-orange max-w-none">
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <ShieldCheck className="text-orange-500" /> Sécurisation du Serveur
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              La première étape du projet a été de transformer un VPS nu en une forteresse capable d'héberger des outils d'automatisation critiques. J'ai configuré le pare-feu **UFW** pour ne laisser passer que le strict nécessaire (SSH, HTTP, HTTPS) et désactivé l'authentification par mot de passe au profit de clés SSH RSA.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Box className="text-blue-400" /> Conteneurisation avec Docker
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Pour garantir la portabilité et l'isolation des services, j'ai utilisé **Docker Compose**. Cela permet de gérer de manière déclarative les applications et leurs dépendances (bases de données, caches).
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-2">n8n (Automatisation)</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Moteur de workflow auto-hébergé permettant de connecter des centaines d'APIs et d'intégrer des agents IA personnalisés.</p>
              </div>
              <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-2">Chatwoot (Support)</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Plateforme omnicanale nécessitant une stack complète (Ruby on Rails, PostgreSQL, Redis).</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Network className="text-orange-400" /> Orchestration Nginx
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nginx agit ici comme le chef d'orchestre. Il reçoit les requêtes HTTPS, gère les certificats **SSL Let's Encrypt** via Certbot, et redirige le trafic vers les bons conteneurs Docker.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm italic border-l-2 border-orange-500 pl-4">
              "Le défi technique majeur a été la configuration des WebSockets pour n8n, exigeant des directives `Upgrade` précises pour maintenir la connexion en temps réel entre le navigateur et le serveur."
            </p>

            {/* ENCART SCHÉMA INFRA */}
            <div className="my-12">
              <div className="bg-[#111] p-2 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img 
                  src="/Portfolio/vps-diagram.png" 
                  alt="Architecture VPS & Flux Nginx" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <p className="text-center text-xs text-gray-500 mt-3 italic">Diagramme de flux et architecture du VPS Hostinger</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <Cpu className="text-red-500" /> Impact SISR
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ce projet valide des compétences clés du référentiel SISR : l'administration système Linux avancée, la sécurisation des services applicatifs, et la gestion d'une infrastructure de publication web sécurisée.
            </p>

          </article>

          {/* DOCUMENTS DOWNLOAD */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Ressources du projet</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors group text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Download size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">Fiche de déploiement</p>
                    <p className="text-xs text-gray-500">Documentation technique</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
