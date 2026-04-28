import './StickyCtaBar.css'

const phoneNumber = '3855676354'
const displayPhone = '(385) 567-6354'

const copy = {
  EN: {
    label: 'Direct Dispatch Line',
    call: 'Call',
    text: 'Text',
    apply: 'Apply',
    helper: 'Fast responses for owner-operators who need coverage now.'
  },
  ES: {
    label: 'Linea directa de despacho',
    call: 'Llamar',
    text: 'Texto',
    apply: 'Aplicar',
    helper: 'Respuesta rapida para owner-operators que necesitan cobertura ahora.'
  }
}

export default function StickyCtaBar({ lang, isVisible }) {
  const text = copy[lang]

  return (
    <aside
      className={`sticky-cta-bar${isVisible ? ' is-visible' : ' is-hidden'}`}
      aria-hidden={!isVisible}
      aria-label="Quick contact actions"
    >
      <div className="sticky-cta-copy">
        <small>{text.label}</small>
        <strong>{displayPhone}</strong>
        <span>{text.helper}</span>
      </div>

      <div className="sticky-cta-actions">
        <a className="sticky-cta-btn is-call" href={`tel:+1${phoneNumber}`}>
          {text.call}
        </a>
        <a className="sticky-cta-btn is-text" href={`sms:+1${phoneNumber}`}>
          {text.text}
        </a>
        <a className="sticky-cta-btn is-apply" href="#contact">
          {text.apply}
        </a>
      </div>
    </aside>
  )
}
