import { useLanguage } from './context/useLanguage'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Contact from './components/Contact'
import cv from './assets/CV_Rafael_Antunes_oliveira.pdf'

function App() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen text-white pt-[140px] md:pt-[120px]" style={{ background: 'linear-gradient(135deg, #10222A 0%, #234755 50%, #070C13 100%)' }}>
      <div className="fixed inset-x-0 top-0 z-50 bg-[#0b2030] border-b border-cyan-400/20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-base">
          <p className="text-center text-white font-medium sm:text-left">
            {t.bandeauAlternance}
          </p>
          <a
            href={cv}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-100 font-semibold hover:bg-cyan-400/20 transition"
          >
            {t.monCV}
          </a>
        </div>
        <NavBar />
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App