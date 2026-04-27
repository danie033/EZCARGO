import './Footer.css'

const copy = {
  EN: {
    title: 'Ready to run a more organized dispatch operation?',
    text:
      'Talk with EZCargo Logistics about your lanes, equipment, and weekly freight goals. We will help you build a dispatch routine that looks sharper to brokers and performs better for your business.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    coverageLabel: 'Coverage',
    coverage: 'U.S. dispatch support',
    cta: 'Start the conversation',
    copyright: '(c) 2026 EZCARGO LOGISTICS LLC'
  },
  ES: {
    title: 'Listo para operar con un despacho mas organizado?',
    text:
      'Hable con EZCargo Logistics sobre sus rutas, equipo y metas semanales. Le ayudamos a construir una operacion de despacho mas solida y profesional.',
    phoneLabel: 'Telefono',
    emailLabel: 'Correo',
    coverageLabel: 'Cobertura',
    coverage: 'Soporte de despacho en EE. UU.',
    cta: 'Iniciar conversacion',
    copyright: '(c) 2026 EZCARGO LOGISTICS LLC'
  }
}

export default function Footer({ lang }) {
  const text = copy[lang]

  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-copy">
          <img className="footer-logo" src="/branding/ezcargo-logo-lockup.png" alt="EZCargo Logistics logo" />
          <h2>{text.title}</h2>
          <p>{text.text}</p>
        </div>

        <div className="contact-panel">
          <div className="contact-row">
            <span>{text.phoneLabel}</span>
            <strong>(385) 567-6354</strong>
          </div>
          <div className="contact-row">
            <span>{text.emailLabel}</span>
            <strong>ezcargologistics@hotmail.com</strong>
          </div>
          <div className="contact-row">
            <span>{text.coverageLabel}</span>
            <strong>{text.coverage}</strong>
          </div>

          <a className="footer-cta" href="mailto:info@ezcargo.com">
            {text.cta}
          </a>
        </div>
      </div>

      <p className="copy">{text.copyright}</p>
    </footer>
  )
}
