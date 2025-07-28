
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export const LoginForm = () => {
  const [mindAccess, setMindAccess] = useState("");
  const [neuralKey, setNeuralKey] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Neural access attempted:", { mindAccess, neuralKey });
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
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="mindAccess" className="text-metallic font-medium tracking-wide">
                Mind Access
              </Label>
              <Input
                id="mindAccess"
                type="text"
                value={mindAccess}
                onChange={(e) => setMindAccess(e.target.value)}
                placeholder="Enter neural identifier..."
                className="neural-input"
                required
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="neuralKey" className="text-metallic font-medium tracking-wide">
                Neural Key
              </Label>
              <Input
                id="neuralKey"
                type="password"
                value={neuralKey}
                onChange={(e) => setNeuralKey(e.target.value)}
                placeholder="Enter authentication key..."
                className="neural-input"
                required
              />
            </div>

            <Button
              type="submit"
              variant="neural"
              className="w-full h-14 text-lg font-semibold neural-button"
            >
              <span className="relative z-10">Initialize Neural Link</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
