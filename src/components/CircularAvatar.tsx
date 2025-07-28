import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Collaborator {
  id: string;
  name: string;
  codename: string;
  avatar: string;
  level: number;
}

interface Position {
  x: number;
  y: number;
  angle: number;
  zOffset?: number;
  scale?: number;
  rotationY?: number;
}

interface CircularAvatarProps {
  collaborator: Collaborator;
  rank: number;
  mainSkill: string;
  position: Position;
}

export const CircularAvatar = ({ collaborator, rank, mainSkill, position }: CircularAvatarProps) => {
  const isTopThree = rank <= 3;
  
  const getRankStyle = () => {
    if (rank === 1) return "rank-gold";
    if (rank === 2) return "rank-silver";
    if (rank === 3) return "rank-bronze";
    return "rank-default";
  };

  const getRankColor = () => {
    if (rank === 1) return "text-yellow-400";
    if (rank === 2) return "text-gray-300";
    if (rank === 3) return "text-amber-600";
    return "text-cyan";
  };

  return (
    <div
      className={`circular-avatar-container ${getRankStyle()}`}
      style={{
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) translateZ(${position.zOffset || 0}px) scale(${position.scale || 1}) rotateY(${position.rotationY || 0}deg)`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        '--x': `${position.x}px`,
        '--y': `${position.y}px`,
      } as React.CSSProperties}
    >
      {/* Holographic Panel */}
      <div className="holo-panel">
        {/* Rank Indicator */}
        <div className={`rank-indicator ${getRankColor()}`}>
          #{rank}
        </div>

        {/* Avatar with Neural Glow */}
        <div className="avatar-container">
          <div className={`avatar-glow ${isTopThree ? 'top-three-glow' : ''}`}>
            <Avatar className="w-20 h-20 border-2 border-cyan neural-avatar">
              <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
              <AvatarFallback className="bg-cyan/20 text-cyan text-lg font-bold">
                {collaborator.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
          
          {/* Energy Pulse Ring */}
          <div className="energy-pulse-ring"></div>
        </div>

        {/* Name */}
        <div className="collaborator-name">
          {collaborator.name}
        </div>

        {/* Main Skill */}
        <div className="main-skill">
          {mainSkill}
        </div>

        {/* Level Display */}
        <div className="level-display">
          <span className="level-label">LVL</span>
          <span className={`level-number ${getRankColor()}`}>
            {collaborator.level}
          </span>
        </div>

        {/* Status Indicators */}
        <div className="status-indicators">
          <div className="status-dot active"></div>
          <div className="status-dot"></div>
          <div className="status-dot"></div>
        </div>
      </div>

      {/* Connection Node */}
      <div className="connection-node"></div>
    </div>
  );
};