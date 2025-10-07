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
            Almost There!
          </h2>
          <p className="text-sm text-muted-foreground">
            Just a few more details to get you started
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="terms" 
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked === true)}
              className="mt-1"
            />
            <label
              htmlFor="terms"
              className="text-sm leading-relaxed text-foreground cursor-pointer"
            >
              By continuing, you agree to receive emails from COPADO AI and accept our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </label>
          </div>
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
