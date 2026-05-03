"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  GraduationCap,
  Briefcase,
  Rocket,
  Download,
  Mail,
  Linkedin,
  Github,
  Code,
  Server,
  Shield,
  Cpu,
  FileText,
  ChevronDown,
  Rss,
  ExternalLink,
  Loader2,
  Newspaper,
  Calendar,
  ArrowRight,
  Network,
  ShieldCheck,
  Server as ServerIcon,
  Plus,
  MapPin,
  Send,
} from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")


  // Détection du scroll pour la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Détection de la section active
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll vers une section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold text-white hover:scale-105 transition-transform"
            >
              Jordan Aziaha
            </button>

            <div className="hidden md:flex items-center gap-10">
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm hover:text-white transition-colors ${activeSection === "about" ? "text-white" : "text-gray-400"}`}
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`text-sm hover:text-white transition-colors ${activeSection === "experience" ? "text-white" : "text-gray-400"}`}
              >
                Expérience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-sm hover:text-white transition-colors ${activeSection === "projects" ? "text-white" : "text-gray-400"}`}
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`text-sm hover:text-white transition-colors ${activeSection === "skills" ? "text-white" : "text-gray-400"}`}
              >
                Compétences
              </button>
              <Link
                href="/veille"
                className={`text-sm hover:text-white transition-colors text-gray-400`}
              >
                Veille
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-sm hover:text-white transition-colors ${activeSection === "contact" ? "text-white" : "text-gray-400"}`}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2.5 rounded-full bg-white text-orange-600 font-medium text-sm hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Me contacter
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                Expérience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                Compétences
              </button>
              <Link
                href="/veille"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                Veille
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,120,60,0.4),transparent_60%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          {/* SISR BADGE (Inspired by Felix) */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-mono text-xs font-bold uppercase tracking-widest">
                ÉTUDIANT BTS SIO - OPTION SISR (2ÈME ANNÉE)
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center md:text-left">
            <div className="animate-fade-in">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none text-white tracking-tighter">
                JORDAN
                <br />
                AZIAHA
              </h1>

              <p className="text-white/90 text-2xl md:text-3xl font-display uppercase tracking-[0.2em] mb-12 opacity-90">
                Infrastructure & Security Expert
              </p>

              {/* QUICK ACCESS BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16 max-w-2xl mx-auto md:mx-0">
                <a
                  href="/cv-jordan-aziaha.pdf"
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-3 bg-white text-orange-600 py-4 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl"
                >
                  <FileText size={20} />
                  CONSULTER MON CV
                </a>
                <a
                  href="/tableau-synthese-jordan-aziaha.pdf"
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-white hover:text-orange-600 transition-all shadow-xl"
                >
                  <Newspaper size={20} />
                  TABLEAU DE SYNTHÈSE
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-white/70 text-base leading-relaxed mb-8">
                    Étudiant en 2ème année de BTS SIO (SISR), j'ai consolidé durant ces deux ans un socle technique robuste en administration systèmes et réseaux, au travers de projets concrets axés sur la performance et la sécurité.
                  </p>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all hover:scale-105 shadow-xl border border-orange-400/30"
                  >
                    Voir mes réalisations
                    <ArrowRight size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/50 text-sm mb-2">01</p>
                    <p className="text-white font-medium">Infrastructure IT</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-2">02</p>
                    <p className="text-white font-medium">Réseaux & Systèmes</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-2">03</p>
                    <p className="text-white font-medium">Scripting & Automatisation</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-2">04</p>
                    <p className="text-white font-medium">Sécurité & Supervision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <p className="text-orange-500 text-lg font-medium mb-4">Présentation</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl">
              À Propos de <span className="text-orange-500">Moi</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Sécuriser et optimiser les infrastructures de demain</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Actuellement en 2ème année de **BTS SIO spécialité SISR à l'école IPSSI**, je me consacre à l'apprentissage des meilleures pratiques en matière d'infrastructure et de réseau. Mon parcours a débuté avec un Bac général (NSI/SES), qui m'a permis de développer une base solide en informatique et une curiosité pour les systèmes complexes.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                J'ai la chance de mettre en pratique mes connaissances en conditions réelles puisque je suis en **alternance au sein d'une agence d'automatisation**. Avant cela, j'ai acquis mes premières expériences professionnelles lors d'un stage au **Ministère de la Justice (SNUM)** en 1ère année, où j'ai découvert les enjeux de la souveraineté numérique et de la haute disponibilité.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-orange-500/30 transition-all shadow-xl group">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">École</h4>
                <p className="text-gray-400 text-sm">IPSSI Marne-La-Vallée</p>
                <p className="text-orange-500 text-xs font-mono mt-2 uppercase tracking-widest">BTS SIO Option SISR</p>
              </div>

              <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all shadow-xl group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Alternance</h4>
                <p className="text-gray-400 text-sm">Agence d'Automatisation</p>
                <p className="text-blue-500 text-xs font-mono mt-2 uppercase tracking-widest">Gestion Cloud & VPS</p>
              </div>

              <div className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-green-500/30 transition-all shadow-xl group sm:col-span-2">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                  <Rocket size={24} />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Indépendant / Entrepreneur</h4>
                    <p className="text-gray-400 text-sm">Solutions d'Infrastructure Cloud</p>
                  </div>
                  <p className="text-green-500 text-xs font-mono uppercase tracking-widest">Docker & VPS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EXPÉRIENCE SECTION */}
      <section id="experience" className="py-32 bg-[#0f0f0f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <p className="text-orange-500 text-lg font-medium mb-4">Parcours professionnel</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">Expérience</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Freelance / Entrepreneur */}
            <div className="md:col-span-2 group p-10 rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 flex flex-col shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Indépendant - Solutions Cloud</h3>
                  <p className="text-orange-500 font-mono text-sm uppercase tracking-wider">Projets Clients Personnels</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs border border-orange-500/20">Activité Complémentaire</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Conception et déploiement d'infrastructures cloud pour des clients professionnels. Mise en place d'environnements conteneurisés sécurisés pour des services de communication et d'automatisation.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    Administration de VPS (Debian/Ubuntu)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    Conteneurisation d'applications (Docker & Docker Compose)
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    Sécurisation (Nginx Reverse Proxy, SSL, UFW)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    Déploiement de services (n8n, Chatwoot, Database)
                  </li>
                </ul>
              </div>
            </div>

            <div className="group p-10 rounded-3xl bg-[#151515] border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Stage de 1ère année</h3>
                  <p className="text-blue-500 font-mono text-sm uppercase tracking-wider">Ministère de la Justice (SNUM)</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-white/5 text-white/50 text-xs border border-white/10">2023 (8 semaines)</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Stage d'observation au sein du Service du Numérique. Découverte des infrastructures critiques et des enjeux de souveraineté numérique de l'administration judiciaire.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Étude de l'architecture réseau (Services Babylon & F5)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Visite et analyse du centre serveur (Nanterre)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Observation du formatage et de la gestion des données
                </li>
              </ul>
            </div>

            <div className="group p-10 rounded-3xl bg-[#151515] border border-white/5 hover:border-orange-500/30 transition-all duration-500 flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Alternance</h3>
                  <p className="text-orange-500 font-mono text-sm uppercase tracking-wider">Agence d'Automatisation</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-white/5 text-white/50 text-xs border border-white/10">2024 - Présent</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Déploiement de solutions d'automatisation et veille technologique. Optimisation de processus internes via des agents spécialisés.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  Automatisation de récupération de factures
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  Déploiement d'agents de traitement de données
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  Veille sur les outils de communication digitale
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* MES PROJETS */}
      <section id="projects" className="py-32 bg-[#1a1a1a] relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20 text-center">
            <p className="text-orange-500 text-lg font-medium mb-4">Réalisations récentes</p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">Mes Projets</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PROJET 01 - GSB */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-black text-white/10 group-hover:text-blue-500/20 transition-colors">01</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
                  Épreuve E4 - Académique
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">Infrastructure GSB</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Architecture réseau sécurisée : VLANs, routage dynamique et services Active Directory (Windows Server).
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">VLANs</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">AD DS</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">DHCP</span>
              </div>
              <Link href="/projets/gsb">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-blue-500 text-white rounded-xl font-bold transition-all border border-white/10 hover:border-blue-500 group">
                  Voir le projet
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* PROJET 02 - GLPI */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-blue-400/50 transition-all flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-black text-white/10 group-hover:text-blue-400/20 transition-colors">02</span>
                <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-blue-400/20">
                  Épreuve E4 - Support
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Gestion GLPI</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Mise en place d'un outil de ticketing et inventaire automatique via FusionInventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">GLPI</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">ITIL</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">Inventaire</span>
              </div>
              <Link href="/projets/glpi">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-blue-400 text-white rounded-xl font-bold transition-all border border-white/10 hover:border-blue-400 group">
                  Voir le projet
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* PROJET 03 - VPS Cloud */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-orange-500/50 transition-all flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-black text-white/10 group-hover:text-orange-500/20 transition-colors">03</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-orange-500/20">
                  Épreuve E6 - Entreprise
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">Infrastructure Cloud</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Sécurisation d'un VPS Hostinger et déploiement conteneurisé (Docker) de services professionnels.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">Docker</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">Nginx</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">UFW</span>
              </div>
              <Link href="/projets/vps-ia">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-orange-500 text-white rounded-xl font-bold transition-all border border-white/10 hover:border-orange-500 group">
                  Voir le projet
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* PROJET 04 - OPNsense */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-blue-300/30 transition-all flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-black text-white/10 group-hover:text-blue-300/20 transition-colors">04</span>
                <span className="px-3 py-1 bg-blue-300/10 text-blue-300 rounded-full text-[10px] font-bold uppercase tracking-widest border border-blue-300/20">
                  En cours
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">Firewall OPNsense</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Étude et mise en œuvre d'une solution de filtrage périmétrique et de VPN pour sécuriser les accès distants.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">Firewall</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">VPN</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">Filtrage</span>
              </div>
              <Link href="/projets/opnsense">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-blue-300/20 text-white rounded-xl font-bold transition-all border border-white/10 group">
                  Voir le projet
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* PROJET 05 - Graylog */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-gray-500/50 transition-all flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-black text-white/10 group-hover:text-gray-500/20 transition-colors">05</span>
                <span className="px-3 py-1 bg-white/10 text-gray-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
                  En cours
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-400 transition-colors">SIEM Graylog</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Projet de centralisation et d'analyse des logs système pour améliorer la réactivité face aux incidents.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">Logs</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">Monitoring</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">Alerting</span>
              </div>
              <Link href="/projets/graylog">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10 group">
                  Voir le projet
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* PROJET 06 - Active Directory */}
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-black text-white/10 group-hover:text-indigo-500/20 transition-colors">06</span>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-indigo-500/20">
                  Formation Académique
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-500 transition-colors">Atelier Active Directory</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                Mise en place d'un domaine Active Directory (AD DS) : gestion des utilisateurs, des Unités d'Organisation et des GPOs.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">AD DS</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">GPOs</span>
                <span className="px-2 py-1 bg-white/5 text-white/50 rounded text-[10px] font-mono">DNS</span>
              </div>
              <Link href="/projets/ad">
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-indigo-500/20 text-white rounded-xl font-bold transition-all border border-white/10 group">
                  Voir le projet
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* PROJET 07 - Wazuh (Masqué pour l'examen)
            <div className="group bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 hover:border-red-400/30 transition-all flex flex-col">
              ... (commenté) ...
            </div>
            */}
          </div>
        </div>
      </section>


      <section id="skills" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <p className="text-orange-500 text-lg font-medium mb-4">Expertise technique</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">Compétences</h2>
            <div className="w-20 h-1.5 bg-orange-500 mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* RÉSEAUX */}
            <div className="bg-[#111] rounded-3xl p-10 border border-white/5 hover:border-blue-500/30 transition-all shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Network size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Réseaux</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Architecture Cisco</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Configuration de commutateurs et routeurs, gestion des VLANs et segmentation réseau.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Services Réseaux</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Mise en œuvre de services DHCP, DNS et routage statique/dynamique.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ADMINISTRATION SYSTÈMES */}
            <div className="bg-[#111] rounded-3xl p-10 border border-white/5 hover:border-orange-500/30 transition-all shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <ServerIcon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Administration Systèmes</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 mt-1">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Windows Server</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Administration d'Active Directory, gestion des GPO et des services de fichiers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 mt-1">
                    <Code size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Linux (Debian/Ubuntu)</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Administration en ligne de commande (CLI) et gestion de services système.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CLOUD & CONTENEURISATION */}
            <div className="bg-[#111] rounded-3xl p-10 border border-white/5 hover:border-cyan-500/30 transition-all shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <Rocket size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Cloud & Conteneurisation</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Docker & Docker Compose</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Déploiement d'applications conteneurisées et gestion d'environnements isolés.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <ServerIcon size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Infrastructure VPS</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Configuration de serveurs distants, Reverse Proxy (Nginx) et certificats SSL.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SÉCURITÉ & GESTION */}
            <div className="bg-[#111] rounded-3xl p-10 border border-white/5 hover:border-red-500/30 transition-all shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Sécurité & Gestion</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-1">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Gestion de parc (GLPI)</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Mise en place de l'inventaire automatique et gestion des tickets (ITIL).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-1">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Supervision & Logs</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Étude de la centralisation des logs et de la détection d'incidents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/tableau-synthese-jordan-aziaha.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition-all shadow-lg shadow-orange-500/25 group"
            >
              <FileText size={20} />
              Consulter mon Tableau de Synthèse
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* GAUCHE : INFOS */}
            <div>
              <p className="text-orange-500 text-lg font-medium mb-4">Construisons ensemble</p>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                Discutons de vos <br />
                <span className="text-orange-500">infrastructures</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                Je suis actuellement en recherche d'opportunités pour mettre mes compétences au service de vos projets d'infrastructure, de réseaux et de sécurité.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email</p>
                    <a href="mailto:jordan.aziaha@gmail.com" className="text-xl text-white font-bold hover:text-orange-500 transition-colors">
                      jordan.aziaha@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Localisation</p>
                    <p className="text-xl text-white font-bold">Île-de-France (Marne-la-Vallée / Nanterre)</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/jordan-aziaha-9034102b4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-orange-500 transition-all border border-white/10"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* DROITE : FORMULAIRE */}
            <div className="bg-[#111] p-10 rounded-3xl border border-white/5 shadow-2xl relative">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Nom / Entreprise</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Email professionnel</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-all resize-none"
                    placeholder="Comment puis-je vous aider ?"
                  ></textarea>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-500/20 group">
                  Envoyer le message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-2">© 2025 Jordan Aziaha - Étudiant BTS SISR</p>
          <p className="text-sm text-gray-500">Tous droits réservés</p>
        </div>
      </footer>


    </div>
  )
}
