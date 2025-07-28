import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { NeuralBackground } from './NeuralBackground';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen relative overflow-hidden bg-black">
        <NeuralBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-cyan font-mono text-lg">
            Autenticando acesso neural...
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};