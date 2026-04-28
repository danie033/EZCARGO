import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import ConversionSections from './components/ConversionSections'
import Features from './components/Features'
import Footer from './components/Footer'
import StickyCtaBar from './components/StickyCtaBar'
import './App.css'

function App() {
  const [lang, setLang] = useState('EN')
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    let frameId = 0

    const updateTopState = () => {
      frameId = 0
      setIsAtTop(window.scrollY <= 4)
    }

    const handleScroll = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateTopState)
    }

    updateTopState()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <div className={`page-shell${isAtTop ? ' is-at-top' : ''}`}>
      <StickyCtaBar lang={lang} isVisible={isAtTop} />
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Showcase lang={lang} />
        <ConversionSections lang={lang} />
        <Features lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}

export default App
