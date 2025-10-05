import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Star, Users, Save, Code, FileText, Settings } from "lucide-react";
import { toast } from "sonner";

const Workspace = () => {
  const location = useLocation();
  const prompt = location.state?.prompt || "";
  const integrations = location.state?.integrations || [];
  const [isStarred, setIsStarred] = useState(false);
  const [refinedPrompt, setRefinedPrompt] = useState(prompt);

  const handleStar = () => {
    setIsStarred(!isStarred);
    toast.success(isStarred ? "Removed from favorites" : "Added to favorites");
  };

  const handleSave = () => {
    toast.success("Workspace saved successfully");
  };

  const handleCollaborate = () => {
    toast.info("Collaboration invite sent");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your DevOps Workspace</h1>
              <div className="flex items-center gap-2">
                {integrations.map((integration: string) => (
                  <Badge key={integration} variant="secondary">
                    {integration}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleStar}
                className={isStarred ? "text-primary" : ""}
              >
                <Star className={`w-4 h-4 ${isStarred ? "fill-current" : ""}`} />
              </Button>
              <Button variant="outline" size="sm" onClick={handleCollaborate}>
                <Users className="w-4 h-4" />
                Collaborate
              </Button>
              <Button
                variant="hero"
                size="sm"
                onClick={handleSave}
              >
                <Save className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Refine Section */}
            <Card>
              <CardHeader>
                <CardTitle>Refine Your Workflow</CardTitle>
                <CardDescription>
                  Edit and improve your DevOps automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={refinedPrompt}
                  onChange={(e) => setRefinedPrompt(e.target.value)}
                  className="min-h-[150px] mb-4"
                  placeholder="Describe your workflow..."
                />
                <Button variant="hero">
                  Regenerate
                </Button>
              </CardContent>
            </Card>

            {/* Generated Output */}
            <Card>
              <CardHeader>
                <Tabs defaultValue="code">
                  <TabsList>
                    <TabsTrigger value="code">
                      <Code className="w-4 h-4 mr-2" />
                      Code
                    </TabsTrigger>
                    <TabsTrigger value="docs">
                      <FileText className="w-4 h-4 mr-2" />
                      Documentation
                    </TabsTrigger>
                    <TabsTrigger value="config">
                      <Settings className="w-4 h-4 mr-2" />
                      Configuration
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="code" className="mt-4">
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      <pre className="text-foreground/80">
{`# CI/CD Pipeline Configuration
name: Deploy to Staging

on:
  pull_request:
    types: [opened, synchronize]
    
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Salesforce
        run: |
          sfdx force:source:deploy
      - name: Notify Slack
        run: |
          echo "Deployment complete"`}
                      </pre>
                    </div>
                  </TabsContent>
                  <TabsContent value="docs" className="mt-4">
                    <div className="prose prose-sm max-w-none">
                      <h3>Workflow Documentation</h3>
                      <p>This automated workflow will:</p>
                      <ul>
                        <li>Trigger on PR approval</li>
                        <li>Deploy to Salesforce staging org</li>
                        <li>Send notifications to Slack</li>
                        <li>Create deployment logs in Confluence</li>
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="config" className="mt-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Auto-deploy on approval</span>
                        <Badge>Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Slack notifications</span>
                        <Badge>Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Test coverage required</span>
                        <Badge variant="secondary">80%</Badge>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="font-medium">Workflow generated</span>
                  </div>
                  <p className="text-muted-foreground text-xs ml-4">Just now</p>
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-muted"></div>
                    <span className="font-medium">Connected to Salesforce</span>
                  </div>
                  <p className="text-muted-foreground text-xs ml-4">2 minutes ago</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Collaborators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="ml-4">
                    <Users className="w-3 h-3 mr-1" />
                    Invite
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
