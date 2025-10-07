import Navigation from "@/components/Navigation";
import ChatInput from "@/components/ChatInput";
import CommunityShowcase from "@/components/CommunityShowcase";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
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
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-2 shadow-lg">
              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 font-roboto mb-3">
                  What would you like to automate today?
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground font-roboto">
                  Describe your workflow in plain English and watch AI build it for you
                </p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <CommunityShowcase />

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-muted px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white border-2 shadow-lg">
              <CardHeader className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-slate-950 font-roboto">
                  Manage a Team? Collaborate across roles?
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 font-roboto">
                  We can help with that.
                </p>
                <Button size="lg" className="font-roboto capitalize tracking-tight w-full sm:w-auto">
                  Set Up Team Space
                </Button>
              </CardHeader>
            </Card>
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
