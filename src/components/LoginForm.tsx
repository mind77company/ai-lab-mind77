import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const LoginForm = () => {
  const [mindAccess, setMindAccess] = useState("");
  const [neuralKey, setNeuralKey] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Neural access attempted:", { mindAccess, neuralKey });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Neural form container with translucent background */}
      <div className="bg-black/40 backdrop-blur-md border border-neural/30 rounded-lg shadow-neural p-6 md:p-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            Mind77 Neural Access
          </h1>
          <div className="h-px bg-gradient-energy w-20 mx-auto opacity-80"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Mind Access Field */}
          <div className="space-y-3">
            <Label 
              htmlFor="mindAccess" 
              className="text-metallic font-medium text-sm md:text-base tracking-wide"
            >
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
          
          {/* Neural Key Field */}
          <div className="space-y-3">
            <Label 
              htmlFor="neuralKey" 
              className="text-metallic font-medium text-sm md:text-base tracking-wide"
            >
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

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 text-sm md:text-base font-semibold neural-button mt-8"
          >
            Initialize Neural Link
          </Button>
        </form>
      </div>
    </div>
  );
};