export const WHATSAPP_URL =
  'https://wa.me/5548999990000?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

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

export const proofs = cases.map((c) => ({ name: c.name, text: c.quote }))
