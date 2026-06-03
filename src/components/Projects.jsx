import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../context/useLanguage'

const projects = [
  { id: "proj1", titre: "Snake", tech: "Python", type: "scolaire", github: "https://github.com/alnrfLO/yofukashi-no-uta/", live: "https://github.com/alnrfLO/yofukashi-no-uta/", photos: ["photo.png", "photo.png"] },
  { id: "proj2", titre: "Tetris", tech: "Python", type: "scolaire", github: "https://github.com/alnrfLO/yofukashi-no-uta/", live: "https://github.com/alnrfLO/yofukashi-no-uta/", photos: ["photo.png", "photo.png"] },
  { id: "proj3", titre: "Pong", tech: "Python", type: "scolaire", github: "https://github.com/alnrfLO/yofukashi-no-uta/", live: "https://github.com/alnrfLO/yofukashi-no-uta/", photos: ["photo.png", "photo.png"] },
  { id: "proj4", titre: "TicTacToe", tech: "Python", type: "scolaire", github: "https://github.com/alnrfLO/yofukashi-no-uta/", live: "https://github.com/alnrfLO/yofukashi-no-uta/", photos: ["photo.png", "photo.png"] },
  { id: "proj5", titre: "SAE 203", tech: "HTML/CSS/PHP", type: "scolaire", github: "https://github.com/alnrfLO/yofukashi-no-uta/", live: "https://github.com/alnrfLO/yofukashi-no-uta/", photos: ["photo.png", "photo.png"] },
  { id: "proj6", titre: "SAE 303", tech: "JS/HTML/CSS", type: "scolaire", github: "https://github.com/alnrfLO/yofukashi-no-uta/", live: "https://github.com/alnrfLO/yofukashi-no-uta/", photos: ["photo.png", "photo.png"] },
  { id: "proj8", titre: "Que regarder ce soir ?", tech: "React", type: "perso", github: "https://github.com/alnrfLO/yofukashi-no-uta/", live: "https://github.com/alnrfLO/yofukashi-no-uta/", photos: ["photo.png", "photo.png"] },
  { id: "proj9", titre: "Wiki Yofukashi no uta", tech: "React", type: "perso", github: "https://github.com/alnrfLO/yofukashi-no-uta/", live: "https://github.com/alnrfLO/yofukashi-no-uta/", photos: ["photo.png", "photo.png"] },
]

const couleurs = {
  "Python": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "HTML/CSS/PHP": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "JS/HTML/CSS": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "React": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
}

const technosDisponibles = ["Toutes", ...new Set(projects.map(p => p.tech))]

function Modal({ project, onClose }) {
  const [photoIndex, setPhotoIndex] = useState(0)
  const { t } = useLanguage()

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-[#0a1628] border border-cyan-400/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className={`text-xs px-2 py-1 rounded-full border ${couleurs[project.tech] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'}`}>
                {project.tech}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{project.titre}</h3>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl transition-colors">✕</button>
          </div>

          <div className="relative mb-6">
            <img src={project.photos[photoIndex]} alt={`screenshot ${photoIndex + 1}`} className="w-full h-52 object-cover rounded-xl border border-cyan-400/20" />
            <button onClick={() => setPhotoIndex(i => (i === 0 ? project.photos.length - 1 : i - 1))} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center">‹</button>
            <button onClick={() => setPhotoIndex(i => (i === project.photos.length - 1 ? 0 : i + 1))} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center">›</button>
            <div className="flex justify-center gap-2 mt-3">
              {project.photos.map((_, i) => (
                <button key={i} onClick={() => setPhotoIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === photoIndex ? 'bg-cyan-400' : 'bg-white/30'}`} />
              ))}
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed mb-6">
            {t[project.id + 'desc'] || t.descAVenir}
          </p>

          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/40 text-white hover:bg-cyan-400/10 transition-all">🐙 {t.github}</a>
            <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/30 transition-all">🌐 {t.voirProjet}</a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function Projects() {
  const [selected, setSelected] = useState(null)
  const [filtre, setFiltre] = useState("tous")
  const [techno, setTechno] = useState("Toutes")
  const { t } = useLanguage()

  const projectsFiltres = projects
    .filter(p => filtre === "tous" || p.type === filtre)
    .filter(p => techno === "Toutes" || p.tech === techno)

  return (
    <section id="Projects" className="min-h-screen px-16 pt-32 pb-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-cyan-400 mb-8"
      >
        {t.projetsTitle}
      </motion.h2>

      {/* Filtre statut */}
      <div className="border border-cyan-400/20 rounded-2xl p-4 mb-4 relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a1628] px-4 text-xs text-cyan-400 tracking-widest uppercase">{t.filtreStatut}</span>
        <div className="flex justify-center gap-3">
          {[
            { key: "tous", label: t.tous },
            { key: "perso", label: t.perso },
            { key: "scolaire", label: t.scolaire },
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setFiltre(f.key)}
              className={`px-5 py-2 rounded-full border transition-all ${
                filtre === f.key
                  ? 'bg-cyan-400 text-[#04080f] border-cyan-400 font-semibold'
                  : 'border-cyan-400/40 text-white hover:bg-cyan-400/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filtre techno */}
      <div className="border border-cyan-400/20 rounded-2xl p-4 mb-10 relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a1628] px-4 text-xs text-cyan-400 tracking-widest uppercase">{t.filtreTechno}</span>
        <div className="flex justify-center gap-3 flex-wrap">
          {technosDisponibles.map(tech => (
            <button
              key={tech}
              onClick={() => setTechno(tech)}
              className={`px-5 py-2 rounded-full border transition-all ${
                techno === tech
                  ? 'bg-cyan-400 text-[#04080f] border-cyan-400 font-semibold'
                  : 'border-cyan-400/40 text-white hover:bg-cyan-400/10'
              }`}
            >
              {tech === "Toutes" ? t.toutes : tech}
            </button>
          ))}
        </div>
      </div>

      {/* Grille projets */}
      <div className="grid grid-cols-3 gap-6">
        {projectsFiltres.map((p, i) => (
          <motion.div
            key={p.titre}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => setSelected(p)}
            className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/50 hover:bg-white/10 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs px-2 py-1 rounded-full border ${couleurs[p.tech] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'}`}>
                {p.tech}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${p.type === 'perso' ? 'text-pink-400 bg-pink-400/10' : 'text-green-400 bg-green-400/10'}`}>
                {p.type === 'perso' ? t.perso : t.scolaire}
              </span>
            </div>
            <h3 className="text-white font-bold mb-2">{p.titre}</h3>
            <p className="text-gray-400 text-sm">{t[p.id + 'desc'] ? t[p.id + 'desc'].substring(0, 80) + '...' : t.clicDetails}</p>
          </motion.div>
        ))}
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

export default Projects