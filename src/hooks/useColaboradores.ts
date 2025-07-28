import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import type { Database } from '@/integrations/supabase/types';

type ColaboradorRow = Database['public']['Tables']['colaboradores']['Row'];

export interface Colaborador {
  id: string;
  name: string;
  codename: string;
  avatar: string | null;
  xp: number;
  level: number;
  team: string | null;
  status: 'online' | 'away' | 'offline';
  weekly_growth: string;
  efficiency: number;
  projects: number;
  max_xp: number;
  xp_to_next_level: number;
  max_xp_current_level: number;
  badges: Array<{
    type: "mvp" | "cultura" | "tecnico" | "crescimento";
    label: string;
  }>;
  evolution_details: string[];
  is_weekly_growth_leader: boolean;
  created_at: string;
  updated_at: string;
}

const transformColaborador = (row: ColaboradorRow): Colaborador => ({
  id: row.id,
  name: row.name,
  codename: row.codename,
  avatar: row.avatar,
  xp: row.xp || 0,
  level: row.level || 1,
  team: row.team,
  status: (row.status as 'online' | 'away' | 'offline') || 'offline',
  weekly_growth: row.weekly_growth || '+0 XP',
  efficiency: row.efficiency || 50,
  projects: row.projects || 0,
  max_xp: row.max_xp || 1000,
  xp_to_next_level: row.xp_to_next_level || 0,
  max_xp_current_level: row.max_xp_current_level || 1000,
  badges: (row.badges as any) || [],
  evolution_details: (row.evolution_details as any) || [],
  is_weekly_growth_leader: row.is_weekly_growth_leader || false,
  created_at: row.created_at || '',
  updated_at: row.updated_at || ''
});

export const useColaboradores = () => {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchColaboradores = async () => {
    try {
      const { data, error } = await supabase
        .from('colaboradores')
        .select('*')
        .order('xp', { ascending: false });

      if (error) throw error;

      setColaboradores((data || []).map(transformColaborador));
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error);
      toast({
        title: "Erro",
        description: "Falha ao carregar colaboradores",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addColaborador = async (colaborador: Omit<Colaborador, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('colaboradores')
        .insert([colaborador])
        .select()
        .single();

      if (error) throw error;

      setColaboradores(prev => [...prev, transformColaborador(data)]);
      toast({
        title: "Sucesso",
        description: "Colaborador adicionado com sucesso!",
      });
      
      return data;
    } catch (error) {
      console.error('Erro ao adicionar colaborador:', error);
      toast({
        title: "Erro",
        description: "Falha ao adicionar colaborador",
        variant: "destructive",
      });
      throw error;
    }
  };

  const updateColaborador = async (id: string, updates: Partial<Colaborador>) => {
    try {
      const { data, error } = await supabase
        .from('colaboradores')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setColaboradores(prev => 
        prev.map(c => c.id === id ? { ...c, ...transformColaborador(data) } : c)
      );
      
      toast({
        title: "Sucesso",
        description: "Colaborador atualizado com sucesso!",
      });
      
      return data;
    } catch (error) {
      console.error('Erro ao atualizar colaborador:', error);
      toast({
        title: "Erro",
        description: "Falha ao atualizar colaborador",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteColaborador = async (id: string) => {
    try {
      const { error } = await supabase
        .from('colaboradores')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setColaboradores(prev => prev.filter(c => c.id !== id));
      toast({
        title: "Sucesso",
        description: "Colaborador removido com sucesso!",
      });
    } catch (error) {
      console.error('Erro ao remover colaborador:', error);
      toast({
        title: "Erro", 
        description: "Falha ao remover colaborador",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchColaboradores();
  }, []);

  return {
    colaboradores,
    loading,
    addColaborador,
    updateColaborador,
    deleteColaborador,
    refetch: fetchColaboradores
  };
};