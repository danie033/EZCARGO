import { useCallback, useEffect, useRef, useState } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const total = text.slides.length

  const updateState = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const cards = [...track.children]
    const trackLeft = track.getBoundingClientRect().left
    let closest = 0
    let best = Infinity
    cards.forEach((card, i) => {
      const d = Math.abs(card.getBoundingClientRect().left - trackLeft)
      if (d < best) {
        best = d
        closest = i
      }
    })
    const maxScroll = track.scrollWidth - track.clientWidth
    setCanPrev(track.scrollLeft > 4)
    setCanNext(track.scrollLeft < maxScroll - 4)
    setActiveIndex(track.scrollLeft >= maxScroll - 4 ? cards.length - 1 : closest)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined
    updateState()
    track.addEventListener('scroll', updateState, { passive: true })
    window.addEventListener('resize', updateState)
    return () => {
      track.removeEventListener('scroll', updateState)
      window.removeEventListener('resize', updateState)
    }
  }, [updateState])

  // Move one card left/right from the CURRENT scroll position (not from the
  // highlighted card), so going back works even after reaching the far right.
  function scrollTrack(direction) {
    const track = trackRef.current
    if (!track) return
    const current = track.scrollLeft
    const trackLeft = track.getBoundingClientRect().left
    const offsets = [...track.children].map(
      (card) => Math.round(card.getBoundingClientRect().left - trackLeft + current)
    )
    const target =
      direction > 0
        ? offsets.find((left) => left > current + 4)
        : [...offsets].reverse().find((left) => left < current - 4)
    track.scrollTo({ left: target ?? (direction > 0 ? track.scrollWidth : 0), behavior: 'smooth' })
  }

  function handleKey(event) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollTrack(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollTrack(-1)
    }
  }

  const progress = ((activeIndex + 1) / total) * 100

  return (
    <section className="section showcase-section" id="equipment">
      <div className="section-inner showcase-shell">
        <div className="showcase-heading-row">
          <div className="section-heading showcase-heading">
            <span className="section-kicker">{text.kicker}</span>
            <h2>{text.title}</h2>
            <p>{text.description}</p>
          </div>
        </div>

        <div className="showcase-stage">
          <div
            className="showcase-track"
            ref={trackRef}
            tabIndex={0}
            onKeyDown={handleKey}
            aria-label={text.kicker}
          >
            {text.slides.map((item, i) => (
              <article className={`trailer-card${i === activeIndex ? ' is-active' : ''}`} key={item.title}>
                <img className="trailer-image" src={item.image} alt={`${item.title} trailer`} loading="lazy" />
                <div className="trailer-shade" aria-hidden="true" />
                <span className="trailer-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="trailer-copy">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <a className="trailer-link" href="#contact">
                    {lang === 'ES' ? 'Hablar con despacho' : 'Get dispatched'}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="showcase-controls">
            <div className="showcase-counter" aria-live="polite">
              <strong>{String(activeIndex + 1).padStart(2, '0')}</strong>
              <span>/ {String(total).padStart(2, '0')}</span>
            </div>

            <div className="showcase-progress" aria-hidden="true">
              <span style={{ width: `${progress}%` }} />
            </div>

            <div className="carousel-controls" aria-label="Trailer carousel controls">
              <button
                type="button"
                className="carousel-btn"
                onClick={() => scrollTrack(-1)}
                disabled={!canPrev}
                aria-label={text.previous}
              >
                <span aria-hidden="true">&larr;</span>
              </button>
              <button
                type="button"
                className="carousel-btn"
                onClick={() => scrollTrack(1)}
                disabled={!canNext}
                aria-label={text.next}
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
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
