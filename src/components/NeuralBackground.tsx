export const NeuralBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Base neural background */}
      <div 
        className="absolute inset-0 bg-gradient-neural opacity-90"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3Ccircle cx='15' cy='45' r='1'/%3E%3Ccircle cx='45' cy='15' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Neural circuit patterns inspired by brain */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Neural node connections */}
              <circle cx="50" cy="50" r="3" fill="hsl(var(--energy))" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="150" r="2" fill="hsl(var(--energy))" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="30" r="2" fill="hsl(var(--metallic))" opacity="0.3" />
              <circle cx="30" cy="170" r="2" fill="hsl(var(--metallic))" opacity="0.3" />
              
              {/* Connection lines - brain-like pathways */}
              <path 
                d="M50,50 Q100,20 150,150" 
                stroke="hsl(var(--energy))" 
                strokeWidth="0.5" 
                fill="none" 
                opacity="0.3"
              >
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
              </path>
              <path 
                d="M30,170 Q80,100 100,30" 
                stroke="hsl(var(--metallic))" 
                strokeWidth="0.3" 
                fill="none" 
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-circuit)" />
        </svg>
      </div>

      {/* Energy pulses inspired by lightbulb */}
      <div className="absolute inset-0">
        {/* Central energy source */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 rounded-full bg-gradient-radial from-energy/20 via-energy/10 to-transparent animate-pulse-glow"></div>
        </div>
        
        {/* Secondary energy points */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-gradient-radial from-energy/15 via-energy/5 to-transparent animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-radial from-energy/15 via-energy/5 to-transparent animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle Mind77 watermark pattern */}
      <div className="absolute bottom-8 right-8 opacity-5">
        <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          {/* Simplified brain outline */}
          <path 
            d="M60,20 Q80,15 90,35 Q100,50 85,65 Q90,80 75,90 Q60,100 45,90 Q30,80 35,65 Q20,50 30,35 Q40,15 60,20 Z" 
            fill="none" 
            stroke="hsl(var(--metallic))" 
            strokeWidth="1"
          />
          {/* Central energy dot (lightbulb inspiration) */}
          <circle cx="60" cy="60" r="4" fill="hsl(var(--energy))" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
};