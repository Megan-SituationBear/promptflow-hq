import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Star } from "lucide-react";
import InlinePromptInput from "@/components/InlinePromptInput";
import { toast } from "sonner";

const Workspace = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prompt = location.state?.prompt || "Untitled Workspace";
  const [isStarred, setIsStarred] = useState(false);
  const [createdTime] = useState(new Date());

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return date.toLocaleDateString();
  };

  const handleStar = () => {
    setIsStarred(!isStarred);
    toast.success(isStarred ? "Removed from favorites" : "Added to favorites");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handlePromptSubmit = (newPrompt: string) => {
    toast.success("Processing your request...");
    console.log("New prompt:", newPrompt);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/home")}
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
              onClick={handleStar}
              className={isStarred ? "text-primary" : ""}
            >
              <Star className={`w-5 h-5 ${isStarred ? "fill-current" : ""}`} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 pt-16 pb-32">
        <div className="container mx-auto px-4 py-8">
          {/* Placeholder for workspace content */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2 font-roboto text-slate-950">
                Your Workspace
              </h2>
              <p className="text-muted-foreground">
                Start building your automation by refining your prompt below
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* AI Input at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-4">
        <div className="container mx-auto px-4">
          <InlinePromptInput
            placeholder="Refine your prompt or add more details..."
            onSubmit={handlePromptSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
