import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { pricingPackage } from '@/data/content'

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
}

export function InvestimentoSection() {
  const cardRef = useRef<HTMLDivElement>(null)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), { stiffness: 180, damping: 22 })
  const glareX = useSpring(useTransform(pointerX, [-0.5, 0.5], [0, 100]), { stiffness: 120, damping: 20 })
  const glareY = useSpring(useTransform(pointerY, [-0.5, 0.5], [0, 100]), { stiffness: 120, damping: 20 })

  const savings = pricingPackage.marketPrice - pricingPackage.price
  const savingsPercent = Math.round((savings / pricingPackage.marketPrice) * 100)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section className="investimento dark" id="investimento" aria-labelledby="investimento-heading">
      <div className="investimento-bg" aria-hidden="true">
        <div className="investimento-orb investimento-orb-a" />
        <div className="investimento-orb investimento-orb-b" />
        <div className="investimento-grid-lines" />
      </div>

      <div className="container investimento-shell">
        <div className="investimento-header reveal">
          <span className="label">{pricingPackage.label}</span>
          <h2 id="investimento-heading">{pricingPackage.title}</h2>
          <p>{pricingPackage.subtitle}</p>
        </div>

        <div className="investimento-layout">
          <div className="investimento-aside reveal">
            <div className="investimento-highlight-stack">
              {pricingPackage.highlights.map((item, i) => (
                <div key={item} className="investimento-highlight" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <Sparkles size={15} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="investimento-value-prop">
              <p>
                Um investimento claro, com entregáveis definidos e acompanhamento humano em cada fase do processo.
              </p>
            </div>
          </div>

          <div
            className="investimento-stage reveal"
            style={{ transitionDelay: '.08s' }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div className="investimento-shadow investimento-shadow-far" aria-hidden="true" />
            <div className="investimento-shadow investimento-shadow-near" aria-hidden="true" />

            <motion.div
              ref={cardRef}
              className="investimento-card-3d"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                className="investimento-card-glare"
                aria-hidden="true"
                style={{
                  background: useTransform(
                    [glareX, glareY],
                    ([x, y]) =>
                      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.16), transparent 42%)`,
                  ),
                }}
              />

              <div className="investimento-card-edge investimento-card-edge-top" aria-hidden="true" />
              <div className="investimento-card-body">
                <div className="investimento-card-top">
                  <span className="investimento-tag">
                    <Sparkles size={13} strokeWidth={2} aria-hidden="true" />
                    {pricingPackage.tag}
                  </span>
                  <span className="investimento-save">{savingsPercent}% off</span>
                </div>

                <h3>{pricingPackage.name}</h3>

                <div className="investimento-pricing">
                  <span className="investimento-old">De {formatCurrency(pricingPackage.marketPrice)}</span>
                  <div className="investimento-price-row">
                    <span className="investimento-price">{formatCurrency(pricingPackage.price)}</span>
                    <span className="investimento-save-pill">Economize {formatCurrency(savings)}</span>
                  </div>
                  <span className="investimento-installment">{pricingPackage.installment}</span>
                </div>

                <ul className="investimento-features">
                  {pricingPackage.features.map((item) => (
                    <li key={item}>
                      <span className="investimento-check">
                        <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a className="investimento-cta" href={pricingPackage.ctaHref}>
                  {pricingPackage.cta}
                  <ArrowUpRight size={20} strokeWidth={2.5} aria-hidden="true" />
                </a>

                <p className="investimento-note">{pricingPackage.note}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
