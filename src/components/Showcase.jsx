import { useRef } from 'react'
import './Showcase.css'

const trailerImages = {
  dryvan: `${import.meta.env.BASE_URL}trailers/dryvan.png`,
  flatbed: `${import.meta.env.BASE_URL}trailers/flatbed.png`,
  reefer: `${import.meta.env.BASE_URL}trailers/reefer.png`,
  powerOnly: `${import.meta.env.BASE_URL}trailers/power-only.png`,
  conestoga: `${import.meta.env.BASE_URL}trailers/conestoga.png`
}

const sliderContent = {
  EN: {
    kicker: 'Equipment Focus',
    title: 'Trailer coverage presented with the same polish your operation expects from dispatch.',
    description:
      'From dry van lanes to temperature-controlled freight, we support the equipment owner-operators rely on most.',
    previous: 'Previous trailers',
    next: 'Next trailers',
    slides: [
      {
        title: 'Dry Van',
        detail: 'General freight, dedicated lanes, and balanced reload strategy.',
        image: trailerImages.dryvan
      },
      {
        title: 'Flatbed',
        detail: 'Open-deck freight with stronger visibility on securement and timing.',
        image: trailerImages.flatbed
      },
      {
        title: 'Reefer',
        detail: 'Cold-chain scheduling with attention to tighter appointments and dwell.',
        image: trailerImages.reefer
      },
      {
        title: 'Power Only',
        detail: 'Tractor-focused dispatch for preloaded trailer moves and drop workflows.',
        image: trailerImages.powerOnly
      },
      {
        title: 'Conestoga',
        detail: 'Covered flatbed flexibility for freight that needs open-deck access with added protection.',
        image: trailerImages.conestoga
      }
    ],
    reviewsKicker: 'Driver Reviews',
    reviewsTitle: 'Trusted by owner-operators who care about rate quality and clear communication.',
    reviews: [
      {
        quote:
          'They stay ahead of reloads and broker follow-up, which keeps my week organized instead of reactive.',
        name: 'Marcus H.',
        role: 'O/O, Dry Van'
      },
      {
        quote:
          'Appointments, rate details, and paperwork come through clean. That alone saves me a lot of friction.',
        name: 'Elena R.',
        role: 'O/O, Reefer'
      },
      {
        quote:
          "For flatbed, timing matters. EZCargo keeps the communication sharp and doesn't disappear when a load gets complicated.",
        name: 'Derrick S.',
        role: 'O/O, Flatbed'
      }
    ]
  },
  ES: {
    kicker: 'Cobertura de equipos',
    title: 'Cobertura de remolques presentada con el nivel profesional que su operacion espera del despacho.',
    description:
      'Desde rutas dry van hasta carga con temperatura controlada, apoyamos los equipos que mas usan los owner-operators.',
    previous: 'Remolques anteriores',
    next: 'Siguientes remolques',
    slides: [
      {
        title: 'Dry Van',
        detail: 'Carga general, rutas dedicadas y estrategia de recarga mas equilibrada.',
        image: trailerImages.dryvan
      },
      {
        title: 'Flatbed',
        detail: 'Carga open-deck con mejor control de mercancia y tiempos de entrega.',
        image: trailerImages.flatbed
      },
      {
        title: 'Reefer',
        detail: 'Programacion cold-chain con atencion a citas ajustadas y tiempos de espera.',
        image: trailerImages.reefer
      },
      {
        title: 'Power Only',
        detail: 'Despacho enfocado en tractor para movimientos con trailer precargado y drop.',
        image: trailerImages.powerOnly
      },
      {
        title: 'Conestoga',
        detail: 'Flexibilidad de flatbed cubierto para cargas que necesitan acceso open-deck con proteccion extra.',
        image: trailerImages.conestoga
      }
    ],
    reviewsKicker: 'Resenas',
    reviewsTitle: 'Confianza de owner-operators que valoran mejores tarifas y comunicacion clara.',
    reviews: [
      {
        quote:
          'Se adelantan a las recargas y al seguimiento con brokers, y eso mantiene mi semana mas ordenada.',
        name: 'Marcus H.',
        role: 'O/O, Dry Van'
      },
      {
        quote:
          'Las citas, tarifas y documentos llegan claros. Solo eso ya me evita muchos problemas.',
        name: 'Elena R.',
        role: 'O/O, Reefer'
      },
      {
        quote:
          'En flatbed el tiempo importa. EZCargo mantiene la comunicacion firme y no desaparece cuando la carga se complica.',
        name: 'Derrick S.',
        role: 'O/O, Flatbed'
      }
    ]
  }
}

function StarRow() {
  return (
    <div className="review-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          &#9733;
        </span>
      ))}
    </div>
  )
}

export default function Showcase({ lang }) {
  const text = sliderContent[lang]
  const trackRef = useRef(null)

  function scrollTrack(direction) {
    if (!trackRef.current) return

    const width = trackRef.current.clientWidth * 0.82
    trackRef.current.scrollBy({
      left: direction * width,
      behavior: 'smooth'
    })
  }

  return (
    <section className="section showcase-section" id="equipment">
      <div className="section-inner showcase-shell">
        <div className="showcase-topbar">
          <div className="section-heading showcase-heading">
            <span className="section-kicker">{text.kicker}</span>
            <h2>{text.title}</h2>
            <p>{text.description}</p>
          </div>

          <div className="carousel-controls" aria-label="Trailer carousel controls">
            <button type="button" className="carousel-btn" onClick={() => scrollTrack(-1)} aria-label={text.previous}>
              <span aria-hidden="true">&larr;</span>
            </button>
            <button type="button" className="carousel-btn" onClick={() => scrollTrack(1)} aria-label={text.next}>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        <div className="showcase-track" ref={trackRef}>
          {text.slides.map((item) => (
            <article className="trailer-card" key={item.title}>
              <div className="trailer-image-wrap">
                <img className="trailer-image" src={item.image} alt={`${item.title} trailer`} />
                <span className="trailer-label">{item.title}</span>
              </div>
              <div className="trailer-copy">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews-block">
          <div className="section-heading reviews-heading">
            <span className="section-kicker">{text.reviewsKicker}</span>
            <h2>{text.reviewsTitle}</h2>
          </div>

          <div className="reviews-grid">
            {text.reviews.map((item) => (
              <article className="review-card" key={`${item.name}-${item.role}`}>
                <StarRow />
                <p className="review-quote">&ldquo;{item.quote}&rdquo;</p>
                <div className="review-meta">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
