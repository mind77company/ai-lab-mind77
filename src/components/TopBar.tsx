import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export const TopBar = () => {
  const { signOut, user } = useAuth();

  return (
    <div className="flex items-center justify-between p-4 relative z-20">
      <div className="text-center flex-1">
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
      
      <div className="flex items-center gap-4 absolute top-4 right-4">
        <div className="text-cyan text-sm font-mono">
          {user?.email} • NEURAL STATUS: ONLINE
        </div>
        <div className="w-2 h-2 bg-cyan rounded-full animate-pulse"></div>
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="text-metallic hover:text-cyan"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};