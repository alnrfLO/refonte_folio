import NavBar from './components/NavBar'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Contact from './components/Contact'

function App() {
  return (
    <main className="min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #10222A 0%, #234755 50%, #070C13 100%)' }}>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App