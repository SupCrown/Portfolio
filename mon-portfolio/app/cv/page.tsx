"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CVPage() {
  return (
    <main className="min-h-screen text-neutral-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* EN-TÊTE DU CV AVEC PHOTO */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-b border-neutral-800 pb-8 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0">
            <Image
              src="/photo.jpg"
              alt="Photo de profil de Josua KEBAILI"
              fill
              className="object-cover rounded-3xl border-2 border-neutral-800 shadow-xl shadow-indigo-500/10"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-2 mt-2">
              Josua KEBAILI
            </h1>
            <h2 className="text-2xl text-neutral-400 mb-4">Alternance Développeur | BUT Informatique</h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-neutral-500">
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">📍 Romans-sur-Isère (26)</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">📞 06 56 89 66 71</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">✉️ josua.kebaili@gmail.com</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">🚗 Permis B — véhiculé</span>
            </div>

            <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Étudiant en 3ᵉ année de BUT Informatique, je recherche une alternance en développement logiciel pour la rentrée 2026. Passionné par l'IA et la cybersécurité, je souhaite mettre mes compétences en POO, développement web et data au service de vos projets. Plusieurs années d'expériences professionnelles menées en parallèle de mes études m'ont forgé rigueur, autonomie et sens du travail bien fait.
            </p>

            <a
              href="/cv-josua-kebaili.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              ⬇️ Télécharger le CV (PDF)
            </a>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* COLONNE GAUCHE : Compétences & Infos */}
          <div className="space-y-12">
            <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider">Compétences Techniques</h3>
              <div className="space-y-3 text-neutral-300 text-sm">
                <p><span className="text-neutral-500">Langages :</span> Java, C/C++, C#, Python, PHP, JavaScript, SQL, Bash, Assembleur</p>
                <p><span className="text-neutral-500">Web :</span> ASP.NET, Symfony, Vue.js, HTML/CSS, WordPress</p>
                <p><span className="text-neutral-500">Bases de données :</span> PostgreSQL, SQL, modélisation relationnelle</p>
                <p><span className="text-neutral-500">IA / ML :</span> Rasa, Vosk, Coqui TTS, supervised &amp; reinforcement learning</p>
                <p><span className="text-neutral-500">Méthodes :</span> POO, conception d'applications, Git, cahier des charges</p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
              <h3 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider">Outils</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>Git / GitHub</li>
                <li>VS Code, JetBrains</li>
                <li>WinDev</li>
                <li>Suite Office, Canva</li>
              </ul>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider">Langues</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>Anglais : B2 — courant</li>
                <li>Italien : Intermédiaire</li>
              </ul>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
              <h3 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider">Qualités</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>Gestion d'équipe &amp; répartition des tâches</li>
                <li>Aisance à l'oral</li>
                <li>Rigueur et autonomie</li>
                <li>Sens du relationnel client</li>
              </ul>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider">Centres d'intérêt</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>Cybersécurité &amp; hacking éthique</li>
                <li>Intelligence artificielle</li>
                <li>Jeux de rôle (maître du jeu)</li>
                <li>Formule 1</li>
                <li>Ancien joueur pro de jeu vidéo (osu!)</li>
              </ul>
            </motion.section>
          </div>

          {/* COLONNE DROITE : Expériences & Formations (Timeline) */}
          <div className="md:col-span-2 space-y-12">

            <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-sm font-semibold text-cyan-400 mb-6 uppercase tracking-wider">Expérience Professionnelle</h3>

              <div className="space-y-8 border-l border-neutral-800 pl-6 ml-3 relative">

                {/* ATELIER DES QUATRE COLLINES */}
                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-cyan-500 border-4 border-neutral-950 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                  <h4 className="text-lg font-bold text-white">Développeur — Stage + CDD + Alternance</h4>
                  <span className="text-sm font-semibold text-indigo-400">Mars 2025 — aujourd'hui | Atelier des Quatre Collines, Hauterives (26)</span>
                  <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                    Conception et développement de bout en bout d'une application métier sur-mesure pour une maroquinerie : analyse des besoins, rédaction du cahier des charges, développement, suivi client et déploiement dans le respect de la charte informatique.
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">
                    <strong className="text-neutral-300">Stack :</strong> WinDev, modélisation des flux, gestion de projet
                  </p>
                </div>

                {/* PROJET TUTORÉ */}
                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-neutral-700 border-4 border-neutral-950"></div>
                  <h4 className="text-lg font-medium text-white">Projet tutoré — Application web de gestion</h4>
                  <span className="text-sm text-neutral-500">2024 — 2025 | BUT Informatique, IUT de Valence</span>
                  <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                    Développement d'une application web complète pour une entreprise cliente : conception de l'architecture, modélisation de la base de données, développement backend et frontend, travail en équipe avec gestion de versions.
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">
                    <strong className="text-neutral-300">Stack :</strong> C#, ASP.NET, JavaScript, Vue.js, PostgreSQL, Git, POO
                  </p>
                </div>

                {/* PROJETS */}
                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-neutral-700 border-4 border-neutral-950"></div>
                  <h4 className="text-lg font-medium text-white">Projet IA — Assistant vocal intelligent</h4>
                  <span className="text-sm text-neutral-500">2024 — 2025 | Projet personnel</span>
                  <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                    Configuration, entraînement et intégration d'un modèle d'IA conversationnel capable de comprendre, analyser et répondre par synthèse vocale. Comparaison de différentes approches d'apprentissage.
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">
                    <strong className="text-neutral-300">Stack :</strong> Python, Vosk, Rasa, Coqui TTS, supervised &amp; reinforcement learning
                  </p>
                </div>

                {/* ISS FACILITY SERVICES */}
                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-neutral-700 border-4 border-neutral-950"></div>
                  <h4 className="text-lg font-medium text-white">Agent d'entretien &amp; livraison de matériel</h4>
                  <span className="text-sm text-neutral-500">2023 — 2024 (10 mois) | ISS Facility Services, Drôme (26)</span>
                  <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                    Missions en entretien de locaux professionnels et livraison de matériel, en parallèle de mes études. Expérience formatrice qui m'a appris à tenir des engagements dans la durée, à travailler en équipe et à livrer un résultat soigné.
                  </p>
                </div>

              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-sm font-semibold text-cyan-400 mb-6 uppercase tracking-wider">Formation</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-white">BUT Informatique — IUT de Valence</h4>
                  <span className="text-sm text-neutral-500">Depuis 2023</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">Licence Mathématiques / Informatique — Université Claude Bernard Lyon 1</h4>
                  <span className="text-sm text-neutral-500">2022 — 2023</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">Baccalauréat STI2D, mention Assez Bien — Lycée Les Catalins (Montélimar)</h4>
                  <span className="text-sm text-neutral-500">2022</span>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </div>
    </main>
  );
}
