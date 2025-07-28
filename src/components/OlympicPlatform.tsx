import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Collaborator {
  id: string;
  name: string;
  codename: string;
  avatar: string | null;
  xp: number;
  level: number;
  team: string | null;
  max_xp: number;
  status: "online" | "away" | "offline";
  weekly_growth: string;
  efficiency: number;
  projects: number;
  badges: Array<{
    type: "mvp" | "cultura" | "tecnico" | "crescimento";
    label: string;
  }>;
  evolution_details?: string[];
  is_weekly_growth_leader?: boolean;
}

interface OlympicPlatformProps {
  collaborator: Collaborator;
  rank: number;
  height: number;
  delay: number;
}

export const OlympicPlatform = ({ collaborator, rank, height, delay }: OlympicPlatformProps) => {
  const getRankIcon = () => {
    switch(rank) {
      case 1: return "👑";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return "⚡";
    }
  };

  const getRankColor = () => {
    switch(rank) {
      case 1: return "border-[#ffd700] shadow-[0_0_30px_rgba(255,215,0,0.6)]";
      case 2: return "border-[#c0c0c0] shadow-[0_0_25px_rgba(192,192,192,0.5)]";
      case 3: return "border-[#cd7f32] shadow-[0_0_20px_rgba(205,127,50,0.4)]";
      default: return "border-cyan shadow-[0_0_15px_rgba(0,255,255,0.3)]";
    }
  };

  const getStatusColor = () => {
    switch(collaborator.status) {
      case "online": return "bg-green-400";
      case "away": return "bg-yellow-400";
      case "offline": return "bg-gray-400";
    }
  };

  const xpProgress = (collaborator.xp / collaborator.max_xp) * 100;

  return (
    <div 
      className={`olympic-platform group relative animate-fade-in`}
      style={{ 
        height: `${height}px`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Platform Base */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gradient-to-r from-cyan/20 via-cyan/40 to-cyan/20 rounded-full platform-glow"></div>
      
      {/* Neural Connections */}
      <div className="neural-connections absolute bottom-6 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-t from-cyan/60 via-cyan/30 to-transparent"></div>
      
      {/* Platform Surface */}
      <div className={`platform-surface absolute bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-80 ${getRankColor()} border-2 rounded-lg backdrop-blur-md bg-black/20 transition-all duration-400 hover:scale-105 hover:-translate-y-2`}>
        
        {/* Rank Badge */}
        <div className="absolute -top-4 left-4 w-8 h-8 bg-black/80 rounded-full flex items-center justify-center text-lg border border-cyan">
          {getRankIcon()}
        </div>

        {/* Status Beacon */}
        <div className={`absolute -top-2 right-4 w-3 h-3 ${getStatusColor()} rounded-full animate-pulse`}></div>

        <div className="p-6 h-full flex flex-col">
          {/* Avatar with Energy Rings */}
          <div className="champion-avatar relative mb-4 self-center">
            <div className="energy-rings absolute inset-0">
              <div className="absolute inset-0 border-2 border-cyan/40 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 border border-cyan/20 rounded-full animate-spin-reverse"></div>
            </div>
            <Avatar className="w-20 h-20 border-2 border-cyan relative z-10">
              <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
              <AvatarFallback className="bg-cyan/20 text-cyan text-lg font-bold">
                {collaborator.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Info */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-white mb-1">{collaborator.name}</h3>
            <p className="text-sm text-cyan font-mono uppercase tracking-wider">@{collaborator.codename}</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-cyan text-sm">LVL {collaborator.level}</span>
              <Badge variant="outline" className="text-xs border-cyan/40 text-cyan">
                {collaborator.team}
              </Badge>
            </div>
          </div>

          {/* XP Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-cyan mb-1">
              <span>{collaborator.xp.toLocaleString()} XP</span>
              <span>{collaborator.max_xp.toLocaleString()} XP</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan to-blue-400 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${xpProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Detailed Stats (shown on hover) */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-gray-300 space-y-1">
            <div className="flex justify-between">
              <span>Crescimento:</span>
              <span className="text-green-400">{collaborator.weekly_growth}</span>
            </div>
            <div className="flex justify-between">
              <span>Eficiência:</span>
              <span className="text-blue-400">{collaborator.efficiency}%</span>
            </div>
            <div className="flex justify-between">
              <span>Projetos:</span>
              <span className="text-purple-400">{collaborator.projects}</span>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-auto flex flex-wrap gap-1 justify-center">
            {collaborator.badges.slice(0, 2).map((badge, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs border-cyan/40 text-cyan tech-badge"
              >
                {badge.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Scan Lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent scan-lines pointer-events-none"></div>
      </div>
    </div>
  );
};