import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sparkles, Menu, Search } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <Sparkles className="w-6 h-6" />
          DevOps AI
        </Link>
        
        <div className="flex items-center gap-6 flex-1 justify-center">
          <span className="text-sm font-medium text-foreground">Recent</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Search className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
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
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] bg-white">
              <nav className="flex flex-col gap-1 mt-8">
                <Link
                  to="/workspace"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm hover:bg-muted rounded-lg transition-colors"
                >
                  All My Work
                </Link>
                <Link
                  to="/library"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm hover:bg-muted rounded-lg transition-colors"
                >
                  Library
                </Link>
                <Link
                  to="/team"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm hover:bg-muted rounded-lg transition-colors"
                >
                  My Team Workspace
                </Link>
                <div className="border-t border-border my-2"></div>
                <Link
                  to="/account"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm hover:bg-muted rounded-lg transition-colors"
                >
                  My Account
                </Link>
                <Link
                  to="/billing"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm hover:bg-muted rounded-lg transition-colors"
                >
                  Billing
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm hover:bg-muted rounded-lg transition-colors"
                >
                  Settings
                </Link>
                <Link
                  to="/team-setup"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm hover:bg-muted rounded-lg transition-colors"
                >
                  Team Setup
                </Link>
                <div className="border-t border-border my-2"></div>
                <button
                  onClick={() => {
                    setOpen(false);
                    // Add logout logic here
                  }}
                  className="px-4 py-3 text-sm hover:bg-muted rounded-lg transition-colors text-left"
                >
                  Log Out
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
