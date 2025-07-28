
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = isSignUp 
        ? await signUp(email, password)
        : await signIn(email, password);

      if (error) {
        toast({
          title: "Erro de autenticação",
          description: error.message,
          variant: "destructive",
        });
      } else {
        if (isSignUp) {
          toast({
            title: "Conta criada",
            description: "Verifique seu email para confirmar a conta.",
          });
        } else {
          navigate("/dashboard");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-morph neural-glow w-full max-w-md mx-auto relative">
      {/* Layered neon borders */}
      <div className="absolute inset-0 rounded-xl border border-energy/30 shadow-neural-border"></div>
      <div className="absolute inset-1 rounded-xl border border-energy/20"></div>
      
      <Card className="relative bg-black/40 border-energy/50 shadow-neural-deep backdrop-blur-lg">
        <CardHeader className="text-center space-y-4 relative">
          <CardTitle className="text-2xl font-bold text-foreground tracking-wide relative">
            <span className="relative z-10">Mind77 Neural Access</span>
            <div className="absolute inset-0 text-energy/20 blur-sm">Mind77 Neural Access</div>
          </CardTitle>
          <div className="h-px bg-gradient-energy w-20 mx-auto shadow-energy-line"></div>
        </CardHeader>
        
        <CardContent className="space-y-6 relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-metallic font-medium tracking-wide">
                Email Neural
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="neural-input"
                required
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="password" className="text-metallic font-medium tracking-wide">
                Chave Neural
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha..."
                className="neural-input"
                required
              />
            </div>

            <Button
              type="submit"
              variant="neural"
              className="w-full h-14 text-lg font-semibold neural-button"
              disabled={loading}
            >
              <span className="relative z-10">
                {loading ? "Processando..." : isSignUp ? "Criar Conta Neural" : "Inicializar Link Neural"}
              </span>
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="w-full text-metallic hover:text-cyan"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Já tem uma conta? Fazer login" : "Não tem conta? Criar nova"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
