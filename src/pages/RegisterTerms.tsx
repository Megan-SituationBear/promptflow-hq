import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import AuthLayout from "@/components/AuthLayout";

const RegisterTerms = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (accepted) {
      navigate("/register/questions");
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Terms & Conditions
          </h2>
          <p className="text-sm text-muted-foreground">
            Please review and accept our terms
          </p>
        </div>

        <div className="space-y-4 max-h-64 overflow-y-auto bg-muted/30 rounded-lg p-4">
          <p className="text-sm text-foreground/80">
            By using COPADO AI, you agree to our Terms of Service and Privacy Policy. 
            We collect and process your data to provide our services and improve your experience.
          </p>
          <p className="text-sm text-foreground/80">
            You maintain ownership of your data and can request deletion at any time. 
            We use industry-standard security measures to protect your information.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="terms" 
            checked={accepted}
            onCheckedChange={(checked) => setAccepted(checked === true)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
          >
            I accept the terms and conditions
          </label>
        </div>

        <div className="flex gap-3 pt-4">
          <Button 
            variant="secondary" 
            className="flex-1"
            onClick={() => navigate("/register")}
          >
            Back
          </Button>
          <Button 
            className="flex-1"
            disabled={!accepted}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterTerms;
