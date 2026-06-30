import { ArrowUpRight, Check, Clock, Heart, ShieldCheck, Sparkles } from 'lucide-react'
import { ctaFinal, WHATSAPP_URL } from '@/data/content'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.1-.45-4.38-1.23l-.31-.19-3.01.79.8-2.93-.2-.3A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.36-5.96c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
  )
}

const trustIcons = [ShieldCheck, Clock, Heart]

export function CtaFinalSection() {
  return (
    <section className="cta-final dark" id="cta-final" aria-labelledby="cta-final-heading">
      <div className="noise" aria-hidden="true" />
      <div className="cta-final-bg" aria-hidden="true">
        <div className="cta-final-orb cta-final-orb-a" />
        <div className="cta-final-orb cta-final-orb-b" />
        <div className="cta-final-orb cta-final-orb-c" />
      </div>

      <div className="container cta-final-shell">
        <div className="cta-final-grid">
          <div className="cta-final-copy reveal">
            <span className="label">{ctaFinal.label}</span>
            <h2 id="cta-final-heading">{ctaFinal.title}</h2>
            <p className="cta-final-lead">{ctaFinal.lead}</p>

            <div className="cta-final-trust" role="list" aria-label="Garantias do atendimento">
              {ctaFinal.trust.map((item, i) => {
                const Icon = trustIcons[i] ?? Sparkles
                return (
                  <div key={item} className="cta-final-trust-item" role="listitem">
                    <Icon size={15} strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                )
              })}
            </div>

            <div className="cta-final-metrics" aria-label="Resultados comprovados">
              {ctaFinal.metrics.map((m) => (
                <div key={m.label} className="cta-final-metric">
                  <b>{m.value}</b>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-final-action reveal" style={{ transitionDelay: '.08s' }}>
            <div className="cta-final-card">
              <div className="cta-final-card-glow" aria-hidden="true" />
              <span className="cta-final-scarcity">
                <Sparkles size={14} strokeWidth={2} aria-hidden="true" />
                {ctaFinal.scarcity}
              </span>
              <h3>{ctaFinal.cardTitle}</h3>
              <p className="cta-final-card-sub">{ctaFinal.cardSubtitle}</p>

              <ul className="cta-final-includes">
                {ctaFinal.includes.map((item) => (
                  <li key={item}>
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                className="cta-final-primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="cta-final-wa-icon" />
                {ctaFinal.cta}
                <ArrowUpRight size={20} strokeWidth={2.5} aria-hidden="true" />
              </a>

              <a className="cta-final-secondary" href={ctaFinal.secondaryHref}>
                {ctaFinal.secondaryCta}
                <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="cta-final-steps reveal" style={{ transitionDelay: '.14s' }}>
          {ctaFinal.steps.map((step, i) => (
            <article key={step.num} className="cta-final-step" style={{ transitionDelay: `${0.06 * i}s` }}>
              <span className="cta-final-step-num">{step.num}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
