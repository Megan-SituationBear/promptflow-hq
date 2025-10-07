import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaMicrosoft, FaLinkedin, FaGithub } from "react-icons/fa";
import AuthLayout from "@/components/AuthLayout";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/register/terms");
  };

  const handleSSOClick = () => {
    navigate("/register/terms");
  };

  return (
    <AuthLayout gradientVariant="purple">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Create Your Account
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
            onClick={handleSSOClick}
          >
            <FaGoogle className="w-4 h-4" />
            <span>Google</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-center gap-2"
            onClick={handleSSOClick}
          >
            <FaMicrosoft className="w-4 h-4" />
            <span>Microsoft</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-center gap-2"
            onClick={handleSSOClick}
          >
            <FaLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-center gap-2"
            onClick={handleSSOClick}
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
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
