import { useState } from "react";
import { NeuralBackground } from "@/components/NeuralBackground";
import { TopBar } from "@/components/TopBar";
import { RankingGrid } from "@/components/RankingGrid";
import { SidebarNav } from "@/components/SidebarNav";
import { FilterDropdowns } from "@/components/FilterDropdowns";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Semana");
  const [selectedTeam, setSelectedTeam] = useState("Todas");

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <NeuralBackground />
      
      <div className="relative z-10 flex min-h-screen">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <TopBar />
          
          <div className="flex-1 relative">
            <div className="absolute top-4 left-4 z-20">
              <FilterDropdowns 
                selectedPeriod={selectedPeriod}
                onPeriodChange={setSelectedPeriod}
                selectedTeam={selectedTeam}
                onTeamChange={setSelectedTeam}
              />
            </div>
            
            <RankingGrid period={selectedPeriod} team={selectedTeam} />
          </div>
        </div>

        {/* Sidebar */}
        <SidebarNav />
      </div>
    </div>
  );
};

export default Dashboard;