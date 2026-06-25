import { motion } from 'framer-motion'
import { useLanguage } from '../context/useLanguage'
const skills = [
  {
    categorie: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular"]
  },
  {
    categorie: "Backend",
    items: ["Node.js", "PHP", "Python", "C++", "C#"]
  },
  {
    categorie: "Base de données",
    items: ["MySQL", "Postgres", "MangoDB"]
  },
  {
    categorie: "Outils",
    items: ["GitLab", "GitHub", "Agile / Scrum", "Git"]
  },
  {
    categorie: "Langues",
    items: ["Français — Natif", "Portugais — Natif", "Anglais — C1", "Espagnol — C1", "Italien — Notions", "Japonais — Notions"]
  },
  {
    categorie: "Soft Skills",
    items: ["Travail en équipe", "Autonomie", "Code review", "Résolution de problèmes", "Communication"]
  },
  {
    categorie: "Certifications",
    items: []
  },
]

const couleurs = {
  "Frontend": "text-cyan-400",
  "Backend": "text-blue-400",
  "Base de données": "text-purple-400",
  "Outils": "text-green-400",
  "Langues": "text-yellow-400",
  "Soft Skills": "text-pink-400",
  "Certifications": "text-orange-400",
}

const certifications = [
  { nom: "DIF — Diplôme Instructeur Fédéral Karaté", fichier: "photo.png" },
  { nom: "PSC1 — Premiers Secours", fichier: "photo.png" },
  { nom: "PSSM — Santé Mentale", fichier: "photo.png" },
]
function Skills() {
  const { t } = useLanguage()

  return (
    <section id="Skills" className="min-h-screen px-6 md:px-16 pt-32 pb-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-cyan-400 mb-12"
      >
        {t.skillsTitle}
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map((groupe, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all"
          >
            <h3 className={`font-semibold mb-4 text-lg ${couleurs[groupe.categorie]}`}>
              {groupe.categorie}
            </h3>

            {groupe.categorie === "Certifications" ? (
              <div className="flex flex-col gap-3">
                {certifications.map((cert, j) => (
                  <a
                    key={j}
                    href={cert.fichier}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-orange-400/40 hover:bg-orange-400/10 transition-all group">
                    <span className="text-orange-400 text-lg">📜</span>
                    <span className="text-white text-sm group-hover:text-orange-400 transition-colors">{cert.nom}</span>
                    <span className="ml-auto text-orange-400/50 group-hover:text-orange-400 transition-colors">↗</span>
                  </a>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {groupe.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full border border-cyan-400/40 text-sm text-white hover:bg-cyan-400/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills