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
    
    // 3D Hierarchical positioning with real depth
    let radius = 380; // Default distance from center
    let zOffset = 0;
    let scale = 1;
    let rotationY = 0;
    
    if (index === 0) { // Rank #1 - Supreme position (elevated, larger, centered)
      radius = 300;
      zOffset = 120;
      scale = 1.2;
      rotationY = 0;
    } else if (index <= 2) { // Rank #2 & #3 - Distinguished positions
      radius = 350;
      zOffset = 80;
      scale = 1.1;
      rotationY = index === 1 ? -15 : 15;
    } else { // Remaining ranks - Standard circle with depth variation
      zOffset = 40 - (index * 5); // Gradual depth decrease
      rotationY = (angle > 180 ? -10 : 10); // Slight inward rotation
    }
    
    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
    return { x, y, angle, zOffset, scale, rotationY };
  };

  return (
    <div className="circular-table-container relative w-full h-full flex items-center justify-center min-h-[900px]">
      {/* Central Table with 3D Depth */}
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

      {/* 3D Ambient Energy Particles */}
      <div className="energy-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="energy-particle"
            style={{
              animationDelay: `${i * 0.3}s`,
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};