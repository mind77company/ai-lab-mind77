import { CircularTable } from "./CircularTable";
import { mockCollaborators } from "@/data/mockData";

interface RankingGridProps {
  period: string;
  team: string;
}

export const RankingGrid = ({ period, team }: RankingGridProps) => {
  // Filter and sort collaborators based on period and team
  const filteredCollaborators = mockCollaborators
    .filter(collab => team === "Todas" || collab.team === team)
    .sort((a, b) => b.xp - a.xp);

  return (
    <div className="w-full h-full">
      <CircularTable collaborators={filteredCollaborators} />
    </div>
  );
};