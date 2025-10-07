import Navigation from "@/components/Navigation";
import ChatInput from "@/components/ChatInput";
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
    <div className="min-h-screen pb-24">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-950 font-roboto">
              What would you like to automate today?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-roboto">
              Describe your workflow in plain English and watch AI build it for you
            </p>
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <CommunityShowcase />

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-slate-950 font-roboto">
              Manage a Team? Collaborate across roles?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-roboto">
              We can help with that.
            </p>
            <Button size="xl" className="font-roboto capitalize tracking-tight">
              Set Up Team Space
            </Button>
          </div>
        </div>
      </section>

      {/* Chat Input */}
      <ChatInput 
        onSubmit={handlePromptSubmit}
        placeholder={placeholders[currentPlaceholder]}
      />
    </div>
  );
};

export default Home;
