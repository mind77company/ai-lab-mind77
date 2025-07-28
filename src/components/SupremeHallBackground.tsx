export const SupremeHallBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background image layer - onde você colocará a imagem da IA */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/supreme-hall-bg.jpg')`,
          // Fallback gradient caso a imagem não carregue
          background: `linear-gradient(135deg, 
            hsl(0 0% 2%) 0%, 
            hsl(190 50% 5%) 30%, 
            hsl(0 0% 1%) 70%, 
            hsl(190 30% 3%) 100%)`
        }}
      >
        {/* Overlay para ajustar opacidade se necessário */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Overlay neural effects para integração */}
      <div className="absolute inset-0">
        {/* Energia sutil conectando os pontos de podium */}
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="energy-node" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(190 100% 44%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(190 100% 44%)" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Pontos de energia nos locais dos podiums */}
          <circle cx="25%" cy="70%" r="30" fill="url(#energy-node)">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="50%" r="40" fill="url(#energy-node)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="75%" cy="70%" r="30" fill="url(#energy-node)">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Linhas de conexão neural */}
          <path 
            d="M 25% 70% Q 50% 40% 75% 70%" 
            stroke="hsl(190 100% 44%)" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.4"
          >
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* Partículas flutuantes para dar vida */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-energy rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div className="animate-ping w-full h-full bg-energy rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Vinheta sutil nas bordas */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>
    </div>
  );
};