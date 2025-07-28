import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useColaboradores, type Colaborador } from '@/hooks/useColaboradores';
import { Plus } from 'lucide-react';

export const AddColaboradorForm = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addColaborador } = useColaboradores();

  const [formData, setFormData] = useState<{
    name: string;
    codename: string;
    avatar: string;
    xp: number;
    level: number;
    team: string;
    status: 'online' | 'away' | 'offline';
    weekly_growth: string;
    efficiency: number;
    projects: number;
    max_xp: number;
    xp_to_next_level: number;
    max_xp_current_level: number;
    badges: Array<{type: "mvp" | "cultura" | "tecnico" | "crescimento"; label: string}>;
    evolution_details: string[];
    is_weekly_growth_leader: boolean;
  }>({
    name: '',
    codename: '',
    avatar: '',
    xp: 0,
    level: 1,
    team: '',
    status: 'offline',
    weekly_growth: '+0 XP',
    efficiency: 50,
    projects: 0,
    max_xp: 1000,
    xp_to_next_level: 1000,
    max_xp_current_level: 1000,
    badges: [],
    evolution_details: [],
    is_weekly_growth_leader: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addColaborador(formData);
      
      // Reset form
      setFormData({
        name: '',
        codename: '',
        avatar: '',
        xp: 0,
        level: 1,
        team: '',
        status: 'offline',
        weekly_growth: '+0 XP',
        efficiency: 50,
        projects: 0,
        max_xp: 1000,
        xp_to_next_level: 1000,
        max_xp_current_level: 1000,
        badges: [],
        evolution_details: [],
        is_weekly_growth_leader: false
      });
      
      setOpen(false);
    } catch (error) {
      console.error('Error adding colaborador:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-cyan/10 border-cyan/30 text-cyan hover:bg-cyan/20 hover:border-cyan/50"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Colaborador
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black/90 border-cyan/30 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-cyan">Adicionar Novo Colaborador</DialogTitle>
          <DialogDescription className="text-gray-300">
            Preencha as informações do colaborador para adicioná-lo ao Hall da Mente Suprema.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-cyan">Nome *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-black/50 border-cyan/30 text-white"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="codename" className="text-cyan">Codename *</Label>
              <Input
                id="codename"
                value={formData.codename}
                onChange={(e) => setFormData(prev => ({ ...prev, codename: e.target.value }))}
                className="bg-black/50 border-cyan/30 text-white"
                placeholder="ex: NEURAL_ANA"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="avatar" className="text-cyan">Avatar URL</Label>
            <Input
              id="avatar"
              value={formData.avatar}
              onChange={(e) => setFormData(prev => ({ ...prev, avatar: e.target.value }))}
              className="bg-black/50 border-cyan/30 text-white"
              placeholder="URL da imagem do avatar"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="xp" className="text-cyan">XP</Label>
              <Input
                id="xp"
                type="number"
                value={formData.xp}
                onChange={(e) => setFormData(prev => ({ ...prev, xp: Number(e.target.value) }))}
                className="bg-black/50 border-cyan/30 text-white"
                min="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="level" className="text-cyan">Nível</Label>
              <Input
                id="level"
                type="number"
                value={formData.level}
                onChange={(e) => setFormData(prev => ({ ...prev, level: Number(e.target.value) }))}
                className="bg-black/50 border-cyan/30 text-white"
                min="1"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="efficiency" className="text-cyan">Eficiência %</Label>
              <Input
                id="efficiency"
                type="number"
                value={formData.efficiency}
                onChange={(e) => setFormData(prev => ({ ...prev, efficiency: Number(e.target.value) }))}
                className="bg-black/50 border-cyan/30 text-white"
                min="0"
                max="100"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="team" className="text-cyan">Equipe</Label>
              <Select value={formData.team} onValueChange={(value) => setFormData(prev => ({ ...prev, team: value }))}>
                <SelectTrigger className="bg-black/50 border-cyan/30 text-white">
                  <SelectValue placeholder="Selecione a equipe" />
                </SelectTrigger>
                <SelectContent className="bg-black border-cyan/30">
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Produto">Produto</SelectItem>
                  <SelectItem value="DevOps">DevOps</SelectItem>
                  <SelectItem value="QA">QA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="status" className="text-cyan">Status</Label>
              <Select value={formData.status} onValueChange={(value: 'online' | 'away' | 'offline') => setFormData(prev => ({ ...prev, status: value }))}>
                <SelectTrigger className="bg-black/50 border-cyan/30 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black border-cyan/30">
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="away">Ausente</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projects" className="text-cyan">Projetos</Label>
              <Input
                id="projects"
                type="number"
                value={formData.projects}
                onChange={(e) => setFormData(prev => ({ ...prev, projects: Number(e.target.value) }))}
                className="bg-black/50 border-cyan/30 text-white"
                min="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="weekly_growth" className="text-cyan">Crescimento Semanal</Label>
              <Input
                id="weekly_growth"
                value={formData.weekly_growth}
                onChange={(e) => setFormData(prev => ({ ...prev, weekly_growth: e.target.value }))}
                className="bg-black/50 border-cyan/30 text-white"
                placeholder="ex: +150 XP"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={loading || !formData.name || !formData.codename}
              className="bg-cyan/20 border-cyan/30 text-cyan hover:bg-cyan/30"
            >
              {loading ? 'Adicionando...' : 'Adicionar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};