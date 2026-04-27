import './Features.css'

const copy = {
  EN: {
    servicesKicker: 'Services',
    servicesTitle: 'Dispatch support built around weekly revenue, not generic load booking.',
    servicesText:
      'Every lane decision, rate conversation, and schedule adjustment should move your operation forward. We focus on execution that feels organized, responsive, and dependable.',
    services: [
      {
        title: 'High-value load search',
        description: 'We target stronger-paying freight and match it to your equipment, timing, and preferred lanes.'
      },
      {
        title: 'Broker rate negotiation',
        description: 'We push for better rates, better detention terms, and cleaner confirmations before dispatch.'
      },
      {
        title: 'Dedicated dispatcher',
        description: 'One point of contact keeps communication consistent and your weekly plan easier to manage.'
      },
      {
        title: 'Route planning',
        description: 'We reduce empty miles and sequence loads around fuel, time windows, and reset constraints.'
      },
      {
        title: 'Paperwork support',
        description: 'Rate confirmations, setup packets, and dispatch details stay organized so nothing slips.'
      },
      {
        title: 'Equipment coverage',
        description: 'Support for dry van, flatbed, reefer, hotshot, power only, and team operations.'
      }
    ],
    advantagesKicker: 'Why EZCargo',
    advantagesTitle: 'A cleaner, more professional experience for drivers and fleet owners.',
    advantages: [
      'Fast response times when brokers or drivers need answers.',
      'Consistent lane strategy instead of one-off load chasing.',
      'Clear communication that protects schedule and margin.',
      'U.S.-based support with long-term partnership mindset.'
    ],
    processKicker: 'How It Works',
    processTitle: 'Straightforward onboarding and daily execution.',
    process: [
      {
        step: '01',
        title: 'Share your equipment and target lanes',
        description: 'We review your trailer type, operating region, driver schedule, and revenue goals.'
      },
      {
        step: '02',
        title: 'We build the load plan',
        description: 'Your dispatcher starts sourcing freight, negotiating rates, and aligning pickups and delivery windows.'
      },
      {
        step: '03',
        title: 'Stay loaded week after week',
        description: 'We manage the day-to-day communication so your truck stays productive and your calendar stays organized.'
      }
    ]
  },
  ES: {
    servicesKicker: 'Servicios',
    servicesTitle: 'Despacho enfocado en ingresos semanales, no en reservar cargas sin estrategia.',
    servicesText:
      'Cada decision de ruta, negociacion de tarifa y ajuste de agenda debe impulsar su operacion. Nos enfocamos en una ejecucion organizada, agil y confiable.',
    services: [
      {
        title: 'Busqueda de cargas con mejor tarifa',
        description: 'Buscamos cargas mejor pagadas segun su equipo, tiempos y rutas preferidas.'
      },
      {
        title: 'Negociacion con brokers',
        description: 'Negociamos mejores tarifas, mejores terminos y confirmaciones mas claras antes del despacho.'
      },
      {
        title: 'Despachador dedicado',
        description: 'Un solo punto de contacto mantiene la comunicacion consistente y su semana mas ordenada.'
      },
      {
        title: 'Planificacion de rutas',
        description: 'Reducimos millas vacias y organizamos las cargas segun combustible, horarios y descansos.'
      },
      {
        title: 'Soporte de documentos',
        description: 'Confirmaciones, paquetes y detalles de despacho se mantienen organizados para evitar errores.'
      },
      {
        title: 'Cobertura de equipos',
        description: 'Soporte para dry van, flatbed, reefer, hotshot, power only y operaciones en equipo.'
      }
    ],
    advantagesKicker: 'Por que EZCargo',
    advantagesTitle: 'Una experiencia mas ordenada y profesional para conductores y duenos de flota.',
    advantages: [
      'Respuesta rapida cuando brokers o conductores necesitan atencion.',
      'Estrategia de rutas consistente en lugar de buscar cargas al azar.',
      'Comunicacion clara para proteger el horario y el margen.',
      'Soporte en EE. UU. con enfoque en relaciones de largo plazo.'
    ],
    processKicker: 'Como funciona',
    processTitle: 'Incorporacion simple y ejecucion diaria clara.',
    process: [
      {
        step: '01',
        title: 'Comparta su equipo y rutas objetivo',
        description: 'Revisamos su tipo de remolque, region de operacion, agenda del conductor y metas de ingresos.'
      },
      {
        step: '02',
        title: 'Construimos el plan de cargas',
        description: 'Su despachador comienza a buscar cargas, negociar tarifas y alinear recogidas y entregas.'
      },
      {
        step: '03',
        title: 'Mantenga su camion cargado cada semana',
        description: 'Gestionamos la comunicacion diaria para mantener productividad y orden en su operacion.'
      }
    ]
  }
}

export default function Features({ lang }) {
  const text = copy[lang]

  return (
    <>
      <section className="section" id="services">
        <div className="section-inner">
          <div className="section-heading">
            <span className="section-kicker">{text.servicesKicker}</span>
            <h2>{text.servicesTitle}</h2>
            <p>{text.servicesText}</p>
          </div>

          <div className="services-grid">
            {text.services.map((item) => (
              <article className="service-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast" id="advantages">
        <div className="section-inner benefits-layout">
          <div className="section-heading">
            <span className="section-kicker">{text.advantagesKicker}</span>
            <h2>{text.advantagesTitle}</h2>
          </div>

          <div className="benefits-panel">
            {text.advantages.map((item) => (
              <div className="benefit-row" key={item}>
                <span className="benefit-bullet" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-inner">
          <div className="section-heading">
            <span className="section-kicker">{text.processKicker}</span>
            <h2>{text.processTitle}</h2>
          </div>

          <div className="process-grid">
            {text.process.map((item) => (
              <article className="process-card" key={item.step}>
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
