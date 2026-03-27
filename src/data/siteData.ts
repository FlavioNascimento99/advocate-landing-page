import { BookOpen, Lightbulb, Users, TrendingUp, Award, Zap } from 'lucide-react'

export const siteData = {
  nav: {
    logo: 'Advocate',
    links: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Pilares', href: '#pilares' },
      { label: 'Recursos', href: '#recursos' },
      { label: 'Contato', href: '#contato' },
    ],
  },

  hero: {
    headline: 'Educação estratégica para líderes modernos',
    subtitle: 'Desenvolvemos conhecimento robusto que impulsiona decisões assertivas e transformação real nas organizações.',
    cta: {
      text: 'Começar agora',
      subtext: 'Acesso gratuito aos primeiros conteúdos',
    },
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },

  stats: [
    {
      number: '50K+',
      label: 'Profissionais impactados',
      description: 'Líderes e especialistas de empresas Fortune 500',
    },
    {
      number: '100+',
      label: 'Conteúdos premium',
      description: 'Artigos, videoaulas e masterclasses exclusivas',
    },
    {
      number: '98%',
      label: 'Taxa de satisfação',
      description: 'Recomendação e NPS acima da média do setor',
    },
    {
      number: '24h',
      label: 'Suporte dedicado',
      description: 'Time especializado pronto para ajudar',
    },
  ],

  pillars: [
    {
      id: 1,
      title: 'Educação Contínua',
      description: 'Aprendizado estruturado e progressivo que acompanha sua evolução profissional. Conteúdo atualizado mensalmente com as últimas tendências do mercado.',
      icon: BookOpen,
      color: 'from-blue-50 to-blue-100',
    },
    {
      id: 2,
      title: 'Inovação Estratégica',
      description: 'Metodologias comprovadas para implementar mudanças transformadoras. Frameworks práticos que convertam ideias em resultados mensuráveis.',
      icon: Lightbulb,
      color: 'from-yellow-50 to-yellow-100',
    },
    {
      id: 3,
      title: 'Comunidade de Impacto',
      description: 'Rede exclusiva de profissionais de alto desempenho. Conexões que geram oportunidades, parcerias e crescimento exponencial.',
      icon: Users,
      color: 'from-purple-50 to-purple-100',
    },
  ],

  resources: [
    {
      id: 1,
      title: 'Guia Executivo: Transformação Digital',
      description: 'Roadmap completo para modernizar processos e ferramentas organizacionais.',
      icon: Award,
      category: 'Guia',
    },
    {
      id: 2,
      title: 'Webinar: Liderança em Tempos de Incerteza',
      description: 'Especialistas compartilham insights sobre resiliência e adaptabilidade.',
      icon: TrendingUp,
      category: 'Webinar',
    },
    {
      id: 3,
      title: 'Masterclass: Estratégia de Crescimento',
      description: 'Aula prática com case studies de empresas que escalaram 10x.',
      icon: Zap,
      category: 'Masterclass',
    },
    {
      id: 4,
      title: 'Análise: Tendências de Mercado 2024',
      description: 'Relatório detalhado com dados, projeções e oportunidades.',
      icon: TrendingUp,
      category: 'Relatório',
    },
    {
      id: 5,
      title: 'Toolkit: Matriz de Decisão Estratégica',
      description: 'Ferramentas prontas para usar em suas reuniões de planejamento.',
      icon: BookOpen,
      category: 'Toolkit',
    },
    {
      id: 6,
      title: 'Podcast: Conversas com Líderes',
      description: 'Episódios semanais com CEOs e especialistas renomados.',
      icon: Lightbulb,
      category: 'Podcast',
    },
  ],

  cta: {
    headline: 'Pronto para elevar seu conhecimento?',
    description: 'Junte-se a milhares de profissionais que transformaram suas carreiras com nosso conteúdo estratégico.',
    button: 'Acessar plataforma',
  },

  footer: {
    description: 'Educação estratégica para líderes que querem deixar legado duradouro.',
    sections: [
      {
        title: 'Produto',
        links: ['Conteúdo', 'Comunidade', 'Certificados', 'Preços'],
      },
      {
        title: 'Empresa',
        links: ['Sobre nós', 'Blog', 'Carreiras', 'Imprensa'],
      },
      {
        title: 'Legal',
        links: ['Privacidade', 'Termos', 'Segurança', 'Conformidade'],
      },
    ],
    social: [
      { name: 'LinkedIn', url: '#' },
      { name: 'Twitter', url: '#' },
      { name: 'Instagram', url: '#' },
    ],
    developer: [
      { name: 'Desenvolvido por Flavio Nascimento', url: 'nascimentohub.netlify.app'},
    ]
  },
}
