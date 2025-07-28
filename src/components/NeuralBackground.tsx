export const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
      
      {/* Layer 1: Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-energy/20 rounded-full animate-neural-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Layer 2: Complex neural circuit patterns */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--energy))" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(var(--energy))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--energy))" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <pattern id="neural-mesh" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              {/* Main neural nodes */}
              <circle cx="75" cy="75" r="4" fill="url(#neuralGlow)" filter="url(#glow)">
                <animate attributeName="r" values="4;6;4" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="225" cy="225" r="3" fill="url(#neuralGlow)" filter="url(#glow)">
                <animate attributeName="opacity" values="0.4;0.9;0.4" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="50" r="2" fill="hsl(var(--metallic))" opacity="0.6" />
              <circle cx="50" cy="250" r="2" fill="hsl(var(--metallic))" opacity="0.4" />
              <circle cx="250" cy="150" r="3" fill="hsl(var(--energy))" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="6s" repeatCount="indefinite" />
              </circle>
              
              {/* Glowing neural pathways */}
              <path 
                d="M75,75 Q120,40 225,225" 
                stroke="hsl(var(--energy))" 
                strokeWidth="1" 
                fill="none" 
                opacity="0.4"
                filter="url(#glow)"
              >
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="7s" repeatCount="indefinite" />
                <animate attributeName="stroke-width" values="1;2;1" dur="4s" repeatCount="indefinite" />
              </path>
              <path 
                d="M50,250 Q150,150 250,150" 
                stroke="hsl(var(--energy))" 
                strokeWidth="0.8" 
                fill="none" 
                opacity="0.3"
                filter="url(#glow)"
              >
                <animate attributeName="opacity" values="0.1;0.6;0.1" dur="8s" repeatCount="indefinite" />
              </path>
              <path 
                d="M150,50 Q100,150 75,75" 
                stroke="hsl(var(--metallic))" 
                strokeWidth="0.5" 
                fill="none" 
                opacity="0.4"
              />
              
              {/* Fractal-inspired smaller connections */}
              <path 
                d="M75,75 L100,90 L125,75 L150,50" 
                stroke="hsl(var(--energy))" 
                strokeWidth="0.3" 
                fill="none" 
                opacity="0.3"
              >
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="10s" repeatCount="indefinite" />
              </path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-mesh)" />
        </svg>
      </div>

      {/* Layer 3: Radial energy sources with enhanced glow */}
      <div className="absolute inset-0">
        {/* Primary energy core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-40 h-40 rounded-full bg-gradient-radial from-energy/30 via-energy/15 to-transparent animate-pulse-glow shadow-neural-core"></div>
          <div className="absolute inset-4 w-32 h-32 rounded-full bg-gradient-radial from-energy/40 via-energy/20 to-transparent animate-pulse-glow-slow"></div>
        </div>
        
        {/* Secondary energy nodes */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gradient-radial from-energy/20 via-energy/8 to-transparent animate-pulse-glow shadow-neural-soft" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 rounded-full bg-gradient-radial from-energy/18 via-energy/6 to-transparent animate-pulse-glow shadow-neural-soft" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-20 h-20 rounded-full bg-gradient-radial from-energy/25 via-energy/10 to-transparent animate-pulse-glow shadow-neural-soft" style={{ animationDelay: '4.5s' }}></div>
      </div>

      {/* Layer 4: Brain-inspired fractal overlay */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23${encodeURIComponent('0cc0df')}' stroke-width='0.5' opacity='0.3'%3E%3Cpath d='M20,20 Q30,10 40,20 Q50,30 60,20 Q70,10 80,20'/%3E%3Cpath d='M20,40 Q35,30 50,40 Q65,50 80,40'/%3E%3Cpath d='M20,60 Q40,50 60,60 Q80,70 80,80'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%23${encodeURIComponent('0cc0df')}' opacity='0.4'/%3E%3Ccircle cx='70' cy='50' r='1.5' fill='%23${encodeURIComponent('0cc0df')}' opacity='0.3'/%3E%3Ccircle cx='50' cy='70' r='1' fill='%23${encodeURIComponent('0cc0df')}' opacity='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
          }}
        ></div>
      </div>

      {/* Layer 5: Enhanced Mind77 watermark with subtle animation */}
      <div className="absolute bottom-8 right-8 opacity-8">
        <div className="relative">
          <svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="subtle-glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Brain outline with subtle glow */}
            <path 
              d="M70,25 Q95,20 105,45 Q115,65 95,80 Q105,100 85,110 Q70,120 55,110 Q35,100 45,80 Q25,65 35,45 Q45,20 70,25 Z" 
              fill="none" 
              stroke="hsl(var(--metallic))" 
              strokeWidth="1.5"
              filter="url(#subtle-glow)"
              opacity="0.6"
            />
            {/* Central energy core (lightbulb inspiration) */}
            <circle cx="70" cy="70" r="6" fill="hsl(var(--energy))" opacity="0.4" filter="url(#subtle-glow)">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" />
            </circle>
            {/* Small neural connections */}
            <circle cx="55" cy="55" r="1.5" fill="hsl(var(--energy))" opacity="0.3" />
            <circle cx="85" cy="85" r="1.5" fill="hsl(var(--energy))" opacity="0.3" />
            <path d="M55,55 Q70,60 85,85" stroke="hsl(var(--energy))" strokeWidth="0.5" opacity="0.2" />
          </svg>
        </div>
      </div>
    </div>
  );
};