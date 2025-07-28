import { CircularAvatar } from "./CircularAvatar";

interface Collaborator {
  id: string;
  name: string;
  codename: string;
  avatar: string;
  xp: number;
  level: number;
  team: string;
  badges: Array<{
    type: "mvp" | "cultura" | "tecnico" | "crescimento";
    label: string;
  }>;
}

interface CircularTableProps {
  collaborators: Collaborator[];
}

export const CircularTable = ({ collaborators }: CircularTableProps) => {
  const topCollaborators = collaborators.slice(0, 8); // Limit to 8 for circular layout
  
  const getCircularPosition = (index: number, total: number) => {
    const angle = (360 / total) * index;
    
    // Different positioning for rank hierarchy
    let radius = 350; // Default distance from center
    let zOffset = 0;
    
    if (index === 0) { // Rank #1 - Supreme position (elevated and centered front)
      radius = 320;
      zOffset = 20;
    } else if (index <= 2) { // Rank #2 & #3 - Distinguished lateral positions
      radius = 340;
      zOffset = 10;
    }
    
    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
    return { x, y, angle, zOffset };
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[800px]">
      {/* Central Table */}
      <div className="circular-table-base">
        <div className="circular-table-surface">
          <div className="table-center-orb">
            <div className="neural-circuits"></div>
            <div className="energy-core"></div>
          </div>
          
          {/* Circular Grid Pattern */}
          <div className="table-grid-pattern"></div>
          
          {/* Rotating Energy Ring */}
          <div className="energy-ring-outer"></div>
          <div className="energy-ring-inner"></div>
        </div>
      </div>

      {/* Neural Connections */}
      <div className="neural-connections">
        {topCollaborators.map((_, index) => {
          const position = getCircularPosition(index, topCollaborators.length);
          return (
            <div
              key={`connection-${index}`}
              className="neural-beam"
              style={{
                transform: `rotate(${position.angle}deg)`,
                transformOrigin: 'center',
              }}
            />
          );
        })}
      </div>

      {/* Collaborator Avatars */}
      {topCollaborators.map((collaborator, index) => {
        const position = getCircularPosition(index, topCollaborators.length);
        const mainSkill = collaborator.badges[0]?.label || "Neural Link";
        
        return (
          <CircularAvatar
            key={collaborator.id}
            collaborator={collaborator}
            rank={index + 1}
            mainSkill={mainSkill}
            position={position}
          />
        );
      })}

      {/* Ambient Energy Particles */}
      <div className="energy-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="energy-particle"
            style={{
              animationDelay: `${i * 0.2}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};