import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <Sparkles className="w-6 h-6" />
          DevOps AI
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Community
          </Link>
          <Link to="/auth">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
