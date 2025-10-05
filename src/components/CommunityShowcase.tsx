import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork, Users } from "lucide-react";

const projects = [
  {
    title: "Kubernetes Auto-Scaler",
    description: "AI-powered scaling based on traffic patterns",
    stars: 1234,
    forks: 234,
    users: 45,
    tags: ["kubernetes", "scaling", "monitoring"],
  },
  {
    title: "CI/CD Pipeline Generator",
    description: "Generate optimized pipelines for any stack",
    stars: 2456,
    forks: 567,
    users: 89,
    tags: ["ci/cd", "automation", "testing"],
  },
  {
    title: "Infrastructure as Code",
    description: "Convert manual configs to Terraform",
    stars: 3456,
    forks: 789,
    users: 123,
    tags: ["terraform", "iac", "cloud"],
  },
];

const CommunityShowcase = () => {
  return (
    <div className="w-full py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Community Creations
          </h2>
          <p className="text-muted-foreground text-lg">
            See what others are building with DevOps AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:scale-105 cursor-pointer border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.title}</span>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {project.forks}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.users}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityShowcase;
