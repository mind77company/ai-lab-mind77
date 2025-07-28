export const mockCollaborators = [
  {
    id: "1",
    name: "Ana Silva",
    codename: "neural_ana",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 12580,
    level: 8,
    xpToNextLevel: 1420,
    maxXpCurrentLevel: 2000,
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
    codename: "code_carlos",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 11340,
    level: 7,
    xpToNextLevel: 660,
    maxXpCurrentLevel: 2000,
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
    codename: "design_marina",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 10890,
    level: 7,
    xpToNextLevel: 1110,
    maxXpCurrentLevel: 2000,
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
    codename: "data_lucas",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 9750,
    level: 6,
    xpToNextLevel: 750,
    maxXpCurrentLevel: 1500,
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
    codename: "product_fer",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 8920,
    level: 6,
    xpToNextLevel: 580,
    maxXpCurrentLevel: 1500,
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
    codename: "mobile_rafa",
    avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
    xp: 7650,
    level: 5,
    xpToNextLevel: 350,
    maxXpCurrentLevel: 1000,
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