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

  return (
    <AuthLayout>
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
            onClick={() => {/* TODO: Google SSO */}}
          >
            <FaGoogle className="w-4 h-4" />
            <span className="hidden sm:inline">Google</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-center gap-2"
            onClick={() => {/* TODO: Microsoft SSO */}}
          >
            <FaMicrosoft className="w-4 h-4" />
            <span className="hidden sm:inline">Microsoft</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-center gap-2"
            onClick={() => {/* TODO: LinkedIn SSO */}}
          >
            <FaLinkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-11 flex items-center justify-center gap-2"
            onClick={() => {/* TODO: GitHub SSO */}}
          >
            <FaGithub className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
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

          <Button 
            type="submit"
            className="w-full"
          >
            Next
          </Button>
          
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
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
