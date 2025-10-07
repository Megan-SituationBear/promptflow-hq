import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    <AuthLayout showBackButton>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Create Your Account
          </h2>
          <p className="text-sm text-muted-foreground">
            Get started with your free account
          </p>
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

          <div className="flex gap-3 pt-4">
            <Button 
              type="button"
              variant="secondary" 
              className="flex-1"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
