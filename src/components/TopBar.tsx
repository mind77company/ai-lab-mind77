export const TopBar = () => {
  return (
    <div className="text-center py-8 md:py-12 relative z-20">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="text-4xl">🏛️</span>
        <h1 className="text-4xl md:text-6xl font-bold neural-glow font-mono tracking-wider">
          HALL DA MENTE SUPREMA
        </h1>
      </div>
      <p className="text-lg md:text-xl text-cyan opacity-80 italic font-mono">
        "Aqui, só os que evoluem aparecem."
      </p>
    </div>
  );
};