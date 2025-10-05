import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PromptInput = () => {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (prompt.trim()) {
      navigate("/connect", { state: { prompt } });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-lg"></div>
        <div className="relative bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-elevated)]">
          <Textarea
            placeholder="Describe your DevOps workflow... (e.g., 'Create a CI/CD pipeline that deploys to staging when PR is approved')"
            className="min-h-[120px] resize-none border-0 focus-visible:ring-0 text-base"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                handleSubmit();
              }
            }}
          />
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-muted-foreground">
              Press <kbd className="px-2 py-1 bg-muted rounded text-xs">⌘ Enter</kbd> to continue
            </p>
            <Button 
              onClick={handleSubmit} 
              variant="hero"
              size="default"
              disabled={!prompt.trim()}
            >
              <Sparkles className="w-4 h-4" />
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptInput;
