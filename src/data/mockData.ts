export const mockCollaborators = [
  {
    id: "1",
    name: "Ana Silva",
    codename: "NEURAL_ANA",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 12580,
    level: 8,
    xpToNextLevel: 1420,
    maxXpCurrentLevel: 2000,
    maxXp: 15000,
    status: "online" as const,
    weeklyGrowth: "+2340 XP",
    efficiency: 98,
    projects: 12,
    team: "Frontend",
    badges: [
      { type: "mvp" as const, label: "MVP" },
      { type: "cultura" as const, label: "Cultura Viva" }
    ],
    evolutionDetails: [
      "+5 feedbacks positivos",
      "1 curso finalizado",
      "3 mentorias realizadas"
    ],
    isWeeklyGrowthLeader: true
  },
  {
    id: "2",
    name: "Carlos Santos",
    codename: "CODE_CARLOS",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 11340,
    level: 7,
    xpToNextLevel: 660,
    maxXpCurrentLevel: 2000,
    maxXp: 14000,
    status: "online" as const,
    weeklyGrowth: "+1890 XP",
    efficiency: 94,
    projects: 8,
    team: "Backend",
    badges: [
      { type: "tecnico" as const, label: "Técnico" },
      { type: "crescimento" as const, label: "Evolução Rápida" }
    ],
    evolutionDetails: [
      "+8 pull requests aprovados",
      "2 bugs críticos resolvidos",
      "1 apresentação técnica"
    ]
  },
  {
    id: "3",
    name: "Marina Costa",
    codename: "DESIGN_MARINA",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 10890,
    level: 7,
    xpToNextLevel: 1110,
    maxXpCurrentLevel: 2000,
    maxXp: 13500,
    status: "away" as const,
    weeklyGrowth: "+1650 XP",
    efficiency: 96,
    projects: 10,
    team: "Design",
    badges: [
      { type: "cultura" as const, label: "Cultura Viva" },
      { type: "mvp" as const, label: "MVP" }
    ],
    evolutionDetails: [
      "+4 protótipos aprovados",
      "2 workshops ministrados",
      "1 certificação obtida"
    ]
  },
  {
    id: "4",
    name: "Lucas Oliveira",
    codename: "DATA_LUCAS",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 9750,
    level: 6,
    xpToNextLevel: 750,
    maxXpCurrentLevel: 1500,
    maxXp: 12000,
    status: "online" as const,
    weeklyGrowth: "+1420 XP",
    efficiency: 92,
    projects: 6,
    team: "Backend",
    badges: [
      { type: "tecnico" as const, label: "Técnico" }
    ],
    evolutionDetails: [
      "+3 otimizações de performance",
      "1 API documentada",
      "2 code reviews realizados"
    ]
  },
  {
    id: "5",
    name: "Fernanda Lima",
    codename: "PRODUCT_FER",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 8920,
    level: 6,
    xpToNextLevel: 580,
    maxXpCurrentLevel: 1500,
    maxXp: 11500,
    status: "offline" as const,
    weeklyGrowth: "+1180 XP",
    efficiency: 89,
    projects: 7,
    team: "Produto",
    badges: [
      { type: "crescimento" as const, label: "Evolução Rápida" }
    ],
    evolutionDetails: [
      "+6 features especificadas",
      "3 user stories criadas",
      "1 pesquisa de usuário"
    ]
  },
  {
    id: "6",
    name: "Rafael Souza",
    codename: "MOBILE_RAFA",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 7650,
    level: 5,
    xpToNextLevel: 350,
    maxXpCurrentLevel: 1000,
    maxXp: 10500,
    status: "online" as const,
    weeklyGrowth: "+980 XP",
    efficiency: 87,
    projects: 5,
    team: "Frontend",
    badges: [
      { type: "tecnico" as const, label: "Técnico" }
    ],
    evolutionDetails: [
      "+4 componentes criados",
      "2 testes implementados",
      "1 refatoração importante"
    ]
  }
];