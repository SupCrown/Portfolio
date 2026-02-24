"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-indigo-500 selection:text-white">
      
      {/* --- BARRE DE NAVIGATION --- */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-5xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">
          Ton<span className="text-indigo-500">Nom.</span>
        </div>
        <ul className="flex gap-6 text-sm font-medium text-neutral-400">
          <li className="hover:text-white transition-colors"><Link href="/cv">CV</Link></li>
          <li className="hover:text-white transition-colors"><Link href="/projets-ia">Projets IA</Link></li>
          <li className="hover:text-white transition-colors"><Link href="/apps">Applications</Link></li>
        </ul>
      </nav>

      {/* --- SECTION ACCUEIL ANIMÉE --- */}
      <section className="flex flex-col items-center justify-center pt-32 px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-3 py-1 text-sm font-semibold text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            Développeur & Créateur IA
          </span>
        </motion.div>

        <motion.h1 
          className="mt-8 text-5xl md:text-7xl font-bold tracking-tight max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Je conçois des applications <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">intelligentes</span> et modernes.
        </motion.h1>

        <motion.p 
          className="mt-6 text-lg text-neutral-400 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Découvrez mon parcours, mes expérimentations avec l'Intelligence Artificielle et les applications logicielles que j'ai développées.
        </motion.p>

        <motion.div 
          className="mt-10 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/projets-ia" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all transform hover:scale-105">
            Explorer l'IA
          </Link>
          <Link href="/apps" className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-all border border-neutral-700">
            Voir mes Apps
          </Link>
        </motion.div>

      </section>
    </main>
  );
}