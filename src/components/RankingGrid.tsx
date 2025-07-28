import { CircularTable } from "./CircularTable";
import { AddColaboradorForm } from "./AddColaboradorForm";
import { SeedDataButton } from "./SeedDataButton";
import { useColaboradores } from "@/hooks/useColaboradores";
import { useMemo } from "react";

interface RankingGridProps {
  period: string;
  team: string;
}

export const RankingGrid = ({ period, team }: RankingGridProps) => {
  const { colaboradores, loading } = useColaboradores();

  // Filter and sort collaborators based on period and team
  const filteredCollaborators = useMemo(() => {
    return colaboradores
      .filter(collab => team === "Todas" || collab.team === team)
      .sort((a, b) => b.xp - a.xp);
  }, [colaboradores, team]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-cyan font-mono">Carregando colaboradores...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      {/* Botões de ação */}
      <div className="absolute top-4 right-4 z-30 flex gap-2">
        <SeedDataButton />
        <AddColaboradorForm />
      </div>
      
      <CircularTable collaborators={filteredCollaborators} />
    </div>
  );
};