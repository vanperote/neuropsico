import { Award, ClipboardCheck, HeartHandshake, ShieldCheck, Star } from 'lucide-react'
import { resultados } from '@/data/content'

const iconMap = {
  clipboard: ClipboardCheck,
  star: Star,
  award: Award,
  heart: HeartHandshake,
}

export function ResultadosSection() {
  return (
    <section className="resultados dark" id="resultados" aria-labelledby="resultados-heading">
      <div className="resultados-bg" aria-hidden="true">
        <div className="resultados-orb resultados-orb-a" />
        <div className="resultados-orb resultados-orb-b" />
        <div className="resultados-grid-lines" />
      </div>

      <div className="container resultados-shell">
        <div className="resultados-header">
          <span className="label">{resultados.label}</span>
          <h2 id="resultados-heading">{resultados.title}</h2>
          <p>{resultados.subtitle}</p>
        </div>

        <div className="resultados-grid">
          {resultados.metrics.map((metric, i) => {
            const Icon = iconMap[metric.icon]
            return (
              <article
                key={metric.label}
                className="resultados-card reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="resultados-card-accent" aria-hidden="true" />
                <div className="resultados-icon">
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div className="resultados-value">
                  <b
                    className="count"
                    data-target={metric.target}
                    data-suffix={metric.suffix || undefined}
                  >
                    0
                  </b>
                </div>
                <h3>{metric.label}</h3>
                <p>{metric.description}</p>
              </article>
            )
          })}
        </div>

        <div className="resultados-footnote reveal" style={{ transitionDelay: '.2s' }}>
          <ShieldCheck size={16} strokeWidth={2} aria-hidden="true" />
          <span>{resultados.footnote}</span>
        </div>
      </div>
    </section>
  )
}
