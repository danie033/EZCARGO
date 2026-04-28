import { useEffect, useRef, useState } from 'react'
import './ConversionSections.css'

// const phoneNumber = '3855676354'
// const textNumber = '3855676354'

const copy = {
  EN: {
    pricingKicker: 'No BS Pricing',
    pricingTitle: 'Straightforward dispatch terms that are easy to verify.',
    pricingText:
      'The pricing conversation should be simple. We keep expectations clear so owner-operators know exactly how dispatch gets paid and what stays in their control.',
    pricingItems: [
      {
        icon: '01',
        title: 'No hidden deductions',
        description: 'Your settlement should not get chipped away by surprise admin fees, mystery charges, or extra percentages.'
      },
      {
        icon: '02',
        title: 'You keep full rate confirmation',
        description: 'Every booked load stays transparent. You see the rate confirmation and know what the broker agreed to pay.'
      },
      {
        icon: '03',
        title: 'We get paid only when you get paid',
        description: 'Our success is tied to your truck producing. If freight is not moving, we are not collecting dispatch pay.'
      }
    ],
    resultsKicker: 'Real Numbers',
    resultsTitle: 'A dispatch operation measured by output, consistency, and driver trust.',
    resultsText:
      'These placeholder numbers show the kind of proof points serious owner-operators want to see before they call.',
    metrics: [
      { value: 8500, prefix: '$', suffix: '', label: 'avg weekly gross' },
      { value: 150, prefix: '', suffix: '+', label: 'loads booked weekly' },
      { value: 75, prefix: '', suffix: '+', label: 'active drivers' }
    ],
    faqKicker: 'Common Questions',
    faqTitle: 'Answers that reduce friction before the first call.',
    faqs: [
      {
        question: 'Do I have to sign a contract?',
        answer:
          'No long-term trap. Terms are explained upfront so you know exactly what the relationship looks like before dispatch starts.'
      },
      {
        question: 'What percentage do you charge?',
        answer:
          'The dispatch percentage is discussed clearly before onboarding. No side fees, no hidden deductions, and no guessing after the load is booked.'
      },
      {
        question: 'Do I choose my loads?',
        answer:
          'Your dispatcher sources and negotiates options, but the final load decision stays with you and your operating goals.'
      }
    ],
    pricingCta: 'Call for Clear Terms',
    faqCta: 'Text Us Your Questions'
  },
  ES: {
    pricingKicker: 'Precios Sin Rodeos',
    pricingTitle: 'Terminos de despacho claros y faciles de verificar.',
    pricingText:
      'La conversacion sobre precios debe ser simple. Mantenemos expectativas claras para que el owner-operator sepa exactamente como se paga el despacho y que permanece bajo su control.',
    pricingItems: [
      {
        icon: '01',
        title: 'Sin deducciones ocultas',
        description:
          'Su settlement no debe reducirse con cargos sorpresa, tarifas dudosas o porcentajes extra.'
      },
      {
        icon: '02',
        title: 'Usted conserva la rate confirmation completa',
        description:
          'Cada carga reservada se mantiene transparente. Usted ve la rate confirmation y sabe lo que el broker acepto pagar.'
      },
      {
        icon: '03',
        title: 'Nos pagan solo cuando a usted le pagan',
        description:
          'Nuestro exito depende de que su camion produzca. Si la carga no se mueve, nosotros no cobramos despacho.'
      }
    ],
    resultsKicker: 'Resultados',
    resultsTitle: 'Una operacion de despacho medida por produccion, consistencia y confianza.',
    resultsText:
      'Estos numeros de ejemplo muestran el tipo de pruebas que un owner-operator serio quiere ver antes de llamar.',
    metrics: [
      { value: 8500, prefix: '$', suffix: '', label: 'promedio bruto semanal' },
      { value: 250, prefix: '', suffix: '+', label: 'cargas reservadas por semana' },
      { value: 120, prefix: '', suffix: '+', label: 'conductores activos' }
    ],
    faqKicker: 'Preguntas Comunes',
    faqTitle: 'Respuestas que reducen dudas antes de la primera llamada.',
    faqs: [
      {
        question: 'Tengo que firmar un contrato?',
        answer:
          'No hay una trampa de largo plazo. Los terminos se explican desde el principio para que sepa exactamente como funciona la relacion antes de iniciar.'
      },
      {
        question: 'Que porcentaje cobran?',
        answer:
          'El porcentaje de despacho se conversa claramente antes del onboarding. Sin cargos laterales, sin deducciones ocultas y sin dudas despues de reservar la carga.'
      },
      {
        question: 'Yo elijo mis cargas?',
        answer:
          'Si. Su despachador busca y negocia opciones, pero la decision final de la carga sigue siendo suya y de sus metas operativas.'
      }
    ],
    pricingCta: 'Llamar para terminos claros',
    faqCta: 'Enviar preguntas por texto'
  }
}

function CountUpMetric({ value, prefix, suffix, label }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const metricRef = useRef(null)

  useEffect(() => {
    const node = metricRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return undefined

    let frameId = 0
    const duration = 1100
    const start = performance.now()

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) * (1 - progress)
      setDisplayValue(Math.round(value * eased))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate)
      }
    }

    frameId = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(frameId)
  }, [isVisible, value])

  return (
    <article className="metric-card" ref={metricRef}>
      <strong>
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </strong>
      <span>{label}</span>
    </article>
  )
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <article className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <button type="button" className="faq-trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <span className="faq-symbol" aria-hidden="true">
          {isOpen ? '\u2212' : '+'}
        </span>
      </button>
      <div className="faq-panel" hidden={!isOpen}>
        <p>{item.answer}</p>
      </div>
    </article>
  )
}

export default function ConversionSections({ lang }) {
  const text = copy[lang]
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <section className="section pricing-section" id="pricing">
        <div className="section-inner pricing-shell">
          <div className="section-heading pricing-heading">
            <span className="section-kicker">{text.pricingKicker}</span>
            <h2>{text.pricingTitle}</h2>
            <p>{text.pricingText}</p>
          </div>

          <div className="pricing-grid">
            {text.pricingItems.map((item) => (
              <article className="pricing-card" key={item.title}>
                <span className="pricing-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <a className="pricing-cta" href={"#contact"}>
            {text.pricingCta}
          </a>
        </div>
      </section>

      <section className="section section-contrast results-section" id="results">
        <div className="section-inner">
          <div className="section-heading">
            <span className="section-kicker">{text.resultsKicker}</span>
            <h2>{text.resultsTitle}</h2>
            <p>{text.resultsText}</p>
          </div>

          <div className="metrics-grid">
            {text.metrics.map((item) => (
              <CountUpMetric key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-inner faq-layout">
          <div className="section-heading faq-heading">
            <span className="section-kicker">{text.faqKicker}</span>
            <h2>{text.faqTitle}</h2>
            <a className="faq-cta" href={"#contact"}>
              {text.faqCta}
            </a>
          </div>

          <div className="faq-list">
            {text.faqs.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
