import { SupremeHallBackground } from "@/components/SupremeHallBackground";
import { RankingCard } from "@/components/RankingCard";

const SupremeHall = () => {
  // Dados mockados para o ranking - você pode conectar com sua API
  const topMinds = [
    {
      position: 1,
      name: "Neural Architect",
      title: "Supreme Mind",
      score: 9850,
      achievements: ["AI Master", "Code Sage", "Innovation Leader"],
      avatar: "/avatars/neural-architect.jpg",
      glowColor: "gold"
    },
    {
      position: 2,
      name: "Quantum Developer",
      title: "Elite Mind", 
      score: 9420,
      achievements: ["Logic Master", "Problem Solver"],
      avatar: "/avatars/quantum-dev.jpg",
      glowColor: "silver"
    },
    {
      position: 3,
      name: "Data Mystic",
      title: "Advanced Mind",
      score: 8990,
      achievements: ["Analytics Pro", "Pattern Master"],
      avatar: "/avatars/data-mystic.jpg", 
      glowColor: "bronze"
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Background do Hall Supremo */}
      <SupremeHallBackground />
      
      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Header do Hall */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            Hall da Mente Suprema
          </h1>
          <div className="h-px bg-gradient-energy w-32 mx-auto mb-4"></div>
          <p className="text-metallic text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Os maiores cérebros da Mind77 • Onde o conhecimento encontra a excelência
          </p>
        </div>

        {/* Podium Layout - Posicionamento olímpico */}
        <div className="max-w-6xl mx-auto">
          {/* Grid responsivo para o podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-end justify-center">
            
            {/* 2º Lugar - Esquerda */}
            <div className="order-1 md:order-1 md:mb-8">
              <RankingCard 
                {...topMinds[1]} 
                className="podium-second"
                size="medium"
              />
            </div>

            {/* 1º Lugar - Centro (mais alto) */}
            <div className="order-1 md:order-2">
              <RankingCard 
                {...topMinds[0]} 
                className="podium-first"
                size="large"
              />
            </div>

            {/* 3º Lugar - Direita */}
            <div className="order-3 md:order-3 md:mb-8">
              <RankingCard 
                {...topMinds[2]} 
                className="podium-third"
                size="medium"
              />
            </div>
          </div>

          {/* Ranking estendido (4º lugar em diante) */}
          <div className="mt-16">
            <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
              Elite Neural Network
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Adicione mais cards aqui para posições 4-10+ */}
              {Array.from({ length: 6 }).map((_, i) => (
                <RankingCard
                  key={i + 4}
                  position={i + 4}
                  name={`Mind Genius ${i + 4}`}
                  title="Rising Mind"
                  score={8000 - (i * 200)}
                  achievements={["Potential", "Learning"]}
                  avatar="/avatars/placeholder.jpg"
                  glowColor="cyan"
                  size="small"
                  className="ranking-extended"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer com stats globais */}
        <div className="mt-16 text-center">
          <div className="bg-black/40 backdrop-blur-md border border-neural/30 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-energy">247</div>
                <div className="text-metallic text-sm">Mentes Ativas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-energy">1,543</div>
                <div className="text-metallic text-sm">Desafios Completados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-energy">89%</div>
                <div className="text-metallic text-sm">Taxa de Evolução</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupremeHall;