import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import InlinePromptInput from "@/components/InlinePromptInput";
import Navigation from "@/components/Navigation";
import copadoLogo from "@/assets/copado-logo.svg";

const Index = () => {
  const navigate = useNavigate();

  const handlePromptSubmit = (prompt: string) => {
    navigate("/workspace/guest", { state: { prompt } });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation state="BeforeLogin" />

      {/* Hero Section - Centered */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <Link to="/" className="inline-block">
            <img 
              src={copadoLogo} 
              alt="Copado AI" 
              className="h-16 md:h-20 w-auto"
            />
          </Link>
          
          <InlinePromptInput 
            onSubmit={handlePromptSubmit}
            placeholder="Describe your DevOps workflow..."
            hideIdeas={true}
          />
        </div>
      </section>

      {/* Top Lab Experiments Section */}
      <section className="py-12 md:py-16 bg-muted px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-roboto text-foreground">
            Top Lab Experiments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link to="/workspace/guest" state={{ prompt: "Create a CI/CD Pipeline Automation with staging approval workflow" }} className="group">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg mb-2 font-roboto text-card-foreground group-hover:text-primary">
                  CI/CD Pipeline Automation
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Automated deployment pipeline with staging approval workflow
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 bg-accent rounded-full">GitHub</span>
                  <span className="text-xs px-2 py-1 bg-accent rounded-full">Docker</span>
                </div>
              </div>
            </Link>
            
            <Link to="/workspace/guest" state={{ prompt: "Set up Kubernetes monitoring with automated scaling" }} className="group">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg mb-2 font-roboto text-card-foreground group-hover:text-primary">
                  Kubernetes Monitor
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Real-time cluster monitoring with automated scaling
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 bg-accent rounded-full">K8s</span>
                  <span className="text-xs px-2 py-1 bg-accent rounded-full">Grafana</span>
                </div>
              </div>
            </Link>
            
            <Link to="/workspace/guest" state={{ prompt: "Create Terraform templates for AWS multi-region deployment" }} className="group">
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg mb-2 font-roboto text-card-foreground group-hover:text-primary">
                  Infrastructure as Code
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Terraform templates for AWS multi-region deployment
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2 py-1 bg-accent rounded-full">Terraform</span>
                  <span className="text-xs px-2 py-1 bg-accent rounded-full">AWS</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center">
            <Link to="/community">
              <Button size="lg" variant="outline" className="font-roboto">
                View All Experiments
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
