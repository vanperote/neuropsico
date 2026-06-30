import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { cases, contactInfo, faqItems, marqueeItems, proofs, WHATSAPP_URL } from '@/data/content'
import { useCounters } from '@/hooks/useCounters'
import { useReveal } from '@/hooks/useReveal'
import { GallerySection } from '@/components/landing/GallerySection'
import { ResultadosSection } from '@/components/landing/ResultadosSection'
import { HeroTitle } from '@/components/landing/HeroTitle'
import { ContactSection } from '@/components/landing/ContactSection'
import { CtaFinalSection } from '@/components/landing/CtaFinalSection'
import { InvestimentoSection } from '@/components/landing/InvestimentoSection'
import { ProcessoSection } from '@/components/landing/ProcessoSection'
import { JsonLd } from '@/components/seo/JsonLd'

function GlowButton({
  href,
  className,
  children,
  style,
  target,
  rel,
}: {
  href: string
  className: string
  children: ReactNode
  style?: React.CSSProperties
  target?: string
  rel?: string
}) {
  return (
    <a href={href} className={`${className} glow-target`} style={style} target={target} rel={rel}>
      {children}
      <span className="glow" />
    </a>
  )
}

function CaseVideo({ src }: { src: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handlePlay = useCallback(() => {
    const wrapper = wrapperRef.current
    const video = wrapper?.querySelector('video')
    if (!video || !wrapper) return

    document.querySelectorAll('.site .case-video video').forEach((v) => {
      if (v !== video) {
        ;(v as HTMLVideoElement).pause()
        v.closest('.case-video')?.classList.remove('playing')
      }
    })
    video.play()
    wrapper.classList.add('playing')
  }, [])

  return (
    <div className="case-video" ref={wrapperRef}>
      <video
        src={src}
        preload="metadata"
        playsInline
        onClick={() => {
          const video = wrapperRef.current?.querySelector('video')
          if (!video) return
          if (video.paused) handlePlay()
          else {
            video.pause()
            wrapperRef.current?.classList.remove('playing')
          }
        }}
        onEnded={() => wrapperRef.current?.classList.remove('playing')}
        onPause={() => wrapperRef.current?.classList.remove('playing')}
      />
      <button type="button" className="play-btn" aria-label="Reproduzir depoimento" onClick={handlePlay}>
        <svg viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
      <span>Depoimento em vídeo</span>
    </div>
  )
}

export function LandingPage() {
  const [navOpen, setNavOpen] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const [stickyVisible, setStickyVisible] = useState(false)
  const [exitOpen, setExitOpen] = useState(false)
  const [fabTip, setFabTip] = useState(false)
  const [proofVisible, setProofVisible] = useState(false)
  const [proofIndex, setProofIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const lastY = useRef(0)

  useReveal()
  useCounters()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHeaderScrolled(y > 40)
      setHeaderHidden(y > lastY.current && y > 160)
      lastY.current = y
      setStickyVisible(y > (heroRef.current?.offsetHeight ?? 0) * 0.9)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorRef.current?.style.setProperty('--mx', `${e.clientX}px`)
      cursorRef.current?.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 981px)').matches
    if (!isDesktop) return

    const hero = heroRef.current
    const target = parallaxRef.current
    if (!hero || !target) return

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      target.style.transform = `translate(${x}px, ${y}px)`
    }
    hero.addEventListener('mousemove', onMove)
    return () => hero.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 981px)').matches
    if (!isDesktop) return

    document.querySelectorAll('.site .glow-target').forEach((el) => {
      const glow = el.querySelector('.glow')
      if (!glow) return
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect()
        const me = e as MouseEvent
        ;(glow as HTMLElement).style.left = `${me.clientX - r.left}px`
        ;(glow as HTMLElement).style.top = `${me.clientY - r.top}px`
      })
    })
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('exitShown') === '1') return
    const onLeave = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setExitOpen(true)
        sessionStorage.setItem('exitShown', '1')
      }
    }
    document.addEventListener('mouseleave', onLeave)
    return () => document.removeEventListener('mouseleave', onLeave)
  }, [])

  useEffect(() => {
    const t1 = setTimeout(() => setFabTip(true), 6000)
    const t2 = setTimeout(() => setFabTip(false), 10500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    const show = () => {
      setProofVisible(true)
      setTimeout(() => setProofVisible(false), 5500)
      setProofIndex((i) => i + 1)
    }
    const t = setTimeout(show, 9000)
    interval = setInterval(show, 22000)
    return () => {
      clearTimeout(t)
      clearInterval(interval)
    }
  }, [])

  const proof = proofs[proofIndex % proofs.length]

  const navLinks = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'processo', label: 'Processo' },
    { id: 'investimento', label: 'Investimento' },
    { id: 'contato', label: 'Contato' },
    { id: 'faq', label: 'FAQ' },
  ] as const

  return (
    <div className="site">
      <JsonLd />
      <div className="cursor-glow" ref={cursorRef} />

      <header id="header" className={[headerScrolled && 'scrolled', headerHidden && 'hide'].filter(Boolean).join(' ')}>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              <span /> Caminhos do Desenvolvimento
            </a>
            <div className={`nav-links${navOpen ? ' open' : ''}`}>
              {navLinks.map(({ id, label }) => (
                <a key={id} href={`#${id}`} onClick={() => setNavOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
            <a href="#cta-final" className="nav-cta">
              Agendar avaliação
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-label="Abrir menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      <div className={`sticky-cta${stickyVisible ? ' show' : ''}`}>
        <div className="container">
          <div>
            <p>Pronta para entender como seu filho aprende?</p>
            <span>Resposta em até 24h · Sem compromisso</span>
          </div>
          <a href="#cta-final" className="btn btn-coral btn-sm">
            Agendar agora
          </a>
        </div>
      </div>

      <main>
        <section className="hero dark" id="hero" ref={heroRef}>
          <div className="noise" />
          <div className="mesh">
            <div className="b b1" />
            <div className="b b2" />
            <div className="b b3" />
          </div>
          <div className="container hero-grid">
            <div>
              <span className="eyebrow reveal in">Neuropsicopedagogia Clínica · Boa Vista</span>
              <HeroTitle />
              <p className="lead reveal in" style={{ transitionDelay: '.15s' }}>
                Diagnóstico preciso, plano individual e acompanhamento próximo — para crianças, adolescentes e
                adultos que merecem entender, enfim, como aprendem melhor.
              </p>
              <div className="hero-actions reveal in" style={{ transitionDelay: '.22s' }}>
                <GlowButton href="#cta-final" className="btn btn-coral">
                  Agendar avaliação
                </GlowButton>
                <GlowButton href="#processo" className="btn btn-outline-light">
                  Ver como funciona
                </GlowButton>
              </div>
              <span className="btn-micro reveal in" style={{ transitionDelay: '.28s' }}>
                Sem compromisso · Vagas limitadas este mês
              </span>
              <div className="hero-meta reveal in" style={{ transitionDelay: '.34s' }}>
                <div className="stat">
                  <b className="count" data-target="500">
                    0
                  </b>
                  <span>atendimentos</span>
                </div>
                <div className="stat">
                  <b className="count" data-target="12">
                    0
                  </b>
                  <span>anos de prática</span>
                </div>
                <div className="stat">
                  <b className="count" data-target="98" data-suffix="%">
                    0
                  </b>
                  <span>% satisfação</span>
                </div>
              </div>
            </div>
            <div className="hero-visual reveal in" style={{ transitionDelay: '.3s' }} ref={parallaxRef}>
              <div className="glass-card">
                <div className="glass-photo mask in">
                  <img src="/assets/andreza.jpg" alt="Dra. Andreza Mississipe — Neuropsicopedagoga" width={380} height={440} />
                </div>
              </div>
              <div className="glass-badge gb1">
                <div className="dot">🧠</div>Plano individual
              </div>
              <div className="glass-badge gb2">
                <div className="dot">✓</div>Aprovação 98%
              </div>
            </div>
          </div>
          <div className="scroll-cue">
            <span>role</span>
            <div className="line" />
          </div>
        </section>

        <div className="marquee-wrap" aria-label="Instituições parceiras">
          <div className="marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${item}-${i}`}>{item}</span>
            ))}
          </div>
        </div>

        <ResultadosSection />

        <section id="sobre">
          <div className="container auth-grid">
            <div className="auth-photo reveal">
              <div className="mask">
                <img src="/assets/andreza.jpg" alt="Dra. Andreza Mississipe — Neuropsicopedagoga" width={380} height={440} loading="lazy" />
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '.1s' }}>
              <span className="label">Dra. Andreza Mississipe</span>
              <h2>Ciência aplicada com escuta de verdade</h2>
              <p style={{ fontSize: 16, color: 'var(--muted-dark)', marginTop: 16, maxWidth: 520 }}>
                Cada avaliação parte da mesma pergunta: como essa pessoa aprende melhor? A resposta combina instrumentos
                validados cientificamente com sensibilidade pela história de cada família.
              </p>
              <div className="timeline-mini">
                {[
                  ['2012', 'Formação em Psicopedagogia', 'Base clínica e escolar em desenvolvimento infantil.'],
                  ['2016', 'Especialização em Neurociência da Aprendizagem', 'Aprofundamento em avaliação neuropsicológica.'],
                  ['2019', 'Consultoria escolar', 'Parceria com instituições de ensino.'],
                  ['Hoje', 'Atuação clínica integral', 'Avaliação, intervenção e orientação contínuas.'],
                ].map(([year, title, desc]) => (
                  <div key={year} className="tm-item">
                    <span className="tm-year">{year}</span>
                    <div className="tm-text">
                      <b>{title}</b>
                      <span>{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" style={{ background: 'var(--cream)' }}>
          <div className="container">
            <div className="head center">
              <span className="label">Serviços</span>
              <h2>Cuidado pensado para cada etapa</h2>
              <p>Da primeira avaliação ao acompanhamento contínuo.</p>
            </div>
            <div className="servicos-grid">
              {[
                ['🧩', 'Avaliação Neuropsicopedagógica', 'Mapeamento completo de atenção, memória e aprendizagem.'],
                ['🌱', 'Intervenção', 'Sessões individuais com estratégias específicas.'],
                ['👨‍👩‍👧', 'Orientação Familiar', 'Alinhamento de rotina entre casa e processo terapêutico.'],
              ].map(([icon, title, desc], i) => (
                <div key={title} className="servico-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="servico-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="section-cta reveal">
              <GlowButton href={WHATSAPP_URL} className="btn btn-coral btn-sm" target="_blank" rel="noopener noreferrer">
                Agendar avaliação
              </GlowButton>
            </div>
          </div>
        </section>

        <section id="publico" style={{ background: '#fff', paddingTop: 0 }}>
          <div className="container">
            <div className="head center">
              <span className="label">Público atendido</span>
              <h2>Para quem é esse cuidado</h2>
            </div>
            <div className="publico-grid">
              {[
                ['child_care', 'Crianças', 'Dificuldades de leitura, atenção e alfabetização.'],
                ['groups_2', 'Adolescentes', 'Organização de estudos e desempenho escolar.'],
                ['person', 'Adultos', 'Diagnóstico tardio e estratégias de produtividade.'],
                ['school', 'Escolas', 'Consultoria pedagógica para equipes de ensino.'],
              ].map(([icon, title, desc], i) => (
                <div key={title} className="publico-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="ic">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {icon}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessoSection />

        <section style={{ padding: '60px 0', background: 'var(--cream)' }}>
          <div className="container">
            <div className="cta-mid reveal">
              <div>
                <h3>Ainda com dúvidas sobre o processo?</h3>
                <p>Fale agora pelo WhatsApp — resposta em até 24h.</p>
              </div>
              <a href={WHATSAPP_URL} className="btn btn-dark btn-sm" target="_blank" rel="noopener noreferrer">
                Falar agora
              </a>
            </div>
          </div>
        </section>

        <GallerySection />

        <section className="cases" id="cases">
          <div className="container">
            <div className="head center">
              <span className="label">Cases</span>
              <h2>Famílias que já percorreram esse caminho</h2>
            </div>
            <div className="cases-grid">
              {cases.map((c, i) => (
                <div key={c.name} className="case-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <CaseVideo src={c.video} />
                  <div className="case-body">
                    <div className="case-stars">★★★★★</div>
                    <p>{c.quote}</p>
                    <div className="case-person">
                      <div className="case-avatar">{c.initials}</div>
                      <div>
                        <b>{c.name}</b>
                        <span>{c.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-cta reveal">
              <GlowButton href="#cta-final" className="btn btn-coral btn-sm">
                Quero o mesmo resultado
              </GlowButton>
            </div>
          </div>
        </section>

        <InvestimentoSection />

        <section id="faq" style={{ background: 'var(--cream)' }}>
          <div className="container">
            <div className="head center">
              <span className="label">Perguntas frequentes</span>
              <h2>Tire suas dúvidas</h2>
            </div>
            <div className="faq-list">
              {faqItems.map((item, i) => (
                <div key={item.question} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {item.question}
                    <div className="faq-icon" />
                  </button>
                  <div className="faq-a" style={{ maxHeight: openFaq === i ? 200 : 0 }}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaFinalSection />

        <ContactSection />
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">Caminhos do Desenvolvimento</div>
              <p style={{ fontSize: 13.5, maxWidth: 250 }}>
                Atendimento especializado em Neuropsicopedagogia, com ciência, clareza e acolhimento.
              </p>
            </div>
            <div>
              <h3>Navegação</h3>
              <ul>
                {navLinks.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`}>{label}</a>
                  </li>
                ))}
                <li><a href="#cases">Cases</a></li>
                <li><a href="#galeria">Galeria</a></li>
              </ul>
            </div>
            <div>
              <h3>Contato</h3>
              <ul>
                <li><a href={contactInfo.whatsapp.href} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href={contactInfo.email.href}>{contactInfo.email.address}</a></li>
                <li><a href={contactInfo.instagram.href} target="_blank" rel="noopener noreferrer">{contactInfo.instagram.handle}</a></li>
              </ul>
            </div>
            <div>
              <h3>Atendimento</h3>
              <ul>
                <li>{contactInfo.location.street}</li>
                <li>{contactInfo.location.city}</li>
                <li>{contactInfo.hours}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Caminhos do Desenvolvimento. Todos os direitos reservados.</span>
            <span>Neuropsicopedagogia Clínica</span>
          </div>
        </div>
      </footer>

      <div className={`fab-tooltip${fabTip ? ' show' : ''}`}>Fale comigo agora 👋</div>
      <a className="fab-whats" href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="Conversar pelo WhatsApp">
        <svg viewBox="0 0 24 24" fill="#fff">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.1-.45-4.38-1.23l-.31-.19-3.01.79.8-2.93-.2-.3A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.36-5.96c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
        </svg>
      </a>

      <div className={`exit-modal${exitOpen ? ' show' : ''}`} onClick={(e) => e.target === e.currentTarget && setExitOpen(false)}>
        <div className="exit-card">
          <button type="button" className="exit-close" aria-label="Fechar" onClick={() => setExitOpen(false)}>
            ✕
          </button>
          <h3>Antes de sair...</h3>
          <p>Que tal garantir sua avaliação antes que as vagas deste mês acabem? Leva menos de 1 minuto pelo WhatsApp.</p>
          <a href={WHATSAPP_URL} className="btn btn-coral" style={{ width: '100%', justifyContent: 'center' }} target="_blank" rel="noopener">
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>

      <div className={`proof-toast${proofVisible ? ' show' : ''}`}>
        <div className="stars">★★★★★</div>
        <p>
          <b>{proof.name}</b>
          <span>{proof.text}</span>
        </p>
      </div>
    </div>
  )
}
