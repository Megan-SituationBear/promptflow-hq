import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface InlinePromptInputProps {
  placeholder?: string;
  onSubmit?: (prompt: string) => void;
}

const InlinePromptInput = ({ 
  placeholder = "Describe your DevOps workflow...", 
  onSubmit 
}: InlinePromptInputProps) => {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (prompt.trim()) {
      if (onSubmit) {
        onSubmit(prompt);
      } else {
        navigate("/connect", { state: { prompt } });
      }
      setPrompt("");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="bg-white border-2 border-border rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <Textarea
            placeholder={placeholder}
            className="min-h-[100px] sm:min-h-[120px] resize-none border-0 focus-visible:ring-0 text-sm sm:text-base px-4 sm:px-6 py-4 sm:py-5"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                handleSubmit();
              }
            }}
          />
        </div>
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-t border-border bg-muted/30">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Press <kbd className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-background border border-border rounded text-xs font-mono">⌘ Enter</kbd> to generate
          </p>
          <Button 
            onClick={handleSubmit} 
            disabled={!prompt.trim()}
            size="sm"
            className="h-8 sm:h-9 px-3 sm:px-4"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span className="text-xs sm:text-sm">Generate</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InlinePromptInput;
