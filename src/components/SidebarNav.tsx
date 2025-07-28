import { useState } from "react";
import { Dna, Radio, Rocket, Search } from "lucide-react";

const menuItems = [
  { id: "dna", icon: Dna, label: "DNA Mind77", emoji: "🧬" },
  { id: "academy", icon: Radio, label: "MindAcademy", emoji: "📡" },
  { id: "propulsion", icon: Rocket, label: "Painel de Propulsão", emoji: "🚀" },
  { id: "scanner", icon: Search, label: "Scanner de Performance", emoji: "🔍" },
];

export const SidebarNav = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="w-20 md:w-64 glass-morph border-l border-cyan/30 p-4 space-y-4">
      <div className="text-center mb-8 hidden md:block">
        <h3 className="text-cyan font-semibold">Módulos</h3>
      </div>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full p-4 rounded-lg glass-morph border border-cyan/20 hover:border-cyan/50 transition-all duration-300 group ${
              hoveredItem === item.id ? "neural-glow" : ""
            }`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center gap-3">
              <div className="text-cyan text-xl">
                {item.emoji}
              </div>
              <div className="hidden md:block text-left">
                <div className="font-medium text-white group-hover:text-cyan transition-colors">
                  {item.label}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Neural pulse indicator */}
      <div className="mt-8 hidden md:block">
        <div className="w-full h-1 bg-cyan/20 rounded-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan to-transparent animate-pulse-wave"></div>
        </div>
      </div>
    </div>
  );
};