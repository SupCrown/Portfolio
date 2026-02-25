"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AIProjectsPage() {
  // Définition de l'animation pour l'apparition en cascade des cartes
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* EN-TÊTE */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-b border-neutral-800 pb-8 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
            Projets IA et machine learning
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Découvrez mes expérimentations algorithmiques autour de l'apprentissage par renforcement (Q-Learning).
          </p>
        </motion.header>

        {/* GRILLE DES PROJETS */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          
          {/* CARTE 1 : FOURMIS JAVA (Q-LEARNING) */}
          <motion.article variants={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors group">
            {/* Conteneur Vidéo */}
            <div className="relative w-full h-56 bg-neutral-950 overflow-hidden">
              <video 
                src="/fourmis.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500"
              />
              <div className="absolute top-3 right-3 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Java / Q-Table / Swing
              </div>
            </div>
            
            {/* Contenu de la carte */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Simulation de Fourmis (IA)</h3>
              <p className="text-neutral-400 text-sm mb-6 line-clamp-3">
                Simulation visuelle (Swing) d'une colonie de fourmis gérée par apprentissage par renforcement (Q-learning). Les fourmis apprennent à optimiser leurs trajets et leurs actions de manière autonome.
              </p>
              
              {/* Boutons d'action */}
              <div className="flex gap-3">
                <Link href="#" className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
                  Voir le projet Git
                </Link>
                <Link href="#" className="flex-1 text-center bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium py-2 rounded-lg border border-neutral-700 transition-colors">
                  Détails
                </Link>
              </div>
            </div>
          </motion.article>


          {/* CARTE 2 : APPLICATION RUST */}
          <motion.article variants={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors group">
            {/* Conteneur Vidéo */}
            <div className="relative w-full h-56 bg-neutral-950 overflow-hidden">
              <video 
                src="/rust-app.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500"
              />
              <div className="absolute top-3 right-3 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Rust / sockets
              </div>
            </div>
            
            {/* Contenu de la carte */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Mon Application Rust</h3>
              <p className="text-neutral-400 text-sm mb-6 line-clamp-3">
                Développement d'une application ultra-performante en Rust. Gestion rigoureuse de la mémoire et exécution rapide pour des traitements complexes.
              </p>
              
              {/* Boutons d'action */}
              <div className="flex gap-3">
                <Link href="#" className="flex-1 text-center bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
                  Voir le projet Git
                </Link>
                <Link href="#" className="flex-1 text-center bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium py-2 rounded-lg border border-neutral-700 transition-colors">
                  Détails
                </Link>
              </div>
            </div>
          </motion.article>

        </motion.div>
      </div>
    </main>
  );
}