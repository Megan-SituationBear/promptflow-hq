import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Plus, Square, PanelLeftClose } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ChatInputProps {
  onSubmit?: (prompt: string) => void;
  placeholder?: string;
}

const ChatInput = ({ onSubmit, placeholder = "Describe your DevOps workflow..." }: ChatInputProps) => {
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-2">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-lg"
                title="Toggle sidebar"
              >
                <PanelLeftClose className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-lg"
                title="Add attachment"
              >
                <Plus className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-lg"
                title="Visual edits"
              >
                <Square className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex-1 relative">
              <Textarea
                placeholder={placeholder}
                className="min-h-[52px] max-h-[200px] resize-none rounded-lg pr-12 py-3"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                    handleSubmit();
                  }
                }}
              />
              <Button
                onClick={handleSubmit}
                disabled={!prompt.trim()}
                size="icon"
                className="absolute right-2 bottom-2 h-8 w-8 rounded-md"
              >
                <Sparkles className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
