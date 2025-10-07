import { Link } from "react-router-dom";
import copadoLogoVertical from "@/assets/copado-logo-vertical.svg";

interface AuthLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
}

const AuthLayout = ({ children, showBackButton = false }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, hsl(185 60% 85%) 0%, hsl(265 55% 75%) 100%)'
        }}
      />
      
      {/* Content Container */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-12">
        {/* Logo */}
        <div className="mb-8 md:mb-10">
          <img 
            src={copadoLogoVertical} 
            alt="Copado AI" 
            className="h-24 md:h-28 w-auto mx-auto"
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
