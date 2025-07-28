import { OlympicPlatform } from "./OlympicPlatform";

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

interface CircularTableProps {
  collaborators: Collaborator[];
}

export const CircularTable = ({ collaborators }: CircularTableProps) => {
  const topCollaborators = collaborators.slice(0, 6);
  
  const getPlatformConfig = (index: number) => {
    const configs = [
      { height: 400, delay: 1000 }, // Rank #1
      { height: 320, delay: 1200 }, // Rank #2  
      { height: 300, delay: 1400 }, // Rank #3
      { height: 260, delay: 1600 }, // Rank #4
      { height: 260, delay: 1800 }, // Rank #5
      { height: 260, delay: 2000 }, // Rank #6
    ];
    return configs[index] || { height: 260, delay: 2000 };
  };

  const onlineCount = topCollaborators.filter(c => c.status === "online").length;
  const totalCount = topCollaborators.length;

  return (
    <div className="olympus-arena relative w-full h-full min-h-[900px] bg-gradient-to-br from-black via-[#001122] to-[#001a2e]">
      {/* Energy Streams Background */}
      <div className="energy-streams absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-cyan/40 via-cyan/20 to-transparent animate-pulse"
            style={{
              left: `${10 + i * 7}%`,
              height: '100%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Central Core */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          {/* Core Orb */}
          <div className="w-20 h-20 bg-gradient-radial from-cyan/60 via-cyan/30 to-transparent rounded-full animate-pulse-glow relative">
            <div className="absolute inset-2 bg-gradient-radial from-white/20 to-transparent rounded-full"></div>
          </div>
          
          {/* Rotating Rings */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 border-2 border-cyan/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-cyan/20 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-8 border border-cyan/10 rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Core Title */}
        <div className="text-center mt-6">
          <h2 className="text-cyan font-mono text-sm tracking-[0.3em] animate-fade-in">
            MENTE_SUPREMA_CORE
          </h2>
        </div>
      </div>

      {/* Floating UI - System Status */}
      <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-md border border-cyan/30 rounded-lg p-4 z-20">
        <div className="text-xs text-cyan font-mono space-y-1">
          <div className="flex justify-between">
            <span>Conectados:</span>
            <span className="text-green-400">{onlineCount}/{totalCount}</span>
          </div>
          <div className="flex justify-between">
            <span>Atividade Neural:</span>
            <span className="text-blue-400">97.3%</span>
          </div>
        </div>
      </div>

      {/* Olympic Platforms Grid */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-8 p-8 pt-20">
        {/* Top Row */}
        <div className="flex justify-center items-end">
          {topCollaborators[1] && (
            <OlympicPlatform
              collaborator={topCollaborators[1]}
              rank={2}
              height={getPlatformConfig(1).height}
              delay={getPlatformConfig(1).delay}
            />
          )}
        </div>
        
        <div className="flex justify-center items-end">
          {topCollaborators[0] && (
            <OlympicPlatform
              collaborator={topCollaborators[0]}
              rank={1}
              height={getPlatformConfig(0).height}
              delay={getPlatformConfig(0).delay}
            />
          )}
        </div>
        
        <div className="flex justify-center items-end">
          {topCollaborators[2] && (
            <OlympicPlatform
              collaborator={topCollaborators[2]}
              rank={3}
              height={getPlatformConfig(2).height}
              delay={getPlatformConfig(2).delay}
            />
          )}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center items-end">
          {topCollaborators[3] && (
            <OlympicPlatform
              collaborator={topCollaborators[3]}
              rank={4}
              height={getPlatformConfig(3).height}
              delay={getPlatformConfig(3).delay}
            />
          )}
        </div>
        
        <div className="flex justify-center items-end">
          {/* Central space for core */}
        </div>
        
        <div className="flex justify-center items-end">
          {topCollaborators[4] && (
            <OlympicPlatform
              collaborator={topCollaborators[4]}
              rank={5}
              height={getPlatformConfig(4).height}
              delay={getPlatformConfig(4).delay}
            />
          )}
        </div>
      </div>

      {/* Additional collaborator if exists */}
      {topCollaborators[5] && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <OlympicPlatform
            collaborator={topCollaborators[5]}
            rank={6}
            height={getPlatformConfig(5).height}
            delay={getPlatformConfig(5).delay}
          />
        </div>
      )}

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan/10 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};