import { useEffect } from 'react'
import './Navbar.css'

const brandWordmark = `${import.meta.env.BASE_URL}branding/ezcargo-wordmark.png`

const copy = {
  EN: {
    services: 'Services',
    advantages: 'Why EZCargo',
    process: 'How It Works',
    contact: 'Contact',
    cta: 'Talk to Dispatch'
  },
  ES: {
    services: 'Servicios',
    advantages: 'Por que EZCargo',
    process: 'Como funciona',
    contact: 'Contacto',
    cta: 'Hablar con despacho'
  }
}

export default function Navbar({ lang, setLang }) {
  const text = copy[lang]
  const nextLang = lang === 'EN' ? 'ES' : 'EN'

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    let cleanupTimer = 0
    let activeButton = null

    const clearOnboarding = () => {
      if (!activeButton) return
      activeButton.classList.remove('is-onboarding', 'is-reduced-motion')
      activeButton = null
    }

    const startOnboarding = () => {
      const button = document.querySelector('.language-button')
      if (!button) {
        console.warn('Language onboarding: .language-button was not found.')
        return
      }

      activeButton = button
      activeButton.classList.add('is-onboarding')

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reducedMotion) {
        activeButton.classList.add('is-reduced-motion')
        cleanupTimer = window.setTimeout(clearOnboarding, 3000)
        return
      }

      cleanupTimer = window.setTimeout(clearOnboarding, 10000)
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startOnboarding, { once: true })
    } else {
      startOnboarding()
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', startOnboarding)
      window.clearTimeout(cleanupTimer)
      clearOnboarding()
    }
  }, [])

  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <a className="brand" href="#top" aria-label="EZCARGO LOGISTICS LLC home">
          <img className="brand-logo" src={brandWordmark} alt="EZCargo Logistics logo" />
        </a>

        <div className="nav-actions">
          <div className="nav-links">
            <a href="#services">{text.services}</a>
            <a href="#advantages">{text.advantages}</a>
            <a href="#process">{text.process}</a>
            <a href="#contact">{text.contact}</a>
          </div>

          <a className="nav-cta" href="#contact">
            {text.cta}
          </a>

          <button
            className="lang-btn language-button"
            type="button"
            aria-label={`Switch language to ${lang === 'EN' ? 'Spanish' : 'English'}`}
            onClick={() => setLang(nextLang)}
          >
            {nextLang}
          </button>
        </div>
      </nav>
    </header>
  )
}
