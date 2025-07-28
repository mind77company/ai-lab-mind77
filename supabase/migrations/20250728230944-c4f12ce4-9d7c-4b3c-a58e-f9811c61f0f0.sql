-- Primeiro, vamos adaptar a tabela gamificação para ter todos os campos necessários
ALTER TABLE public.gamificação 
ADD COLUMN IF NOT EXISTS name TEXT,
ADD COLUMN IF NOT EXISTS codename TEXT,
ADD COLUMN IF NOT EXISTS avatar TEXT,
ADD COLUMN IF NOT EXISTS level INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS team TEXT,
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'offline',
ADD COLUMN IF NOT EXISTS weekly_growth TEXT DEFAULT '+0 XP',
ADD COLUMN IF NOT EXISTS efficiency INTEGER DEFAULT 50,
ADD COLUMN IF NOT EXISTS projects INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS max_xp INTEGER DEFAULT 1000,
ADD COLUMN IF NOT EXISTS xp_to_next_level INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS max_xp_current_level INTEGER DEFAULT 1000,
ADD COLUMN IF NOT EXISTS badges JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS evolution_details JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS is_weekly_growth_leader BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT now();

-- Converter a coluna id para UUID se necessário e adicionar primary key
ALTER TABLE public.gamificação DROP CONSTRAINT IF EXISTS gamificação_pkey;
ALTER TABLE public.gamificação 
ALTER COLUMN id TYPE UUID USING gen_random_uuid(),
ALTER COLUMN id SET DEFAULT gen_random_uuid();
ALTER TABLE public.gamificação ADD PRIMARY KEY (id);

-- Converter XP para integer se necessário
ALTER TABLE public.gamificação 
ALTER COLUMN xp TYPE INTEGER USING COALESCE(xp::INTEGER, 0),
ALTER COLUMN xp SET DEFAULT 0;

-- Habilitar RLS
ALTER TABLE public.gamificação ENABLE ROW LEVEL SECURITY;

-- Política para leitura pública (já que é um ranking público)
CREATE POLICY "Anyone can view gamification data" 
ON public.gamificação 
FOR SELECT 
USING (true);

-- Política para inserção (pode ser ajustada conforme sua necessidade)
CREATE POLICY "Authenticated users can insert gamification data" 
ON public.gamificação 
FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Política para atualização (pode ser ajustada conforme sua necessidade)
CREATE POLICY "Authenticated users can update gamification data" 
ON public.gamificação 
FOR UPDATE 
TO authenticated
USING (true);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_gamificação_updated_at
    BEFORE UPDATE ON public.gamificação
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();