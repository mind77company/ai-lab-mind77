import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterDropdownsProps {
  selectedPeriod: string;
  onPeriodChange: (value: string) => void;
  selectedTeam: string;
  onTeamChange: (value: string) => void;
}

export const FilterDropdowns = ({ 
  selectedPeriod, 
  onPeriodChange, 
  selectedTeam, 
  onTeamChange 
}: FilterDropdownsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md">
      <div className="flex-1">
        <label className="block text-sm font-medium text-cyan mb-2">
          Período
        </label>
        <Select value={selectedPeriod} onValueChange={onPeriodChange}>
          <SelectTrigger className="neural-input">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="neural-dropdown">
            <SelectItem value="Semana">Semana</SelectItem>
            <SelectItem value="Mês">Mês</SelectItem>
            <SelectItem value="Sempre">Sempre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-cyan mb-2">
          Equipe
        </label>
        <Select value={selectedTeam} onValueChange={onTeamChange}>
          <SelectTrigger className="neural-input">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="neural-dropdown">
            <SelectItem value="Todas">Todas</SelectItem>
            <SelectItem value="Frontend">Frontend</SelectItem>
            <SelectItem value="Backend">Backend</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
            <SelectItem value="Produto">Produto</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};