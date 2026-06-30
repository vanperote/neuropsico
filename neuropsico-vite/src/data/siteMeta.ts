export const siteMeta = {
  siteUrl: 'https://www.caminhosdodesenvolvimento.com.br',
  name: 'Caminhos do Desenvolvimento',
  tagline: 'Neuropsicopedagogia Clínica',
  description:
    'A avaliação neuropsicopedagógica que transforma a relação da sua família com o aprender. Diagnóstico preciso, plano individual e acompanhamento contínuo em Boa Vista, RR.',
  locale: 'pt_BR',
  phoneDisplay: '(98) 99999-0000',
  phoneRaw: '5548999990000',
  email: 'contato@caminhosdodesenvolvimento.com.br',
  instagram: 'https://instagram.com/caminhosdodesenvolvimento',
  instagramHandle: '@caminhosdodesenvolvimento',
  ogImagePath: '/assets/andreza.jpg',
  whatsappMessage: 'Olá! Gostaria de agendar uma avaliação.',
  professional: {
    name: 'Andreza Mississipe',
    honorific: 'Dra.',
    fullName: 'Dra. Andreza Mississipe',
    jobTitle: 'Neuropsicopedagoga Clínica',
    imagePath: '/assets/andreza.jpg',
  },
  address: {
    street: 'Rua das Acácias, 120 — Sala 304',
    city: 'Boa Vista',
    region: 'RR',
    postalCode: '69301-000',
    country: 'BR',
  },
  geo: {
    latitude: 2.82384,
    longitude: -60.67525,
  },
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  priceRange: '$$',
  serviceType: 'Avaliação Neuropsicopedagógica',
} as const

export function absoluteUrl(path: string) {
  return `${siteMeta.siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}
