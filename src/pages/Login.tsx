import { LoginForm } from "@/components/LoginForm";
import { NeuralBackground } from "@/components/NeuralBackground";

const Login = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Neural background always visible */}
      <NeuralBackground />
      
      {/* Main content - perfectly centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Login form container */}
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
        
        {/* Footer tech accent */}
        <div className="mt-8 text-center">
          <div className="h-px bg-gradient-energy w-40 mx-auto mb-4 opacity-60"></div>
          <p className="text-metallic text-xs md:text-sm font-medium tracking-wider opacity-80">
            AI AUTOMATION LAB • NEURAL INTERFACE v7.7
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;