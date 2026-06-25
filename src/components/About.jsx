import { motion } from 'framer-motion'
import { useLanguage } from '../context/useLanguage'

const formation = [
  { date: "2023-2024", titre: "Baccalauréat général", detail: "Option Mathématiques & NSI — Lycée Paul Le Rolland, Drancy" },
  { date: "2024 – aujourd'hui", titre: "BUT MMI", detail: "Parcours Développement Web — IUT de Bobigny, Université Sorbonne Paris Nord" },
]

const experience = [
  { date: "Juil – Août 2024", titre: "Animateur sportif", detail: "Ville de Bobigny — Animation sportive, encadrement de groupes (Bobigny Plage JO)" },
  { date: "Avr. 2026 – aujourd'hui", titre: "Stagiaire Assistant Software Engineer", detail: "Hermès — Paris | Node.js / TypeScript, tests unitaires, code reviews, rituels Agile" },
]

function TimelineItem({ date, titre, detail, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l-2 border-cyan-400/30 last:border-transparent"
    >
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
      <span className="text-cyan-400 text-sm font-mono">{date}</span>
      <h4 className="text-white font-bold mt-1">{titre}</h4>
      <p className="text-gray-400 text-sm mt-1">{detail}</p>
    </motion.div>
  )
}

function About() {
  const { t } = useLanguage()

  return (
    <section id="A-Propos" className="min-h-screen px-6 md:px-16 pt-32 pb-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-cyan-400 mb-12"
      >
        {t.apropos}
      </motion.h2>

      {/* Intro */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">{t.introTitle}</h3>
          <p className="text-gray-400 leading-relaxed">{t.introText}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">{t.sportTitle}</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>🥇 2021 — Compétition internationale, Portugal</li>
            <li>🥇 2021 — Compétition internationale, Luxembourg</li>
            <li>🥇 2022 — Compétition internationale, Belgique</li>
            <li>🥉 2020 — Championnat de France</li>
          </ul>
        </motion.div>
      </div>

      {/* Timelines */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-8">📚 {t.formationTitle}</h3>
          {formation.map((item, i) => <TimelineItem key={i} {...item} index={i} />)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-8">💼 {t.experienceTitle}</h3>
          {experience.map((item, i) => <TimelineItem key={i} {...item} index={i} />)}
        </motion.div>
      </div>
    </section>
  )
}

export default About