import Navigation from "@/components/Navigation";
import CommunityShowcase from "@/components/CommunityShowcase";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Community Showcase</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Discover and share DevOps workflows created by the community
          </p>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search workflows, pipelines, automations..."
              className="pl-10"
            />
          </div>
        </div>
        <CommunityShowcase />
      </div>
    </div>
  );
};

export default Community;
