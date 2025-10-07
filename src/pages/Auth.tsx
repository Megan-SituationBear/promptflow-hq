import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { SiSalesforce } from "react-icons/si";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionProvider, setConnectionProvider] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleSSO = (provider: string) => {
    setConnectionProvider(provider);
    setIsConnecting(true);
  };

  const handleAcceptConnection = () => {
    navigate("/home");
  };

  if (isConnecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {connectionProvider === "Google" && <FcGoogle className="w-8 h-8" />}
              {connectionProvider === "Microsoft" && (
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#f25022" d="M1 1h10v10H1z"/>
                  <path fill="#00a4ef" d="M13 1h10v10H13z"/>
                  <path fill="#7fba00" d="M1 13h10v10H1z"/>
                  <path fill="#ffb900" d="M13 13h10v10H13z"/>
                </svg>
              )}
              {connectionProvider === "Salesforce" && <SiSalesforce className="w-8 h-8 text-blue-500" />}
              {connectionProvider === "Okta" && <Mail className="w-8 h-8 text-slate-600" />}
            </div>
            <CardTitle className="text-2xl font-roboto text-slate-950">
              Connect to {connectionProvider}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground font-roboto">
              {connectionProvider} would like to access your DevOps AI account
            </p>
            <div className="space-y-2 bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium text-slate-950">This will allow {connectionProvider} to:</p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Access your basic profile information</li>
                <li>• Create and manage workflows on your behalf</li>
                <li>• View your project history</li>
              </ul>
            </div>
            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                className="flex-1 font-roboto"
                onClick={() => setIsConnecting(false)}
              >
                Cancel
              </Button>
              <Button 
                className="flex-1 font-roboto"
                onClick={handleAcceptConnection}
              >
                Accept & Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl font-roboto text-slate-950 capitalize tracking-tight">
            <Sparkles className="w-6 h-6" />
            DevOps AI
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto py-12">
          {/* Registration Form */}
          <div className="flex-1">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl font-roboto text-slate-950">Get Started Free</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* SSO Buttons */}
                <div className="space-y-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full justify-start font-roboto hover:bg-accent"
                    onClick={() => handleSSO("Google")}
                  >
                    <FcGoogle className="w-5 h-5 mr-3" />
                    Continue with Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full justify-start font-roboto hover:bg-accent"
                    onClick={() => handleSSO("Salesforce")}
                  >
                    <SiSalesforce className="w-5 h-5 mr-3 text-blue-500" />
                    Continue with Salesforce
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full justify-start font-roboto hover:bg-accent"
                    onClick={() => handleSSO("Microsoft")}
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                      <path fill="#f25022" d="M1 1h10v10H1z"/>
                      <path fill="#00a4ef" d="M13 1h10v10H13z"/>
                      <path fill="#7fba00" d="M1 13h10v10H1z"/>
                      <path fill="#ffb900" d="M13 13h10v10H13z"/>
                    </svg>
                    Continue with Microsoft
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full justify-start font-roboto hover:bg-accent"
                    onClick={() => handleSSO("Okta")}
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Continue with SAML/Okta
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-card px-3 text-muted-foreground font-roboto">Or, use email</span>
                  </div>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-roboto text-slate-950">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-roboto text-slate-950">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full font-roboto">
                    Next
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center font-roboto">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Promo Area */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-950 font-roboto">Free Plan Includes:</h3>
              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-950 font-roboto">Unlimited AI-Powered Workflows</h4>
                      <p className="text-muted-foreground font-roboto">
                        Generate and deploy unlimited DevOps automation workflows with our advanced AI engine. No limits on creativity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-950 font-roboto">500+ Integration Connectors</h4>
                      <p className="text-muted-foreground font-roboto">
                        Connect to all your favorite tools - Salesforce, Jira, Slack, GitHub, and 500+ more integrations out of the box.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
