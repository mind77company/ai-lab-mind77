import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useColaboradores } from '@/hooks/useColaboradores';
import { Database } from 'lucide-react';

export const SeedDataButton = () => {
  const [loading, setLoading] = useState(false);
  const { addColaborador } = useColaboradores();

  const seedData = [
    {
      name: "Ana Silva",
      codename: "NEURAL_ANA",
      avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
      xp: 12580,
      level: 8,
      team: "Frontend",
      status: "online" as const,
      weekly_growth: "+2340 XP",
      efficiency: 98,
      projects: 12,
      max_xp: 15000,
      xp_to_next_level: 1420,
      max_xp_current_level: 2000,
      badges: [
        { type: "mvp" as const, label: "MVP" },
        { type: "cultura" as const, label: "Cultura Viva" }
      ],
      evolution_details: [
        "+5 feedbacks positivos",
        "1 curso finalizado",
        "3 mentorias realizadas"
      ],
      is_weekly_growth_leader: true
    },
    {
      name: "Carlos Santos",
      codename: "CODE_CARLOS",
      avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
      xp: 11340,
      level: 7,
      team: "Backend",
      status: "online" as const,
      weekly_growth: "+1890 XP",
      efficiency: 94,
      projects: 8,
      max_xp: 14000,
      xp_to_next_level: 660,
      max_xp_current_level: 2000,
      badges: [
        { type: "tecnico" as const, label: "Técnico" },
        { type: "crescimento" as const, label: "Evolução Rápida" }
      ],
      evolution_details: [
        "+8 pull requests aprovados",
        "2 bugs críticos resolvidos",
        "1 apresentação técnica"
      ],
      is_weekly_growth_leader: false
    },
    {
      name: "Marina Costa",
      codename: "DESIGN_MARINA",
      avatar: "/public/lovable-uploads/9abd9071-8149-4750-b26b-5451024d2cf7.png",
      xp: 10890,
      level: 7,
      team: "Design",
      status: "away" as const,
      weekly_growth: "+1650 XP",
      efficiency: 96,
      projects: 10,
      max_xp: 13500,
      xp_to_next_level: 1110,
      max_xp_current_level: 2000,
      badges: [
        { type: "cultura" as const, label: "Cultura Viva" },
        { type: "mvp" as const, label: "MVP" }
      ],
      evolution_details: [
        "+4 protótipos aprovados",
        "2 workshops ministrados",
        "1 certificação obtida"
      ],
      is_weekly_growth_leader: false
    }
  ];

  const handleSeedData = async () => {
    setLoading(true);
    try {
      for (const colaborador of seedData) {
        await addColaborador(colaborador);
      }
    } catch (error) {
      console.error('Erro ao popular dados:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleSeedData} 
      disabled={loading}
      variant="outline"
      className="bg-blue/10 border-blue/30 text-blue hover:bg-blue/20"
    >
      <Database className="w-4 h-4 mr-2" />
      {loading ? 'Populando...' : 'Popular Dados de Teste'}
    </Button>
  );
};