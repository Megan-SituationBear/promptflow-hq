import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import InlinePromptInput from "@/components/InlinePromptInput";

const Index = () => {
  const navigate = useNavigate();

  const handlePromptSubmit = (prompt: string) => {
    navigate("/connect", { state: { prompt } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl font-roboto text-slate-950 capitalize tracking-tight">
            <Sparkles className="w-6 h-6" />
            DevOps AI
          </Link>
          <Link to="/auth">
            <Button variant="ghost" size="sm" className="font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600">
              Login
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-slate-950 font-roboto">
              DevOps Automation
              <br />
              Powered by AI
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto font-roboto px-4">
              Transform your workflows with intelligent automation. Connect your tools, describe what you need, and watch AI build it.
            </p>
            <Link to="/auth">
              <Button size="lg" className="mb-8 font-roboto capitalize tracking-tight w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            
            {/* AI Prompt Input */}
            <InlinePromptInput 
              onSubmit={handlePromptSubmit}
              placeholder="Describe your DevOps workflow... (e.g., 'Create a CI/CD pipeline that deploys to staging when PR is approved')"
            />
          </div>
        </div>
      </section>

      {/* Giant Promo Section */}
      <section className="py-12 md:py-20 bg-muted px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div 
              className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/70"></div>
              <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-20 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-roboto">
                  Build Smarter, Deploy Faster
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl font-roboto opacity-90">
                  Join thousands of teams automating their DevOps workflows with AI. From simple scripts to complex integrations, we've got you covered.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 md:px-6 md:py-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">50K+</div>
                    <div className="text-xs md:text-sm opacity-80">Workflows Created</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 md:px-6 md:py-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">99.9%</div>
                    <div className="text-xs md:text-sm opacity-80">Uptime SLA</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 md:px-6 md:py-4">
                    <div className="text-2xl md:text-3xl font-bold mb-1">500+</div>
                    <div className="text-xs md:text-sm opacity-80">Integrations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
