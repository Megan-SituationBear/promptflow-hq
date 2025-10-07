import Navigation from "@/components/Navigation";
import ChatInput from "@/components/ChatInput";
import CommunityShowcase from "@/components/CommunityShowcase";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Workflow } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen pb-24">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              DevOps Automation
              <br />
              Powered by AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your workflows with intelligent automation. Connect your tools, describe what you need, and watch AI build it.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="default" size="lg">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
              <Button variant="outline" size="lg">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white border border-border flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-roboto text-slate-950">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Generate complex DevOps workflows in seconds with AI
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white border border-border flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-roboto text-slate-950">Enterprise Ready</h3>
              <p className="text-muted-foreground">
                Built with security and compliance in mind
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white border border-border flex items-center justify-center">
                <Workflow className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-roboto text-slate-950">Seamless Integration</h3>
              <p className="text-muted-foreground">
                Connect Salesforce, Slack, Jira, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <CommunityShowcase />
      
      {/* Chat Input */}
      <ChatInput />
    </div>
  );
};

export default Index;
