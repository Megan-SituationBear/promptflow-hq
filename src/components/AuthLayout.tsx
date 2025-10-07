import { Link } from "react-router-dom";
import copadoLogoVertical from "@/assets/copado-logo-vertical.svg";

interface AuthLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  gradientVariant?: 'purple' | 'blue' | 'balanced';
}

const AuthLayout = ({ children, showBackButton = false, gradientVariant = 'balanced' }: AuthLayoutProps) => {
  const gradients = {
    purple: 'linear-gradient(135deg, hsl(265 60% 80%) 0%, hsl(285 55% 70%) 100%)',
    blue: 'linear-gradient(135deg, hsl(185 65% 80%) 0%, hsl(200 60% 75%) 100%)',
    balanced: 'linear-gradient(135deg, hsl(185 60% 85%) 0%, hsl(265 55% 75%) 100%)'
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: gradients[gradientVariant]
        }}
      />
      
      {/* Content Container */}
      <div className="min-h-screen flex flex-col items-center px-4 pt-12 md:pt-16 pb-8">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={copadoLogoVertical} 
            alt="Copado AI" 
            className="h-20 md:h-24 w-auto mx-auto"
          />
        </div>

        {/* Main Card */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {children}
          </div>
        </div>
        
        {showBackButton && (
          <Link 
            to="/" 
            className="mt-6 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
