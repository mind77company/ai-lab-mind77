import { LoginForm } from "@/components/LoginForm";
import { NeuralBackground } from "@/components/NeuralBackground";

const Login = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <NeuralBackground />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Login form */}
        <LoginForm />
        
        {/* Footer tech accent */}
        <div className="mt-8 text-center">
          <div className="h-px bg-gradient-energy w-40 mx-auto mb-4"></div>
          <p className="text-metallic text-sm font-medium tracking-wider">
            AI AUTOMATION LAB • NEURAL INTERFACE v7.7
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;