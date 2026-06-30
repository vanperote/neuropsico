import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { sobre } from '@/data/content'

export function SobreSection() {
  return (
    <section id="sobre">
      <div className="container auth-grid">
        <div className="auth-photo reveal">
          <div className="mask">
            <OptimizedImage
              src={sobre.image}
              alt={sobre.imageAlt}
              width={380}
              height={440}
              loading="lazy"
            />
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: '.1s' }}>
          <span className="label">{sobre.label}</span>
          <h2>{sobre.title}</h2>
          <p className="sobre-lead">{sobre.lead}</p>
          <div className="timeline-mini">
            {sobre.timeline.map((item) => (
              <div key={item.year} className="tm-item">
                <span className="tm-year">{item.year}</span>
                <div className="tm-text">
                  <b>{item.title}</b>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
