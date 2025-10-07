import Navigation from "@/components/Navigation";
import CommunityShowcase from "@/components/CommunityShowcase";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-roboto text-slate-950">Community Showcase</h1>
          <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 px-4">
            Discover and share DevOps workflows created by the community
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search workflows, pipelines, automations..."
              className="pl-10 h-10 md:h-11"
            />
          </div>
        </div>
        <CommunityShowcase />
      </div>
    </div>
  );
};

export default Community;
