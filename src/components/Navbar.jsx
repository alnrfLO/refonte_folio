import { useLanguage } from '../context/useLanguage'

function NavBar() {
  const { langue, setLangue, t } = useLanguage()
  const langues = ['fr', 'en', 'pt', 'es']

  return (
    <header className="bg-[#071520] backdrop-blur-md border-b border-white/10 py-4">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8">
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
            <li><a className="text-white hover:text-cyan-400 transition-colors" href="#Accueil">{t.accueil}</a></li>
            <li><a className="text-white hover:text-cyan-400 transition-colors" href="#A-Propos">{t.apropos}</a></li>
            <li><a className="text-white hover:text-cyan-400 transition-colors" href="#Skills">{t.skills}</a></li>
            <li><a className="text-white hover:text-cyan-400 transition-colors" href="#Projects">{t.projets}</a></li>
            <li><a className="text-white hover:text-cyan-400 transition-colors" href="#Contact">{t.contact}</a></li>
          </ul>
        </nav>

        <div className="flex flex-wrap justify-center gap-2">
          {langues.map(l => (
            <button
              key={l}
              onClick={() => setLangue(l)}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all ${
                langue === l
                  ? 'bg-cyan-400 text-[#04080f]'
                  : 'border border-cyan-400/40 text-white hover:bg-cyan-400/10'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default NavBar