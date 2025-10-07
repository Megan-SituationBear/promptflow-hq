import Navigation from "@/components/Navigation";
import InlinePromptInput from "@/components/InlinePromptInput";
import CommunityShowcase from "@/components/CommunityShowcase";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const placeholders = [
  "Deploy my app to production...",
  "Set up CI/CD pipeline for React app...",
  "Create automated backup for database...",
  "Configure monitoring alerts...",
  "Automate code review process...",
];

const Home = () => {
  const navigate = useNavigate();
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePromptSubmit = (prompt: string) => {
    navigate("/workspace", { state: { prompt } });
  };

  return (
    <div className="min-h-screen">
      <Navigation state="HomeMajorPages" />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-slate-950 font-roboto">
              What would you like to automate today?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 font-roboto px-4">
              Describe your workflow in plain English and watch AI build it for you
            </p>

            {/* AI Prompt Input */}
            <InlinePromptInput 
              onSubmit={handlePromptSubmit}
              placeholder={placeholders[currentPlaceholder]}
            />
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <CommunityShowcase />

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-muted px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-slate-950 font-roboto">
              Manage a Team? Collaborate across roles?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 font-roboto">
              We can help with that.
            </p>
            <Button size="lg" className="font-roboto capitalize tracking-tight w-full sm:w-auto">
              Set Up Team Space
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
