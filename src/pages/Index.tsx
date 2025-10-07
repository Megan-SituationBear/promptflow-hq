import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
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
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-slate-950 font-roboto">
              DevOps Automation
              <br />
              Powered by AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-roboto">
              Transform your workflows with intelligent automation. Connect your tools, describe what you need, and watch AI build it.
            </p>
            <Link to="/auth">
              <Button size="xl" className="mb-4 font-roboto capitalize tracking-tight">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Giant Promo Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/70"></div>
              <div className="relative z-10 p-12 md:p-20 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-roboto">
                  Build Smarter, Deploy Faster
                </h2>
                <p className="text-xl mb-8 max-w-2xl font-roboto opacity-90">
                  Join thousands of teams automating their DevOps workflows with AI. From simple scripts to complex integrations, we've got you covered.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4">
                    <div className="text-3xl font-bold mb-1">50K+</div>
                    <div className="text-sm opacity-80">Workflows Created</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4">
                    <div className="text-3xl font-bold mb-1">99.9%</div>
                    <div className="text-sm opacity-80">Uptime SLA</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4">
                    <div className="text-3xl font-bold mb-1">500+</div>
                    <div className="text-sm opacity-80">Integrations</div>
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
