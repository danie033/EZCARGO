import heroImage from '../assets/hero.png'
import './Hero.css'

const brandLockup = `${import.meta.env.BASE_URL}branding/ezcargo-logo-lockup.png`

const copy = {
  EN: {
    badge: 'U.S.-based dispatch for owner-operators and fleets',
    title: 'Professional dispatch that keeps your trucks loaded and your revenue moving.',
    description:
      'EZCargo Logistics secures stronger freight opportunities, handles broker communication, and keeps your schedule organized so drivers stay focused on the road.',
    primary: 'Request a Dispatch Call',
    secondary: 'See Services',
    stats: [
      { value: '24/7', label: 'dispatch coverage' },
      { value: 'Dry Van', label: 'flatbed, reefer, power only' },
      { value: 'Dedicated', label: 'personalized dispatch' }
    ]
  },
  ES: {
    badge: 'Despacho en EE. UU. para operadores y flotas',
    title: 'Despacho profesional para mantener sus camiones cargados y sus ingresos en movimiento.',
    description:
      'EZCargo Logistics consigue mejores cargas, gestiona la comunicacion con brokers y organiza su agenda para que los conductores se enfoquen en la carretera.',
    primary: 'Solicitar una llamada',
    secondary: 'Ver servicios',
    stats: [
      { value: '24/7', label: 'cobertura de despacho' },
      { value: 'Dry Van', label: 'flatbed, reefer y power only' },
      { value: 'Dedicado', label: 'soporte personalizado' }
    ]
  }
}

export default function Hero({ lang }) {
  const text = copy[lang]

  return (
    <section
      className="hero"
      id="top"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(8, 19, 36, 0.9) 0%, rgba(8, 19, 36, 0.72) 42%, rgba(8, 19, 36, 0.45) 100%), url(${heroImage})`
      }}
    >
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-logo-frame">
            <img className="hero-logo" src={brandLockup} alt="EZCargo Logistics brand logo" />
          </div>
          <span className="hero-badge">{text.badge}</span>
          <h1>{text.title}</h1>
          <p>{text.description}</p>

          <div className="hero-buttons">
            <a className="primary-btn" href="#contact">
              {text.primary}
            </a>
            <a className="secondary-btn" href="#services">
              {text.secondary}
            </a>
          </div>
        </div>

        <div className="hero-stats" aria-label="Key dispatch advantages">
          {text.stats.map((item) => (
            <div className="hero-stat" key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
