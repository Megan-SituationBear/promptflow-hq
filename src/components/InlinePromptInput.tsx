import { useState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Plus, FileImage, FileText, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import SendButton from "@/assets/send-button.svg";

interface InlinePromptInputProps {
  placeholder?: string;
  onSubmit?: (prompt: string) => void;
}

const InlinePromptInput = ({ 
  placeholder = "How can I help you today?", 
  onSubmit 
}: InlinePromptInputProps) => {
  const [prompt, setPrompt] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();

  const ideaPills = [
    "Solve A Case About ...",
    "Build A ...",
    "Optimize ..."
  ];

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

  const handlePillClick = (pillText: string) => {
    const textWithCursor = pillText.replace("...", "");
    setPrompt(textWithCursor);
    textareaRef.current?.focus();
    
    // Set cursor position at the end
    setTimeout(() => {
      if (textareaRef.current) {
        const pos = textWithCursor.length;
        textareaRef.current.setSelectionRange(pos, pos);
      }
    }, 0);
  };

  const integrationOptions = [
    { icon: FileImage, label: "+ image" },
    { icon: FileText, label: "+ document" },
    { icon: MessageSquare, label: "+ Slack Channel" },
    { icon: MessageSquare, label: "+ Salesforce Org(s)" },
    { icon: MessageSquare, label: "+ Confluence" },
    { icon: MessageSquare, label: "+ Jira" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 border-2 border-blue-300 rounded-3xl shadow-lg overflow-hidden transition-all duration-300">
        <div className="relative flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-border bg-background hover:bg-accent transition-colors flex items-center justify-center">
                <Plus className="w-5 h-5 text-muted-foreground" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-2" align="start">
              <div className="space-y-1">
                {integrationOptions.map((option, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left"
                  >
                    <option.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{option.label}</span>
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left border-t border-border mt-1 pt-2">
                  <span className="text-sm text-primary font-medium">more integrations &gt;</span>
                </button>
              </div>
            </PopoverContent>
          </Popover>

          <Textarea
            ref={textareaRef}
            placeholder={placeholder}
            className={`flex-1 resize-none border-0 focus-visible:ring-0 text-sm sm:text-base bg-transparent transition-all duration-300 ${
              isFocused ? "min-h-[160px]" : "min-h-[60px]"
            }`}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                handleSubmit();
              }
              if (e.key === "Tab" && prompt.includes("...")) {
                e.preventDefault();
                const nextDotIndex = prompt.indexOf("...");
                if (nextDotIndex !== -1 && textareaRef.current) {
                  textareaRef.current.setSelectionRange(nextDotIndex, nextDotIndex + 3);
                }
              }
            }}
          />

          <button
            onClick={handleSubmit}
            disabled={!prompt.trim()}
            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            <img src={SendButton} alt="Send" className="w-full h-full" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
        <span className="text-sm text-muted-foreground">Try:</span>
        {ideaPills.map((pill, idx) => (
          <button
            key={idx}
            onClick={() => handlePillClick(pill)}
            className="px-4 py-2 rounded-full border border-border bg-background hover:bg-accent transition-colors text-sm"
          >
            {pill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InlinePromptInput;
