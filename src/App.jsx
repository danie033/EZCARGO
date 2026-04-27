import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [lang, setLang] = useState('EN')

  return (
    <div className="page-shell">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}

export default App
