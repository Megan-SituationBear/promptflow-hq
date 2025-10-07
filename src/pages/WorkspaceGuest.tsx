import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Star } from "lucide-react";
import InlinePromptInput from "@/components/InlinePromptInput";
import { toast } from "sonner";

const WorkspaceGuest = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prompt = location.state?.prompt || "Untitled Workspace";
  const [createdTime] = useState(new Date());

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return date.toLocaleDateString();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handlePromptSubmit = (newPrompt: string) => {
    // Redirect to register when trying to interact
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <ArrowLeft className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium hidden sm:inline">BACK</span>
          </Button>

          {/* Center - Prompt and Time */}
          <div className="flex-1 text-center px-4 overflow-hidden">
            <h1 className="text-sm sm:text-base font-medium text-foreground truncate">
              {prompt}
            </h1>
            <p className="text-xs text-muted-foreground">
              {formatTime(createdTime)}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="hover:text-primary"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-50 cursor-not-allowed"
              disabled
            >
              <Star className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 pt-16 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* AI Response Preview */}
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  Analyzing your request...
                </h3>
                <p className="text-foreground/80 mb-4">
                  Based on your prompt "{prompt}", I can help you create a comprehensive DevOps workflow that includes:
                </p>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Automated CI/CD pipeline configuration</li>
                  <li>• Integration with your existing tools</li>
                  <li>• Deployment strategies and rollback procedures</li>
                  <li>• Monitoring and alerting setup</li>
                </ul>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  Recommended Integrations
                </h3>
                <p className="text-foreground/80">
                  To implement this workflow effectively, I recommend connecting the following tools...
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 border border-border opacity-75">
                <h3 className="font-bold text-lg mb-3 text-foreground">
                  Next Steps
                </h3>
                <p className="text-foreground/80">
                  Let me break down the implementation into manageable phases...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fade Overlay and CTA */}
        <div className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--background)) 50%)'
            }}
          />
          <div className="absolute bottom-24 left-0 right-0 flex justify-center pointer-events-auto">
            <div className="text-center space-y-4 px-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Sign up to see the full workspace
              </h3>
              <p className="text-muted-foreground">
                Get unlimited access to AI-powered DevOps workflows
              </p>
              <Button 
                size="lg"
                onClick={() => navigate("/register")}
                className="px-8"
              >
                Get Started for Free
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* AI Input at Bottom - Disabled */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-4 opacity-60 pointer-events-none">
        <div className="container mx-auto px-4">
          <InlinePromptInput
            placeholder="Sign up to continue chatting..."
            onSubmit={handlePromptSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceGuest;
