import type { BadgeTone } from "@/components/ui/Badge";

export interface Role {
  company: string;
  title: string;
  period: string;
  place: string;
  badge?: string;
  badgeTone: BadgeTone;
  color: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const roles: Role[] = [
  {
    company: "CRMBonus",
    title: "Product Manager Especialista",
    period: "out 2025 — o momento",
    place: "Tempo integral",
    badge: "Atual",
    badgeTone: "magenta",
    color: "var(--garimpa-magenta)",
    summary:
      "PM Spec da squad do Vale Bonus, app de benefícios e descontos para o cliente final — estratégia, priorização e refinamento das entregas.",
    highlights: [
      "Projetos em parceria com Vivo, Uber e iFood",
      "Uso frequente de Claude IA para automações, protótipos e skills",
      "Go-to-market com operações e marketing, testes A/B e experimentos",
    ],
    tags: ["Product Management", "Go-to-market", "IA aplicada"],
  },
  {
    company: "FIAP",
    title: "Professor Shift e Convidado — MBA",
    period: "fev 2020 — set 2026",
    place: "6 anos",
    badgeTone: "amber",
    color: "var(--accent-amber)",
    summary:
      "Criei e leciono as 19 horas do curso de Growth Hacking, além de atuar como professor convidado e mentor no MBA de Product Management & Growth Leadership.",
    highlights: [
      "Métricas, tração e Product Market Fit",
      "Experimentos e testes A/B na prática",
      "Discovery, delivery e escala de produtos digitais",
    ],
    tags: ["Ensino", "Growth Hacking", "Mentoria"],
  },
  {
    company: "Alura",
    title: "Gerente de Growth B2C",
    period: "nov 2024 — mai 2025",
    place: "7 meses",
    badgeTone: "magenta",
    color: "var(--garimpa-indigo)",
    summary: "Liderei 11 pessoas em quatro frentes de Growth B2C: influenciadores, dados, PMM e mídia paga.",
    highlights: [
      "Parcerias com influenciadores da prospecção ao impacto em aquisição",
      "Dashboards, análise de funil e definição de KPIs",
      "Campanhas de imersão e tráfego pago com foco em ROAS",
    ],
    tags: ["Liderança", "Mídia paga", "Dados"],
  },
  {
    company: "Advice",
    title: "Growth & Product Lead",
    period: "dez 2023 — nov 2024",
    place: "1 ano",
    badgeTone: "magenta",
    color: "var(--accent-cobalt)",
    summary:
      "Gestão de equipes focadas no crescimento de produtos digitais para farmacêutico, agro e outros mercados.",
    highlights: [
      "Métricas e validação de hipóteses",
      "Priorização de estratégias por cliente",
      "Product Marketing ponta a ponta",
    ],
    tags: ["Product Marketing", "Gestão", "Hipóteses"],
  },
  {
    company: "Zup Innovation",
    title: "Head de Produto e Experiência",
    period: "dez 2020 — mai 2023",
    place: "2 anos 6 meses",
    badge: "Liderando 116 zuppers",
    badgeTone: "cobalt",
    color: "var(--night-soft)",
    summary:
      "Head da tribo de cartões — 116 pessoas e quase 20 lideranças entre tech leads e POs apoiando squads da comunidade de cartões do Itaú.",
    highlights: [
      "Montagem de times a partir das demandas do cliente final",
      "OKRs, métricas e técnicas de priorização",
      "Growth com foco em go-to-market e conversão",
    ],
    tags: ["Head", "OKRs", "Experiência"],
  },
  {
    company: "Zup Innovation",
    title: "PMM / Growth Product Manager / DSM",
    period: "dez 2019 — dez 2020",
    place: "1 ano 1 mês",
    badgeTone: "cobalt",
    color: "var(--night-soft)",
    summary: "Gestão de pessoas e produtos com agendas de discovery e delivery em dual track agile.",
    highlights: [
      "Experimentos: testes A/B e deploy em círculos",
      "Tração com Bullseye Framework",
      "Dados e métricas AARRR",
    ],
    tags: ["Dual track", "AARRR", "Bullseye"],
  },
  {
    company: "Zup Innovation",
    title: "Product Growth / Consultor",
    period: "abr 2019 — dez 2019",
    place: "9 meses",
    badgeTone: "cobalt",
    color: "var(--night-soft)",
    summary:
      "Organização e operação de growth hacking e criação de times em clientes de banking e telecom, com foco na cultura de testes.",
    highlights: [
      "Processos e frameworks para tracionar de startups a big corps",
      "Crescimento holístico via AARRR",
      "Facilitação de workshops e cursos",
    ],
    tags: ["Consultoria", "Banking", "Workshops"],
  },
  {
    company: "Stefanini",
    title: "1st Growth Hacker",
    period: "mar 2018 — abr 2019",
    place: "São Paulo e Região",
    badge: "Pioneiro",
    badgeTone: "magenta",
    color: "var(--garimpa-indigo)",
    summary: "Primeiro growth hacker de uma multinacional com 25 mil colaboradores em mais de 40 países.",
    highlights: [
      "Estratégias de crescimento baseadas em experimentos e testes A/B",
      "Propostas de growth em mentoria, consultoria e projetos customizados",
      "Kick Off Técnico 2019 falando sobre T-Shaped e experimentos",
    ],
    tags: ["Growth Hacking", "T-Shaped", "Experimentos"],
  },
  {
    company: "Superlógica Tecnologias",
    title: "PMM / Growth Hacker",
    period: "ago 2016 — mar 2018",
    place: "Campinas e Região",
    badgeTone: "magenta",
    color: "var(--accent-cobalt)",
    summary: "Responsável pelas ações de crescimento da vertical de condomínios da Superlógica.",
    highlights: [
      "Foco em aquisição, ativação, retenção, receita e recomendação",
      "Landing pages com otimização de conversão",
      "E-mail marketing, conteúdo e lançamento de produtos",
    ],
    tags: ["SaaS", "CRO", "Lançamentos"],
  },
];
