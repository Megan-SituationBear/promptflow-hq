import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sparkles, Menu, ArrowLeft } from "lucide-react";
import { useState } from "react";

type NavigationState = "BeforeLogin" | "HomeMajorPages" | "SubPages";

interface NavigationProps {
  state?: NavigationState;
  pageTitle?: string;
}

const Navigation = ({ state = "BeforeLogin", pageTitle }: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // BeforeLogin State - Landing page navigation
  if (state === "BeforeLogin") {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 transition-colors">
            <Sparkles className="w-6 h-6" />
            DevOps AI
          </Link>

          <div className="flex items-center gap-2">
            <Link to="/auth">
              <Button variant="default" size="sm" className="font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600">
                Login
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="hero" size="sm" className="font-roboto capitalize tracking-tight hover:text-indigo-600">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  // SubPages State - Detail pages with back button
  if (state === "SubPages") {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate(-1)}
              className="h-8 w-8 hover:text-indigo-600"
            >
              <ArrowLeft className="w-5 h-5 text-slate-950" />
            </Button>
            {pageTitle && (
              <h1 className="font-bold text-lg font-roboto text-slate-950 capitalize tracking-tight">
                {pageTitle}
              </h1>
            )}
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-indigo-600">
                <Menu className="w-5 h-5 text-slate-950" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] bg-white">
              <nav className="flex flex-col gap-1 mt-8">
                <Link
                  to="/home"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/workspace"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  All My Work
                </Link>
                <Link
                  to="/library"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  Library
                </Link>
                <Link
                  to="/team"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  My Team Workspace
                </Link>
                <div className="border-t border-border my-2"></div>
                <Link
                  to="/account"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  My Account
                </Link>
                <Link
                  to="/billing"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  Billing
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  Settings
                </Link>
                <div className="border-t border-border my-2"></div>
                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/");
                  }}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors text-left"
                >
                  Log Out
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    );
  }

  // HomeMajorPages State - Main app navigation
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-2 font-bold text-xl font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 transition-colors">
          <Sparkles className="w-6 h-6" />
          DevOps AI
        </Link>

        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-indigo-600">
                <Menu className="w-5 h-5 text-slate-950" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] bg-white">
              <nav className="flex flex-col gap-1 mt-8">
                <Link
                  to="/home"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/workspace"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  All My Work
                </Link>
                <Link
                  to="/library"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  Library
                </Link>
                <Link
                  to="/community"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  Community
                </Link>
                <Link
                  to="/team"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  My Team Workspace
                </Link>
                <div className="border-t border-border my-2"></div>
                <Link
                  to="/account"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  My Account
                </Link>
                <Link
                  to="/billing"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  Billing
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  Settings
                </Link>
                <Link
                  to="/team-setup"
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors"
                >
                  Team Setup
                </Link>
                <div className="border-t border-border my-2"></div>
                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/");
                  }}
                  className="px-4 py-3 text-sm font-roboto text-slate-950 capitalize tracking-tight hover:text-indigo-600 hover:bg-muted rounded-lg transition-colors text-left"
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
