import { BookOpen, HeartHandshake, Lightbulb, Route } from 'lucide-react'
import { beneficios } from '@/data/content'

const iconMap = {
  lightbulb: Lightbulb,
  route: Route,
  home: HeartHandshake,
  school: BookOpen,
}

export function BeneficiosSection() {
  return (
    <section className="beneficios" id="beneficios">
      <div className="container">
        <div className="head center">
          <span className="label">{beneficios.label}</span>
          <h2>{beneficios.title}</h2>
          <p>{beneficios.subtitle}</p>
        </div>
        <div className="beneficios-grid">
          {beneficios.items.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <article
                key={item.title}
                className="beneficio-card reveal"
                style={{ transitionDelay: `${index * 0.07}s` }}
              >
                <div className="beneficio-icon">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
