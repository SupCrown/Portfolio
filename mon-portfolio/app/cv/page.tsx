"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 py-20 px-6">
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
            <h2 className="text-2xl text-neutral-400 mb-4">Développeur Logiciel & Web</h2>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-neutral-500">
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">📍 Châteauneuf du Rhône 26780</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">📞 06 56 89 66 71</span>
              <span className="bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">✉️ Josua.kebaili@gmail.com</span>
            </div>
            
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Passionné par le développement logiciel et en constante quête d'apprentissage, je suis impatient de mettre en œuvre mes connaissances en développement et mes compétences en résolution de problèmes pour contribuer activement à votre équipe.
            </p>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* COLONNE GAUCHE : Compétences & Infos */}
          <div className="space-y-12">
            <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4 uppercase tracking-wider text-sm">Compétences Techniques</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>POO, Architecture logicielle, BDD</li>
                <li>Java, C, C++, Python, Assembleur, Bash</li>
                <li>WinDev, JavaScript, HTML, CSS, SQL, PHP</li>
                <li>Git, CI/CD (Déploiement)</li>
              </ul>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4 uppercase tracking-wider text-sm">Langues</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>Anglais : Excellentes notions</li>
                <li>Italien : Assez bonnes notions</li>
                <li>Japonais : Quelques notions</li>
              </ul>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4 uppercase tracking-wider text-sm">Centres d'intérêts</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>Intelligence artificielle & Formule 1</li>
                <li>Jeux de rôle (maitre du jeu)</li>
                <li>Ancien joueur de jeu vidéo professionnel (OSU)</li>
              </ul>
            </motion.section>
          </div>

          {/* COLONNE DROITE : Expériences & Formations (Timeline) */}
          <div className="md:col-span-2 space-y-12">
            
            <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-6 uppercase tracking-wider text-sm">Expériences & Projets</h3>
              
              <div className="space-y-8 border-l border-neutral-800 pl-6 ml-3 relative">
                
                {/* NOUVELLE EXPÉRIENCE : ATELIER DES 4 COLLINES */}
                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-cyan-500 border-4 border-neutral-950 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                  <h4 className="text-lg font-bold text-white">Développeur d'Application</h4>
                  <span className="text-sm font-semibold text-indigo-400">2024 - Présent | L'Atelier des 4 Collines (Maroquinerie)</span>
                  
                  <div className="mt-2 inline-block px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-md text-xs text-neutral-300 font-medium">
                    🚀 Évolution : Stage (3 mois) ➔ CDD Assistant Dév. (Été) ➔ Alternance (1 an)
                  </div>
                  
                  <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                    Développement de A à Z d'une application métier sur-mesure adaptée aux contraintes spécifiques du secteur de la maroquinerie. 
                    Conception complète de l'architecture, respect strict de la charte informatique de l'entreprise et mise en place des processus de déploiement.
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">
                    <strong className="text-neutral-300">Apports :</strong> WinDev, création "from scratch", CI/CD, adaptation métier complexe.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-neutral-700 border-4 border-neutral-950"></div>
                  <h4 className="text-lg font-medium text-white">Application web pour réseau de transports</h4>
                  <span className="text-sm text-neutral-500">2024 - 2025</span>
                  <p className="mt-2 text-neutral-400 text-sm">Développement d'une application web. Apports : POO, C#, ASP.net, JavaScript, Vue.js, Git, PostgreSQL.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-neutral-700 border-4 border-neutral-950"></div>
                  <h4 className="text-lg font-medium text-white">Modèle d'IA vocale</h4>
                  <p className="mt-2 text-neutral-400 text-sm">Configuration, entrainement et développement d'un modèle d'IA d'interprétation, d'analyse puis de réponse par synthèse vocale. Apports : Python, Vosk, Rasa, Coqui TTS, RL.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-neutral-700 border-4 border-neutral-950"></div>
                  <h4 className="text-lg font-medium text-white">Entretien site web & villas de location</h4>
                  <span className="text-sm text-neutral-500">Depuis 08/2024 | Montélimar, 26</span>
                  <p className="mt-2 text-neutral-400 text-sm">Apports : PHP, relation client, WordPress, hébergement, autonomie.</p>
                </div>

              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-6 uppercase tracking-wider text-sm">Formation</h3>
              <div className="space-y-4 text-neutral-300">
                <div>
                  <h4 className="font-medium text-white">BUT informatique (IUT de Valence)</h4>
                  <span className="text-sm text-neutral-500">Depuis 2023</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">Licence maths/Info (Université Claude Bernard Lyon)</h4>
                  <span className="text-sm text-neutral-500">2022 - 2023</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">Bac STI2D assez bien (Lycée les Catalins)</h4>
                  <span className="text-sm text-neutral-500">2021 - 2022</span>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </div>
    </main>
  );
}