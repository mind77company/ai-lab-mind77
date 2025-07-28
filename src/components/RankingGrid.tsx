import { CollaboratorCard } from "./CollaboratorCard";
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
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCollaborators.map((collaborator, index) => (
          <CollaboratorCard
            key={collaborator.id}
            collaborator={collaborator}
            rank={index + 1}
            isTopThree={index < 3}
          />
        ))}
      </div>
    </div>
  );
};