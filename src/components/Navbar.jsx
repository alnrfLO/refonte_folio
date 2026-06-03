import { useLanguage } from '../context/useLanguage'

function NavBar() {
  const { langue, setLangue, t } = useLanguage()
  const langues = ['fr', 'en', 'pt', 'es']

  return (
    <header className="flex items-center justify-between px-8 py-4 fixed top-0 w-full bg-[#071520] backdrop-blur-md border-b border-white/10 z-50">
      <nav>
        <ul className="flex gap-8">
          <li><a className="text-white hover:text-cyan-400 transition-colors" href="#Accueil">{t.accueil}</a></li>
          <li><a className="text-white hover:text-cyan-400 transition-colors" href="#A-Propos">{t.apropos}</a></li>
          <li><a className="text-white hover:text-cyan-400 transition-colors" href="#Skills">{t.skills}</a></li>
          <li><a className="text-white hover:text-cyan-400 transition-colors" href="#Projects">{t.projets}</a></li>
          <li><a className="text-white hover:text-cyan-400 transition-colors" href="#Contact">{t.contact}</a></li>
        </ul>
      </nav>

      <div className="flex gap-2">
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
    </header>
  )
}

export default NavBar