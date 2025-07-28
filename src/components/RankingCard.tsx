interface RankingCardProps {
  position: number;
  name: string;
  title: string;
  score: number;
  achievements: string[];
  avatar: string;
  glowColor: "gold" | "silver" | "bronze" | "cyan";
  size?: "small" | "medium" | "large";
  className?: string;
}

export const RankingCard = ({
  position,
  name,
  title,
  score,
  achievements,
  avatar,
  glowColor,
  size = "medium",
  className = ""
}: RankingCardProps) => {
  
  const glowColors = {
    gold: "shadow-[0_0_30px_#FFD700]",
    silver: "shadow-[0_0_25px_#C0C0C0]", 
    bronze: "shadow-[0_0_25px_#CD7F32]",
    cyan: "shadow-pulse"
  };

  const sizeClasses = {
    small: "p-4",
    medium: "p-6", 
    large: "p-8"
  };

  const avatarSizes = {
    small: "w-16 h-16",
    medium: "w-20 h-20",
    large: "w-24 h-24"
  };

  const textSizes = {
    small: {
      name: "text-lg",
      title: "text-sm",
      score: "text-xl"
    },
    medium: {
      name: "text-xl",
      title: "text-base", 
      score: "text-2xl"
    },
    large: {
      name: "text-2xl",
      title: "text-lg",
      score: "text-3xl"
    }
  };

  return (
    <div className={`
      relative bg-black/60 backdrop-blur-md border-2 border-neural/40 rounded-lg
      ${sizeClasses[size]} ${glowColors[glowColor]} ${className}
      hover:border-neural hover:scale-105 transition-all duration-300
      ${size === 'large' ? 'transform -translate-y-4' : ''}
    `}>
      
      {/* Posição Badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-energy rounded-full flex items-center justify-center border-2 border-neural">
        <span className="text-black font-bold text-sm">#{position}</span>
      </div>

      {/* Crown para 1º lugar */}
      {position === 1 && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="text-yellow-400 text-2xl">👑</div>
        </div>
      )}

      <div className="text-center">
        {/* Avatar */}
        <div className={`${avatarSizes[size]} mx-auto mb-4 relative`}>
          <div className="w-full h-full rounded-full bg-gradient-neural border-2 border-neural overflow-hidden">
            {/* Placeholder avatar - você pode substituir por imagem real */}
            <div className="w-full h-full bg-gradient-to-br from-neural/30 to-energy/30 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          
          {/* Glow effect no avatar */}
          <div className={`absolute inset-0 rounded-full ${glowColors[glowColor]} opacity-50 -z-10`}></div>
        </div>

        {/* Nome */}
        <h3 className={`${textSizes[size].name} font-bold text-white mb-1`}>
          {name}
        </h3>

        {/* Título */}
        <p className={`${textSizes[size].title} text-metallic mb-3`}>
          {title}
        </p>

        {/* Score */}
        <div className={`${textSizes[size].score} font-bold text-energy mb-4`}>
          {score.toLocaleString()}
          <span className="text-sm text-metallic ml-1">pts</span>
        </div>

        {/* Achievements */}
        <div className="space-y-1">
          {achievements.slice(0, size === 'large' ? 3 : 2).map((achievement, index) => (
            <div 
              key={index}
              className="inline-block bg-neural/20 border border-neural/40 rounded-full px-3 py-1 mx-1"
            >
              <span className="text-xs text-neural font-medium">{achievement}</span>
            </div>
          ))}
        </div>

        {/* Barra de progresso sutil */}
        <div className="mt-4 w-full bg-tech rounded-full h-1">
          <div 
            className="bg-gradient-energy h-1 rounded-full transition-all duration-1000"
            style={{ width: `${Math.min((score / 10000) * 100, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Efeito de partículas para o 1º lugar */}
      {position === 1 && (
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-energy rounded-full animate-ping"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};