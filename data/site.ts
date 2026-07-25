export const navigation = [
  ["Início", "/"],
  ["A Segbom", "/sobre"],
  ["Seguros", "/seguros"],
  ["Para empresas", "/seguros/empresarial"],
  ["Atendimento", "/atendimento"],
  ["Conteúdos", "/conteudos"],
] as const;

export const products = [
  {
    slug: "auto",
    eyebrow: "Mobilidade",
    title: "Seguro Auto",
    short: "Proteção para o seu veículo e tranquilidade para seguir viagem.",
    headline: "Seu carro protegido. Seu caminho mais tranquilo.",
    description:
      "Conte com orientação para comparar opções e escolher uma proteção compatível com seu veículo, seu perfil e sua rotina.",
    features: ["Colisão, roubo e furto", "Danos a terceiros", "Assistência 24 horas"],
  },
  {
    slug: "residencial",
    eyebrow: "Patrimônio",
    title: "Seguro Residencial",
    short: "Sua casa protegida e suporte para situações do dia a dia.",
    headline: "Proteção para a casa onde sua vida acontece.",
    description:
      "Avalie coberturas e assistências adequadas às características da sua residência, com contratação clara e orientada.",
    features: ["Incêndio e danos elétricos", "Assistências residenciais", "Coberturas adicionais"],
  },
  {
    slug: "vida",
    eyebrow: "Família",
    title: "Seguro de Vida",
    short: "Cuidado e planejamento para você e para quem faz parte da sua vida.",
    headline: "Cuidado que permanece presente quando mais importa.",
    description:
      "Conheça possibilidades de proteção financeira para diferentes fases, responsabilidades e objetivos.",
    features: ["Proteção financeira", "Soluções individuais e coletivas", "Assistências opcionais"],
  },
  {
    slug: "empresarial",
    eyebrow: "Negócios",
    title: "Seguro Empresarial",
    short: "Proteção para o patrimônio, a operação e o futuro da sua empresa.",
    headline: "Proteção para tudo o que mantém sua empresa em movimento.",
    description:
      "Identifique riscos e encontre soluções alinhadas à estrutura, ao segmento e à realidade da sua operação.",
    features: ["Instalações e equipamentos", "Responsabilidade civil", "Continuidade do negócio"],
  },
  {
    slug: "saude",
    eyebrow: "Bem-estar",
    title: "Planos de Saúde",
    short: "Orientação para comparar alternativas para você, sua família ou equipe.",
    headline: "Cuidado com a saúde começa com uma escolha bem orientada.",
    description:
      "Compare rede, abrangência, acomodação, coparticipação e demais condições com acompanhamento próximo.",
    features: ["Opções familiares", "Soluções empresariais", "Comparação orientada"],
  },
] as const;

export const differentials = [
  ["Atendimento personalizado", "Antes de recomendar, ouvimos e entendemos sua necessidade."],
  ["Clareza na contratação", "Explicamos as opções para ajudar você a decidir com segurança."],
  ["Agilidade nas respostas", "Simplificamos o processo e damos andamento rápido às solicitações."],
  ["Acompanhamento próximo", "Continuamos ao seu lado durante a vigência do seguro."],
] as const;
