import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
  const shellRef = useRef(null)

  // Measure the real height of the fixed navbar and dispatch bar so the
  // spacing below them is always correct, whatever the screen size or zoom.
  useLayoutEffect(() => {
    const shell = shellRef.current
    if (!shell) return undefined
    const nav = shell.querySelector('.navbar-wrap')
    const cta = shell.querySelector('.sticky-cta-bar')

    const measure = () => {
      if (nav) shell.style.setProperty('--navbar-offset', `${Math.ceil(nav.offsetHeight)}px`)
      if (cta) shell.style.setProperty('--cta-height', `${Math.ceil(cta.offsetHeight)}px`)
    }

    measure()
    const observer = new ResizeObserver(measure)
    if (nav) observer.observe(nav)
    if (cta) observer.observe(cta)
    window.addEventListener('resize', measure)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

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
    <div ref={shellRef} className={`page-shell${isAtTop ? ' is-at-top' : ''}`}>
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
