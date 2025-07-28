import { LoginForm } from "@/components/LoginForm";
import { VideoDisplay } from "@/components/VideoDisplay";
import { Mind77Logo } from "@/components/Mind77Logo";
import neuralBackground from "@/assets/neural-background.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background relative overflow-hidden"
      style={{
        backgroundImage: `url(${neuralBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Neural pattern overlay */}
      <div className="absolute inset-0 bg-gradient-neural opacity-80"></div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Logo */}
        <Mind77Logo />
        
        {/* Video display */}
        <VideoDisplay />
        
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

export default Index;
