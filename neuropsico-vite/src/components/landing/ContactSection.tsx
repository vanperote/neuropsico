import { ArrowUpRight, Clock, Mail, MapPin, Navigation, Zap } from 'lucide-react'
import { contactInfo, WHATSAPP_URL } from '@/data/content'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.1-.45-4.38-1.23l-.31-.19-3.01.79.8-2.93-.2-.3A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.36-5.96c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ContactSection() {
  const { whatsapp, instagram, email, location, hours, responseTime } = contactInfo

  return (
    <section className="contato" id="contato" aria-labelledby="contato-heading">
      <div className="contato-bg" aria-hidden="true">
        <div className="contato-orb contato-orb-a" />
        <div className="contato-orb contato-orb-b" />
      </div>

      <div className="container contato-shell">
        <div className="contato-top">
          <div className="contato-intro reveal">
            <span className="label">Contato</span>
            <h2 id="contato-heading">Fale com a gente</h2>
            <p className="contato-lead">
              Escolha o canal que preferir. Estamos prontos para ouvir sua família e orientar os próximos passos com
              clareza.
            </p>
            <div className="contato-trust" role="list" aria-label="Informações de atendimento">
              <div className="contato-trust-item" role="listitem">
                <Clock size={16} strokeWidth={2} aria-hidden="true" />
                <span>{hours}</span>
              </div>
              <div className="contato-trust-item" role="listitem">
                <Zap size={16} strokeWidth={2} aria-hidden="true" />
                <span>{responseTime}</span>
              </div>
            </div>
          </div>

          <div className="contato-bento">
            <a
              className="contato-primary reveal"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${whatsapp.label} — ${whatsapp.cta}`}
            >
              <div className="contato-primary-glow" aria-hidden="true" />
              <div className="contato-primary-icon">
                <WhatsAppIcon className="contato-wa-icon" />
              </div>
              <div className="contato-primary-body">
                <span className="contato-tag contato-tag-primary">{whatsapp.tag}</span>
                <h3>{whatsapp.label}</h3>
                <p>{whatsapp.description}</p>
                <span className="contato-cta">
                  {whatsapp.cta}
                  <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </span>
              </div>
            </a>

            <a
              className="contato-channel reveal"
              style={{ transitionDelay: '.05s' }}
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contato-channel-icon contato-channel-icon-ig">
                <InstagramIcon className="contato-ig-icon" />
              </div>
              <div className="contato-channel-body">
                <span className="contato-tag">{instagram.tag}</span>
                <h3>{instagram.label}</h3>
                <p>{instagram.description}</p>
                <span className="contato-handle">{instagram.handle}</span>
              </div>
              <ArrowUpRight className="contato-channel-arrow" size={18} strokeWidth={2} aria-hidden="true" />
            </a>

            <a
              className="contato-channel reveal"
              style={{ transitionDelay: '.1s' }}
              href={email.href}
            >
              <div className="contato-channel-icon contato-channel-icon-mail">
                <Mail size={22} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div className="contato-channel-body">
                <span className="contato-tag">{email.tag}</span>
                <h3>{email.label}</h3>
                <p>{email.description}</p>
                <span className="contato-handle">{email.address}</span>
              </div>
              <ArrowUpRight className="contato-channel-arrow" size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="contato-location reveal" style={{ transitionDelay: '.12s' }}>
          <div className="contato-map-wrap">
            <iframe
              title="Localização do consultório em Boa Vista"
              src={location.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="contato-map-frame"
            />
            <div className="contato-map-overlay" aria-hidden="true" />
          </div>

          <div className="contato-location-panel">
            <div className="contato-location-pin">
              <MapPin size={22} strokeWidth={2} aria-hidden="true" />
            </div>
            <div>
              <span className="label">Onde estamos</span>
              <h3>{location.title}</h3>
              <address className="contato-address">
                {location.street}
                <br />
                {location.city}
              </address>
            </div>
            <a
              className="contato-maps-btn"
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={16} strokeWidth={2} aria-hidden="true" />
              Como chegar
              <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
