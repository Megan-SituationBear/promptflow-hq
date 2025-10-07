import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";

const RegisterPricing = () => {
  const navigate = useNavigate();

  const handleSelectPlan = () => {
    navigate("/home");
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Choose Your Plan
          </h2>
          <p className="text-sm text-muted-foreground">
            Start free, upgrade anytime
          </p>
        </div>

        <div className="space-y-4">
          {/* Free Plan - Highlighted */}
          <div className="border-2 border-primary rounded-lg p-6 bg-primary/5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Starter</h3>
                <p className="text-sm text-muted-foreground">Perfect to get started</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground">Free</div>
              </div>
            </div>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>100 Starter Prompts</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Basic integrations</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Community support</span>
              </li>
            </ul>
            
            <Button 
              className="w-full"
              onClick={handleSelectPlan}
            >
              Start with Free Plan
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Pro</h3>
                <p className="text-sm text-muted-foreground">For power users</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground">$49</div>
                <div className="text-xs text-muted-foreground">/month</div>
              </div>
            </div>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Unlimited prompts</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>All integrations</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Priority support</span>
              </li>
            </ul>
            
            <Button 
              variant="outline"
              className="w-full"
              onClick={handleSelectPlan}
            >
              Upgrade Later
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterPricing;
