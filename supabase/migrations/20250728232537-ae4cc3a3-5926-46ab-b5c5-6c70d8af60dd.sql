-- Fix critical security issues

-- 1. Re-enable RLS on colaboradores table (it was disabled)
ALTER TABLE public.colaboradores ENABLE ROW LEVEL SECURITY;

-- 2. Update colaboradores policies to require authentication
DROP POLICY IF EXISTS "Anyone can view colaboradores" ON public.colaboradores;
DROP POLICY IF EXISTS "Authenticated users can insert colaboradores" ON public.colaboradores;
DROP POLICY IF EXISTS "Authenticated users can update colaboradores" ON public.colaboradores;

-- Create secure policies that require authentication
CREATE POLICY "Authenticated users can view colaboradores" 
ON public.colaboradores 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can insert colaboradores" 
ON public.colaboradores 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update colaboradores" 
ON public.colaboradores 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete colaboradores" 
ON public.colaboradores 
FOR DELETE 
TO authenticated
USING (true);

-- 3. Secure the gamificação table
ALTER TABLE public.gamificação ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view gamificação" 
ON public.gamificação 
FOR SELECT 
TO authenticated
USING (true);

-- 4. Fix the update function search path for security
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;