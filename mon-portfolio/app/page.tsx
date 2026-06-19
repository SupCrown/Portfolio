"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [toast, setToast] = useState(false);

  function showToast() {
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  }

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen text-neutral-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-b border-neutral-800 pb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
            Projets IA
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Expérimentations algorithmiques autour de l'apprentissage par renforcement (Q-Learning).
          </p>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          {/* CARTE 1 : FOURMIS JAVA (Q-LEARNING) */}
          <motion.article variants={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors group">
            <div className="relative w-full h-56 bg-neutral-950 overflow-hidden">
              <video
                src="/fourmis.webm"
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

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Simulation de Fourmis (IA)</h3>
              <p className="text-neutral-400 text-sm mb-6">
                Simulation visuelle d'une colonie de fourmis par apprentissage par renforcement (Q-learning). Les fourmis apprennent à optimiser leurs trajets de manière autonome.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={showToast}
                  className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Dépôt Git
                </button>
                <button
                  onClick={showToast}
                  className="flex-1 text-center bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium py-2 rounded-lg border border-neutral-700 transition-colors cursor-pointer"
                >
                  Détails
                </button>
              </div>
            </div>
          </motion.article>

          {/* CARTE 2 : APPLICATION RUST */}
          <motion.article variants={item} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors group">
            <div className="relative w-full h-56 bg-neutral-950 flex items-center justify-center overflow-hidden">
              <span className="text-neutral-600 text-sm">Aperçu à venir</span>
              <div className="absolute top-3 right-3 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Rust / Sockets
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Application Rust</h3>
              <p className="text-neutral-400 text-sm mb-6">
                Application ultra-performante en Rust avec gestion rigoureuse de la mémoire et communication par sockets.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={showToast}
                  className="flex-1 text-center bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Dépôt Git
                </button>
                <button
                  onClick={showToast}
                  className="flex-1 text-center bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium py-2 rounded-lg border border-neutral-700 transition-colors cursor-pointer"
                >
                  Détails
                </button>
              </div>
            </div>
          </motion.article>

        </motion.div>
      </div>

      {/* TOAST "À VENIR" */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-800 border border-neutral-700 text-white px-6 py-3 rounded-xl shadow-2xl text-sm font-medium"
          >
            🔒 À venir — dépôt bientôt disponible
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
