-- Criar função para atualizar updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Criar uma nova tabela de colaboradores para o Hall da Mente Suprema
CREATE TABLE public.colaboradores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  codename TEXT NOT NULL,
  avatar TEXT,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  team TEXT,
  status TEXT DEFAULT 'offline' CHECK (status IN ('online', 'away', 'offline')),
  weekly_growth TEXT DEFAULT '+0 XP',
  efficiency INTEGER DEFAULT 50,
  projects INTEGER DEFAULT 0,
  max_xp INTEGER DEFAULT 1000,
  xp_to_next_level INTEGER DEFAULT 0,
  max_xp_current_level INTEGER DEFAULT 1000,
  badges JSONB DEFAULT '[]',
  evolution_details JSONB DEFAULT '[]',
  is_weekly_growth_leader BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.colaboradores ENABLE ROW LEVEL SECURITY;

-- Política para leitura pública (já que é um ranking público)
CREATE POLICY "Anyone can view colaboradores" 
ON public.colaboradores 
FOR SELECT 
USING (true);

-- Política para inserção (pode ser ajustada conforme sua necessidade)
CREATE POLICY "Authenticated users can insert colaboradores" 
ON public.colaboradores 
FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Política para atualização (pode ser ajustada conforme sua necessidade)
CREATE POLICY "Authenticated users can update colaboradores" 
ON public.colaboradores 
FOR UPDATE 
TO authenticated
USING (true);

-- Trigger para atualizar updated_at automaticamente
CREATE TRIGGER update_colaboradores_updated_at
    BEFORE UPDATE ON public.colaboradores
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();