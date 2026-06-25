import { motion } from 'framer-motion'
import { useLanguage } from '../context/useLanguage'

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="Contact" className="min-h-screen px-6 md:px-16 py-24 text-white flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-cyan-400 mb-4"
      >
        {t.contactTitle}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-400 mb-12 text-center"
      >
        {t.contactDesc}
      </motion.p>

      <div className="w-full max-w-2xl flex flex-col gap-8">

        <motion.form
          action="https://formspree.io/f/xrbnlbdd"
          method="POST"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder={t.votrenom}
            required
            className="bg-white/5 border border-cyan-400/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder={t.votreemail}
            required
            className="bg-white/5 border border-cyan-400/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <textarea
            name="message"
            rows="5"
            placeholder={t.votremessage}
            required
            className="bg-white/5 border border-cyan-400/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
          />
          <button
            type="submit"
            className="bg-cyan-400/20 border border-cyan-400/40 text-cyan-400 font-bold py-3 rounded-xl hover:bg-cyan-400/30 transition-colors"
          >
            {t.envoyer}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4"
        >
          <a href="mailto:rafael.atns.dev@gmail.com" className="flex flex-col items-center gap-2 px-8 py-4 rounded-2xl bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 transition-all min-w-[140px]">
            <span className="text-2xl">✉️</span>
            <span className="text-white font-semibold text-sm">Email</span>
          </a>
          <a href="https://github.com/alnrfLO" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 px-8 py-4 rounded-2xl bg-gray-500/20 border border-gray-500/30 hover:bg-gray-500/30 transition-all min-w-[140px]">
            <span className="text-2xl">🐙</span>
            <span className="text-white font-semibold text-sm">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/rafatns/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 px-8 py-4 rounded-2xl bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all min-w-[140px]">
            <span className="text-2xl">💼</span>
            <span className="text-white font-semibold text-sm">LinkedIn</span>
          </a>
          <a href="https://rafatns.vercel.app/downloads/cv.pdf" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 px-8 py-4 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 hover:bg-cyan-500/30 transition-all min-w-[140px]">
            <span className="text-2xl">📄</span>
            <span className="text-white font-semibold text-sm">{t.monCV}</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact