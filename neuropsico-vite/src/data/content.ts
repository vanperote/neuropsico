export const WHATSAPP_URL =
  'https://wa.me/5548999990000?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

export const contactInfo = {
  whatsapp: {
    label: 'WhatsApp',
    tag: 'Canal preferencial',
    description: 'Agende, tire dúvidas ou fale com a equipe em tempo real.',
    href: 'https://wa.me/5548999990000',
    cta: 'Iniciar conversa',
  },
  instagram: {
    label: 'Instagram',
    tag: 'Conteúdo',
    description: 'Dicas sobre aprendizagem, desenvolvimento e rotina escolar.',
    handle: '@caminhosdodesenvolvimento',
    href: 'https://instagram.com/caminhosdodesenvolvimento',
  },
  email: {
    label: 'E-mail',
    tag: 'Formal',
    description: 'Para documentos, laudos e comunicações institucionais.',
    address: 'contato@caminhosdodesenvolvimento.com.br',
    href: 'mailto:contato@caminhosdodesenvolvimento.com.br',
  },
  location: {
    title: 'Consultório Caminhos do Desenvolvimento',
    street: 'Rua das Acácias, 120 — Sala 304',
    city: 'Boa Vista, RR',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+das+Acácias+120+Boa+Vista+RR',
    embedUrl:
      'https://maps.google.com/maps?q=Rua+das+Ac%C3%A1cias+120+Boa+Vista+RR&output=embed',
  },
  hours: 'Segunda a sexta, 8h às 18h',
  responseTime: 'Resposta em até 24h',
}

export const resultados = {
  label: 'Resultados',
  title: 'Números que sustentam a promessa',
  subtitle:
    'Indicadores consolidados de uma prática clínica construída com rigor científico, escuta qualificada e acompanhamento contínuo das famílias.',
  footnote: 'Dados baseados em atendimentos clínicos documentados',
  metrics: [
    {
      target: 500,
      suffix: '+',
      label: 'Avaliações concluídas',
      description: 'Processos completos com devolutiva estruturada',
      icon: 'clipboard' as const,
    },
    {
      target: 127,
      suffix: '',
      label: 'Avaliações 5 estrelas',
      description: 'Feedback positivo registrado pelas famílias',
      icon: 'star' as const,
    },
    {
      target: 12,
      suffix: '',
      label: 'Anos de atuação clínica',
      description: 'Experiência contínua em neuropsicopedagogia',
      icon: 'award' as const,
    },
    {
      target: 98,
      suffix: '%',
      label: 'Famílias satisfeitas',
      description: 'Taxa de satisfação reportada no acompanhamento',
      icon: 'heart' as const,
    },
  ],
}

export const marqueeItems = [
  'Colégio Horizonte',
  'Instituto Aprender+',
  'Rede Educacional Sul',
  'Associação Brasileira de Psicopedagogia',
  '+500 famílias atendidas',
]

export const galleryItems = [
  {
    id: 'sala',
    image: '/assets/sala-de-avaliacao.jpg',
    title: 'Sala de avaliação',
    alt: 'Sala de atendimento e avaliação neuropsicopedagógica',
  },
  {
    id: 'recepcao',
    image: '/assets/recepcao.jpg',
    title: 'Recepção',
    alt: 'Recepção acolhedora do consultório',
  },
  {
    id: 'materiais',
    image: '/assets/materiais-usados.jpg',
    title: 'Materiais utilizados',
    alt: 'Materiais utilizados nas avaliações',
  },
  {
    id: 'infantil',
    image: '/assets/espaco-infantil.jpg',
    title: 'Espaço infantil',
    alt: 'Espaço infantil preparado para atendimento',
  },
]

export const faqItems = [
  {
    question: 'Qual a diferença entre psicopedagogia e neuropsicopedagogia?',
    answer:
      'A neuropsicopedagogia une psicopedagogia e neurociência para entender com profundidade como o cérebro processa a aprendizagem.',
  },
  {
    question: 'Quanto tempo dura uma avaliação completa?',
    answer:
      'Em média de 4 a 6 sessões, incluindo anamnese, aplicação de instrumentos e devolutiva detalhada.',
  },
  {
    question: 'O atendimento é só para crianças?',
    answer: 'Não. Atendemos crianças, adolescentes e adultos.',
  },
  {
    question: 'Como funciona a parceria com a escola?',
    answer:
      'Com autorização da família, orientações são compartilhadas com a equipe pedagógica.',
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'Pix, cartão de crédito em até 3x e transferência bancária.',
  },
]

export const cases = [
  {
    video: '/assets/1109211_1080p_4k_3840x2160.mp4',
    quote: '"A avaliação trouxe clareza que faltava há anos."',
    name: 'Mariana F.',
    role: 'Mãe de paciente',
    initials: 'MF',
  },
  {
    video: '/assets/1473262_People_Family_3840x2160.mp4',
    quote: '"Profissionalismo e acolhimento na mesma medida."',
    name: 'Rodrigo T.',
    role: 'Pai de paciente',
    initials: 'RT',
  },
  {
    video: '/assets/5741629_Coll_wavebreak_People_3840x2160.mp4',
    quote: '"A consultoria escolar deu ferramentas concretas."',
    name: 'Carla L.',
    role: 'Coordenadora pedagógica',
    initials: 'CL',
  },
]

export const pricingPackage = {
  label: 'Investimento',
  title: 'Pacote completo de avaliação',
  subtitle:
    'Diagnóstico profundo, devolutiva clara e plano individual — com acompanhamento próximo em cada etapa.',
  tag: 'Mais escolhido',
  name: 'Pacote completo',
  marketPrice: 1450,
  price: 990,
  installment: 'à vista ou em até 3x sem juros',
  features: [
    'Anamnese completa com a família',
    '4 a 6 sessões de avaliação',
    'Devolutiva detalhada por escrito',
    'Plano de intervenção individual',
    '1ª sessão de orientação familiar inclusa',
  ],
  cta: 'Garantir minha avaliação',
  ctaHref: '#cta-final',
  note: '* Valores ilustrativos — ajuste conforme a tabela real antes de publicar.',
  highlights: ['Laudo completo', 'Plano personalizado', 'Suporte contínuo'],
}

export const proofs = cases.map((c) => ({ name: c.name, text: c.quote }))

export const ctaFinal = {
  label: 'Comece agora',
  title: 'Dê o primeiro passo em direção a um aprendizado mais leve',
  lead: 'Agende sua avaliação e descubra, com clareza, como a neuropsicopedagogia pode transformar a relação da sua família com o aprender.',
  scarcity: 'Poucas vagas neste mês',
  cardTitle: 'Agende sua avaliação',
  cardSubtitle: 'Leva menos de 1 minuto pelo WhatsApp',
  cta: 'Agendar minha avaliação',
  secondaryCta: 'Prefere outro canal?',
  secondaryHref: '#contato',
  includes: [
    'Conversa inicial sem compromisso',
    'Orientação sobre o processo completo',
    'Retorno em até 24 horas úteis',
  ],
  steps: [
    { num: '01', title: 'Primeiro contato', desc: 'Conte sua história e entenda como podemos ajudar.' },
    { num: '02', title: 'Avaliação', desc: 'Mapeamento personalizado do perfil de aprendizagem.' },
    { num: '03', title: 'Plano claro', desc: 'Devolutiva detalhada e caminho definido para a família.' },
  ],
  trust: ['Sem compromisso', 'Resposta em 24h', 'Atendimento humanizado'],
  metrics: [
    { value: '500+', label: 'famílias atendidas' },
    { value: '98%', label: 'de satisfação' },
    { value: '12', label: 'anos de prática' },
  ],
}
