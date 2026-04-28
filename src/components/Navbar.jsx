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

          <button className="lang-btn" onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}>
            {lang}
          </button>
        </div>
      </nav>
    </header>
  )
}
