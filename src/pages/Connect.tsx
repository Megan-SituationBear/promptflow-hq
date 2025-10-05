import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import { Cloud, MessageSquare, BookOpen, Ticket } from "lucide-react";

const integrations = [
  {
    id: "slack",
    name: "Slack",
    icon: MessageSquare,
    description: "Get notifications and collaborate",
    optional: true,
  },
  {
    id: "confluence",
    name: "Confluence",
    icon: BookOpen,
    description: "Document your workflows",
    optional: true,
  },
  {
    id: "jira",
    name: "Jira",
    icon: Ticket,
    description: "Track issues and sprints",
    optional: true,
  },
];

const Connect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prompt = location.state?.prompt || "";
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);
  const [salesforceConnected, setSalesforceConnected] = useState(false);

  const handleIntegrationToggle = (id: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (!salesforceConnected) return;
    navigate("/workspace", { 
      state: { 
        prompt, 
        integrations: ["salesforce", ...selectedIntegrations] 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Connect Your Tools</h1>
            <p className="text-muted-foreground text-lg">
              Let's set up your integrations to get started
            </p>
          </div>

          {/* Salesforce - Required */}
          <Card className="mb-6 shadow-[var(--shadow-elevated)] border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Cloud className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    Salesforce
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Required</span>
                  </CardTitle>
                  <CardDescription>
                    Connect your Salesforce org to enable DevOps automation
                  </CardDescription>
                </div>
                <Button
                  variant={salesforceConnected ? "outline" : "hero"}
                  onClick={() => setSalesforceConnected(!salesforceConnected)}
                >
                  {salesforceConnected ? "Connected ✓" : "Connect"}
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Optional Integrations */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold">Optional Integrations</h3>
            {integrations.map((integration) => {
              const Icon = integration.icon;
              const isSelected = selectedIntegrations.includes(integration.id);
              
              return (
                <Card
                  key={integration.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "border-primary shadow-[var(--shadow-glow)]"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => handleIntegrationToggle(integration.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => handleIntegrationToggle(integration.id)}
                      />
                      <div className="p-2 rounded-lg bg-muted">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base">{integration.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {integration.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Prompt Preview */}
          {prompt && (
            <Card className="mb-8 bg-muted/50">
              <CardHeader>
                <CardTitle className="text-base">Your Prompt</CardTitle>
                <CardDescription className="text-foreground/80">
                  {prompt}
                </CardDescription>
              </CardHeader>
            </Card>
          )}

          <div className="flex justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={handleContinue}
              disabled={!salesforceConnected}
            >
              Continue to Workspace
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
