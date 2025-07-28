
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
    <Card className="w-full max-w-md mx-auto bg-gradient-neural border-neural shadow-metallic backdrop-blur-sm">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold text-foreground tracking-wide">
          Mind77 Neural Access
        </CardTitle>
        <div className="h-px bg-gradient-energy w-20 mx-auto"></div>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mindAccess" className="text-metallic font-medium">
              Mind Access
            </Label>
            <Input
              id="mindAccess"
              type="text"
              value={mindAccess}
              onChange={(e) => setMindAccess(e.target.value)}
              placeholder="Enter neural identifier..."
              className="glow-focus"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="neuralKey" className="text-metallic font-medium">
              Neural Key
            </Label>
            <Input
              id="neuralKey"
              type="password"
              value={neuralKey}
              onChange={(e) => setNeuralKey(e.target.value)}
              placeholder="Enter authentication key..."
              className="glow-focus"
              required
            />
          </div>

          <Button
            type="submit"
            variant="neural"
            className="w-full h-12 text-lg font-semibold"
          >
            Initialize Neural Link
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
