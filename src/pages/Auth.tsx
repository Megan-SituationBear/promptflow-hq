import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGoogle, FaMicrosoft, FaSalesforce, FaKey } from "react-icons/fa";
import AuthLayout from "@/components/AuthLayout";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionProvider, setConnectionProvider] = useState("");
  const [lastUsedSSO, setLastUsedSSO] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const lastSSO = localStorage.getItem("lastUsedSSO");
    setLastUsedSSO(lastSSO);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  const handleSSO = (provider: string) => {
    localStorage.setItem("lastUsedSSO", provider);
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
              {connectionProvider === "Salesforce" && <FaSalesforce className="w-8 h-8" />}
              {connectionProvider === "Google" && <FaGoogle className="w-8 h-8" />}
              {connectionProvider === "Microsoft" && <FaMicrosoft className="w-8 h-8" />}
              {connectionProvider === "SAML" && <FaKey className="w-8 h-8" />}
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Connect to {connectionProvider}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground">
              {connectionProvider} would like to access your COPADO AI account
            </p>
            <div className="space-y-2 bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium text-foreground">This will allow {connectionProvider} to:</p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Access your basic profile information</li>
                <li>• Create and manage workflows on your behalf</li>
                <li>• View your project history</li>
              </ul>
            </div>
            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setIsConnecting(false)}
              >
                Cancel
              </Button>
              <Button 
                className="flex-1"
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
    <AuthLayout showBackButton={false} gradientVariant="blue">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Sign In
          </h2>
          <p className="text-sm text-muted-foreground">
            Welcome back! Sign in to your account
          </p>
        </div>

        {/* SSO Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-between gap-2 relative"
            onClick={() => handleSSO("Salesforce")}
          >
            <div className="flex items-center gap-2">
              <FaSalesforce className="w-4 h-4" />
              <span>Salesforce</span>
            </div>
            {lastUsedSSO === "Salesforce" && (
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                Used Last Time
              </Badge>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-between gap-2 relative"
            onClick={() => handleSSO("Google")}
          >
            <div className="flex items-center gap-2">
              <FaGoogle className="w-4 h-4" />
              <span>Google</span>
            </div>
            {lastUsedSSO === "Google" && (
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                Used Last Time
              </Badge>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-between gap-2 relative"
            onClick={() => handleSSO("Microsoft")}
          >
            <div className="flex items-center gap-2">
              <FaMicrosoft className="w-4 h-4" />
              <span>Microsoft</span>
            </div>
            {lastUsedSSO === "Microsoft" && (
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                Used Last Time
              </Badge>
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-between gap-2 relative"
            onClick={() => handleSSO("SAML")}
          >
            <div className="flex items-center gap-2">
              <FaKey className="w-4 h-4" />
              <span>SAML</span>
            </div>
            {lastUsedSSO === "SAML" && (
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                Used Last Time
              </Badge>
            )}
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-3 text-muted-foreground">Or continue with email</span>
          </div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Auth;
