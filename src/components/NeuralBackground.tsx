export const NeuralBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Base neural background with improved visibility */}
      <div 
        className="absolute inset-0 bg-gradient-neural opacity-95"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3Ccircle cx='15' cy='45' r='1'/%3E%3Ccircle cx='45' cy='15' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Enhanced neural circuit patterns inspired by brain */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Neural node connections */}
              <circle cx="50" cy="50" r="3" fill="hsl(var(--energy))" opacity="0.7">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="150" r="2" fill="hsl(var(--energy))" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="30" r="2" fill="hsl(var(--metallic))" opacity="0.4" />
              <circle cx="30" cy="170" r="2" fill="hsl(var(--metallic))" opacity="0.4" />
              
              {/* Connection lines - brain-like pathways */}
              <path 
                d="M50,50 Q100,20 150,150" 
                stroke="hsl(var(--energy))" 
                strokeWidth="0.5" 
                fill="none" 
                opacity="0.4"
              >
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
              </path>
              <path 
                d="M30,170 Q80,100 100,30" 
                stroke="hsl(var(--metallic))" 
                strokeWidth="0.3" 
                fill="none" 
                opacity="0.3"
              />
              <path 
                d="M75,75 Q125,50 175,125" 
                stroke="hsl(var(--energy))" 
                strokeWidth="0.4" 
                fill="none" 
                opacity="0.3"
              >
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="6s" repeatCount="indefinite" />
              </path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-circuit)" />
        </svg>
      </div>

      {/* Optimized energy pulses */}
      <div className="absolute inset-0">
        {/* Central energy source - more subtle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-40 h-40 rounded-full bg-gradient-radial from-energy/15 via-energy/8 to-transparent animate-pulse-glow"></div>
        </div>
        
        {/* Secondary energy points - repositioned for better balance */}
        <div className="absolute top-1/3 left-1/5 w-20 h-20 rounded-full bg-gradient-radial from-energy/12 via-energy/6 to-transparent animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 rounded-full bg-gradient-radial from-energy/12 via-energy/6 to-transparent animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-16 h-16 rounded-full bg-gradient-radial from-energy/10 via-energy/5 to-transparent animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Enhanced Mind77 watermark pattern - more integrated */}
      <div className="absolute bottom-8 right-8 opacity-8">
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Brain outline with neural pathways */}
          <path 
            d="M50,15 Q65,12 75,25 Q85,40 72,55 Q77,70 65,78 Q50,85 35,78 Q23,70 28,55 Q15,40 25,25 Q35,12 50,15 Z" 
            fill="none" 
            stroke="hsl(var(--metallic))" 
            strokeWidth="0.8"
            opacity="0.6"
          />
          {/* Central neural core */}
          <circle cx="50" cy="50" r="3" fill="hsl(var(--energy))" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
          </circle>
          {/* Neural connection lines */}
          <path d="M35,35 Q50,25 65,35" stroke="hsl(var(--energy))" strokeWidth="0.5" fill="none" opacity="0.5" />
          <path d="M35,65 Q50,75 65,65" stroke="hsl(var(--energy))" strokeWidth="0.5" fill="none" opacity="0.5" />
        </svg>
      </div>

      {/* Additional ambient glow layers for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-energy/5"></div>
    </div>
  );
};