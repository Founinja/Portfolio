"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Rss, ShieldAlert, Cpu, Eye, ExternalLink, Newspaper, BrainCircuit, X, Loader2, Calendar, ShieldCheck, Network, Server as ServerIcon } from "lucide-react"

export default function VeillePage() {
  const [showRSS, setShowRSS] = useState(false)
  const [selectedRSS, setSelectedRSS] = useState<{ name: string, url: string } | null>(null)
  const [rssItems, setRssItems] = useState<any[]>([])
  const [isLoadingRss, setIsLoadingRss] = useState(false)

  const fetchRss = async (rss: { name: string, url: string }) => {
    setSelectedRSS(rss)
    setIsLoadingRss(true)
    setRssItems([])
    try {
      const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss.url)}`)
      const data = await res.json()
      if (data.status === 'ok') {
        setRssItems(data.items.slice(0, 6)) // Top 6 articles
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoadingRss(false)
    }
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-orange-500/30 font-sans">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#veille" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
            <ArrowLeft size={16} />
            Retour au Portfolio
          </Link>
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest px-3 py-1 bg-orange-500/10 rounded-full border border-orange-500/20">
            Épreuve E6
          </span>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <header className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex gap-3 mb-8">
            <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-sm font-bold text-gray-300 border border-white/10 shadow-lg">
              <BrainCircuit size={16} className="text-orange-500" />
              Intelligence Artificielle
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-sm font-bold text-gray-300 border border-white/10 shadow-lg">
              <ShieldAlert size={16} className="text-red-500" />
              Cybersécurité
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
            Veille <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Technologique
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            L'émergence des modèles d'IA avancés (Claude Mythos) et leur impact critique sur la découverte de vulnérabilités Zero-Day au sein des infrastructures.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-32 space-y-32">

        {/* PEDAGOGICAL SECTION: ZERO-DAY EXPLAINER */}
        <section className="bg-orange-500/5 border border-orange-500/20 rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-black shadow-lg shadow-orange-500/20">
              <ShieldAlert size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Comprendre les bases : L'attaque Zero-Day</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-300 leading-relaxed mb-6">
                Une attaque <strong>Zero-Day</strong> (ou "Jour Zéro") exploite une faille de sécurité dans un logiciel ou un système qui est encore <strong>inconnue</strong> de ses créateurs et du public.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-orange-500 font-bold border border-white/10">1</div>
                  <p className="text-sm text-gray-400"><span className="text-white font-bold">Le Danger :</span> Comme la faille est secrète, aucun correctif (patch) n'existe. Les systèmes de défense classiques (antivirus) ne la détectent pas.</p>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-orange-500 font-bold border border-white/10">2</div>
                  <p className="text-sm text-gray-400"><span className="text-white font-bold">L'Origine du nom :</span> On l'appelle "0-day" car le développeur a eu <strong>zéro jour</strong> pour créer un correctif avant que la faille ne soit exploitée.</p>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-orange-500 font-bold border border-white/10">3</div>
                  <p className="text-sm text-gray-400"><span className="text-white font-bold">L'Enjeu :</span> C'est une course contre la montre. L'IA (comme Claude Mythos) intervient ici pour aider les administrateurs à détecter ces failles avant les pirates.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#111] p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-black text-orange-500 mb-2 tracking-tighter">0-DAY</div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Vulnérabilité critique</p>
              <div className="w-full h-px bg-white/10 my-4"></div>
              <p className="text-sm text-gray-400 italic">"Une arme numérique invisible et sans défense immédiate."</p>
            </div>
          </div>
        </section>

        {/* LE SUJET : CARTES ANALYTIQUES */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10">
              <Eye size={24} />
            </div>
            <h2 className="text-3xl font-bold">Le Cœur du Sujet</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#151515] to-[#0f0f0f] border border-orange-500/20 hover:border-orange-500/50 transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <BrainCircuit size={200} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Claude Mythos & Génération Zero-Day</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                L'apparition de modèles d'IA ultra-performants comme <strong>Claude Mythos</strong> modifie le paradigme de la cybersécurité. Ces modèles sont capables d'analyser le code source d'applications ou de services d'infrastructure (Serveurs Web, BDD) pour y déceler des vulnérabilités inédites (Zero-Day) en quelques secondes, là où des chercheurs humains mettraient des mois.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-red-500 shrink-0"></div>
                  Automatisation de l'ingénierie inverse (Reverse Engineering).
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-red-500 shrink-0"></div>
                  Création de malwares polymorphes capables de contourner les EDR.
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#151515] to-[#0f0f0f] border border-blue-500/20 hover:border-blue-500/50 transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={200} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Glasswing : La Parade ?</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Face à ce potentiel destructeur, des initiatives comme le <strong>Project Glasswing</strong> visent à cloisonner ("gating") l'accès à ces IA offensives. Il s'agit d'une approche de sécurité par restriction, où seules les équipes de "Blue Team" (défenseurs) et les administrateurs systèmes peuvent exploiter ces modèles pour auditer leurs propres réseaux avant les attaquants.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 shrink-0"></div>
                  Contrôle d'accès strict via API sécurisées.
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500 shrink-0"></div>
                  Utilisation des LLM pour générer des règles de pare-feu correctives.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* IMPACT SISR */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
              <ServerIcon size={24} />
            </div>
            <h2 className="text-3xl font-bold">Impact pour l'Administrateur (SISR)</h2>
          </div>

          <div className="bg-[#111] p-10 rounded-3xl border border-white/5 shadow-2xl">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
              En tant que futur administrateur réseau et systèmes, cette veille soulève des questions directes sur ma façon de concevoir et de défendre une infrastructure.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500 mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Audit de Configuration</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  L'IA permet d'auditer automatiquement les fichiers de configuration (Nginx, Docker Compose) avant leur déploiement afin de détecter les failles classiques ou les ports laissés ouverts.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500 mb-4">
                  <Cpu size={20} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Analyse de Scripts</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Face à un incident, l'administrateur peut utiliser un LLM pour désobfusquer et analyser instantanément un script malveillant (ex: PowerShell) afin d'en comprendre l'impact.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 mb-4">
                  <ShieldAlert size={20} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Défense Proactive</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  L'admin système ne doit plus seulement réagir aux attaques, il doit utiliser des "agents IA" pour auditer ses propres conteneurs (Docker) et VPS en continu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTHODOLOGIE ET AUTOMATISATION */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10">
              <BrainCircuit size={24} />
            </div>
            <h2 className="text-3xl font-bold">Méthodologie & Automatisation IA</h2>
          </div>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-4xl">
            Pour maintenir une veille technique de haut niveau sur les attaques Zero-Day et les infrastructures, j'ai mis en place un écosystème automatisé. Je ne cherche plus l'information, <strong>ce sont mes agents IA qui la qualifient pour moi.</strong>
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* HERMES AGENT */}
            <div className="bg-[#111] rounded-3xl border border-orange-500/20 overflow-hidden shadow-2xl group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10"></div>
                <img src="/hermes-demo.png" alt="Interface de l'agent Hermes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 relative z-20 -mt-20">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-black mb-6 shadow-lg shadow-orange-500/30">
                  <Cpu size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Agent IA "Hermes"</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Déploiement d'un agent IA autonome capable d'analyser en temps réel les bases de données CVE et les repositories GitHub liés à la sécurité. L'agent me notifie instantanément via Telegram dès qu'une vulnérabilité critique est découverte sur des services que j'administre (Nginx, Docker, Windows Server).
                </p>
              </div>
            </div>

            {/* N8N AUTOMATION */}
            <div className="bg-[#111] rounded-3xl border border-blue-500/20 overflow-hidden shadow-2xl group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10"></div>
                <img src="/n8n-demo.png" alt="Workflow n8n de veille" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 relative z-20 -mt-20">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-black mb-6 shadow-lg shadow-blue-500/30">
                  <Network size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Workflows n8n</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Orchestration complète de la veille via <strong>n8n</strong>. Le système agrège des dizaines de flux RSS, passe les articles au filtre d'un LLM pour déterminer leur pertinence, et injecte les données structurées directement dans mon Dashboard Obsidian personnel.
                </p>
              </div>
            </div>
          </div>

          {/* SOURCES CLASSIQUES REDUITES */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-300">Sources de références (Ciblées)</h3>
              <div className="grid gap-4">
                {[
                  { title: "Publications Anthropic & OpenAI", type: "Recherche IA" },
                  { title: "Bases de données CVE / Mitre ATT&CK", type: "Tech Pur" },
                  { title: "HackerNews & Reddit (r/LocalLLaMA)", type: "Underground" }
                ].map((source, i) => (
                  <div key={i} className="p-4 bg-[#111] rounded-2xl border border-white/5 flex items-center justify-between group">
                    <span className="font-bold text-white group-hover:text-orange-500 transition-colors">{source.title}</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold px-2 py-1 bg-white/5 rounded-md">{source.type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-300">Outils d'agrégation</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-2xl border border-white/5">
                  <div className="p-3 bg-green-500/10 text-green-500 rounded-xl"><Rss size={20} /></div>
                  <div>
                    <h4 className="font-bold text-white">Feedly</h4>
                    <p className="text-xs text-gray-400">Pour le fallback manuel des flux RSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LECTEUR RSS INTERACTIF */}
        <section className="pt-20 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Actualités en direct</h2>
              <p className="text-gray-400">Mes flux RSS pour un suivi en temps réel.</p>
            </div>
            <button
              onClick={() => setShowRSS(!showRSS)}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
            >
              <Rss size={18} />
              {showRSS ? "Masquer les flux" : "Ouvrir le lecteur RSS"}
            </button>
          </div>

          {showRSS && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {[
                { name: "ANSSI - Alertes de Sécurité", url: "https://www.cert.ssi.gouv.fr/feed/", type: "GOUV" },
                { name: "ZDNet Sécurité", url: "https://www.zdnet.fr/feeds/rss/actualites/informatique/securite-3900000015.htm", type: "ACTU" },
                { name: "The Hacker News", url: "https://feeds.feedburner.com/TheHackersNews", type: "GLOBAL" },
                { name: "MIT Tech Review (AI)", url: "https://www.technologyreview.com/topic/artificial-intelligence/feed/", type: "IA" },
                { name: "Korben (Tech & Cyber)", url: "https://korben.info/feed", type: "BLOG" }
              ].map((rss, idx) => (
                <button
                  key={idx}
                  onClick={() => fetchRss(rss)}
                  className="p-6 bg-[#111] border border-white/10 rounded-2xl hover:border-orange-500/50 hover:bg-white/5 transition-all group flex flex-col text-left"
                >
                  <div className="flex items-center justify-between w-full mb-4">
                    <span className="text-[10px] px-2 py-1 bg-white/5 text-gray-400 rounded-md uppercase font-bold tracking-widest border border-white/10">
                      {rss.type}
                    </span>
                    <ExternalLink size={16} className="text-gray-600 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">{rss.name}</h4>
                </button>
              ))}
            </div>
          )}
        </section>

      </main>

      {/* RSS READER MODAL */}
      {selectedRSS && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedRSS(null)}>
          <div className="bg-[#111] border border-white/10 rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-[#0a0a0a]">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="p-2 bg-orange-500/20 text-orange-500 rounded-lg"><Rss size={20} /></div>
                  {selectedRSS.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2 truncate max-w-[300px] sm:max-w-md font-mono">{selectedRSS.url}</p>
              </div>
              <button onClick={() => setSelectedRSS(null)} className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-orange-500 hover:text-white text-gray-400 rounded-full transition-all flex-shrink-0">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6 bg-[#0a0a0a]/50">
              {isLoadingRss ? (
                <div className="flex flex-col items-center justify-center py-32 text-orange-500">
                  <Loader2 size={48} className="animate-spin mb-6" />
                  <p className="text-gray-400 font-medium tracking-wide">Récupération du flux en cours...</p>
                </div>
              ) : rssItems.length > 0 ? (
                rssItems.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="block p-6 bg-[#111] border border-white/5 hover:border-orange-500/30 rounded-2xl transition-all shadow-lg group">
                    <h4 className="text-xl text-white font-bold group-hover:text-orange-400 mb-3 leading-snug">{item.title}</h4>
                    <div className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2" dangerouslySetInnerHTML={{ __html: item.description?.replace(/<[^>]*>?/gm, '') || '' }} />
                    <div className="flex flex-wrap items-center text-xs text-gray-500 font-bold uppercase tracking-wider gap-6">
                      <span className="flex items-center gap-2"><Calendar size={14} className="text-orange-500/50" /> {new Date(item.pubDate).toLocaleDateString('fr-FR')}</span>
                      {item.author && <span className="truncate max-w-[150px] text-gray-400">Par {item.author}</span>}
                    </div>
                  </a>
                ))
              ) : (
                <div className="text-center py-20 text-gray-500">
                  <ShieldAlert size={48} className="mx-auto mb-4 opacity-20" />
                  <p>Aucun article récent n'a pu être récupéré de ce flux.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
