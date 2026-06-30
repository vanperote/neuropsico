import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { AnimatedTimeline } from '@/components/landing/AnimatedTimeline'
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
        <div className="sobre-copy">
          <div className="reveal">
            <span className="label">{sobre.label}</span>
            <h2>{sobre.title}</h2>
            <p className="sobre-lead">{sobre.lead}</p>
          </div>
          <AnimatedTimeline items={sobre.timeline} />
        </div>
      </div>
    </section>
  )
}
