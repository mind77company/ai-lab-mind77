import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp } from "lucide-react";

interface Collaborator {
  id: string;
  name: string;
  codename: string;
  avatar: string;
  xp: number;
  level: number;
  xpToNextLevel: number;
  maxXpCurrentLevel: number;
  team: string;
  badges: Array<{
    type: "mvp" | "cultura" | "tecnico" | "crescimento";
    label: string;
  }>;
  evolutionDetails: string[];
  isWeeklyGrowthLeader?: boolean;
}

interface CollaboratorCardProps {
  collaborator: Collaborator;
  rank: number;
  isTopThree: boolean;
}

export const CollaboratorCard = ({ collaborator, rank, isTopThree }: CollaboratorCardProps) => {
  const progressPercent = ((collaborator.xp % collaborator.maxXpCurrentLevel) / collaborator.maxXpCurrentLevel) * 100;
  
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "mvp": return "default";
      case "cultura": return "secondary";
      case "tecnico": return "outline";
      case "crescimento": return "destructive";
      default: return "default";
    }
  };

  const getRankStyle = () => {
    if (rank === 1) return "neural-glow-gold";
    if (rank === 2) return "neural-glow-silver";
    if (rank === 3) return "neural-glow-bronze";
    return "";
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`glass-morph p-6 rounded-lg border border-cyan/30 hover:border-cyan/60 transition-all duration-300 relative ${
            isTopThree ? `${getRankStyle()} scale-105` : ""
          }`}>
            {/* Rank indicator */}
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-cyan rounded-full flex items-center justify-center text-black font-bold text-sm">
              {rank}
            </div>

            {/* Weekly growth leader tag */}
            {collaborator.isWeeklyGrowthLeader && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <TrendingUp size={12} />
                <span>Maior crescimento</span>
              </div>
            )}

            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <Avatar className="w-16 h-16 border-2 border-cyan neural-glow">
                <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                <AvatarFallback className="bg-cyan/20 text-cyan">
                  {collaborator.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Name and codename */}
            <div className="text-center mb-4">
              <h3 className="font-bold text-lg text-white">{collaborator.name}</h3>
              <p className="text-cyan text-sm">@{collaborator.codename}</p>
            </div>

            {/* XP and Level */}
            <div className="text-center mb-4">
              <div className="text-2xl font-bold neural-glow mb-2">
                {collaborator.xp.toLocaleString()} XP
              </div>
              <div className="text-sm text-gray-300 mb-2">
                Nível {collaborator.level}
              </div>
              <Progress value={progressPercent} className="h-2 neural-progress" />
              <div className="text-xs text-gray-400 mt-1">
                {collaborator.xpToNextLevel} XP para o próximo nível
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1 justify-center">
              {collaborator.badges.map((badge, index) => (
                <Badge key={index} variant={getBadgeVariant(badge.type)} className="text-xs">
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2">
            <p className="font-semibold">Evolução recente:</p>
            <ul className="text-sm space-y-1">
              {collaborator.evolutionDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-cyan">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};