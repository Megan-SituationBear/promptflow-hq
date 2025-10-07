import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGoogle, FaMicrosoft, FaSalesforce, FaKey } from "react-icons/fa";
import AuthLayout from "@/components/AuthLayout";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionProvider, setConnectionProvider] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/register/accept");
  };

  const handleSSOClick = (provider: string) => {
    setConnectionProvider(provider);
    setIsConnecting(true);
  };

  const handleAcceptConnection = () => {
    navigate("/register/accept");
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
    <AuthLayout gradientVariant="purple">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Let's Start Solving Problems
          </h2>
          <p className="text-sm text-muted-foreground">
            Get started with your free account
          </p>
        </div>

        {/* SSO Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-center gap-2"
            onClick={() => handleSSOClick("Salesforce")}
          >
            <FaSalesforce className="w-4 h-4" />
            <span>Salesforce</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-center gap-2"
            onClick={() => handleSSOClick("Google")}
          >
            <FaGoogle className="w-4 h-4" />
            <span>Google</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-center gap-2"
            onClick={() => handleSSOClick("Microsoft")}
          >
            <FaMicrosoft className="w-4 h-4" />
            <span>Microsoft</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-center gap-2"
            onClick={() => handleSSOClick("SAML")}
          >
            <FaKey className="w-4 h-4" />
            <span>SAML</span>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">
              Or continue with email
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
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
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-11"
            />
          </div>

          <Button 
            type="submit"
            className="w-full"
          >
            Next
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
