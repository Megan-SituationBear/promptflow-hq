import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/components/AuthLayout";

const questions = [
  {
    id: 1,
    title: "Welcome!",
    question: "What Should I Call You?",
    placeholder: "Your Favorite Name",
    field: "name"
  },
  {
    id: 2,
    title: "Tell us more",
    question: "What's Your Role?",
    placeholder: "e.g., DevOps Engineer, SRE, Developer",
    field: "role"
  },
  {
    id: 3,
    title: "Almost there",
    question: "What's Something You Want To Do Less Of?",
    placeholder: "e.g., Manual deployments, Debugging pipelines",
    field: "painPoint"
  }
];

const RegisterQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    name: "",
    role: "",
    painPoint: ""
  });
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/register/pricing");
    }
  };

  const handleSkip = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/register/pricing");
    }
  };

  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQ.field];

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <h2 className="text-xl font-bold text-foreground">
            {currentQ.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            {currentQ.question}
          </h3>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder={currentQ.placeholder}
            value={currentAnswer}
            onChange={(e) => setAnswers({ ...answers, [currentQ.field]: e.target.value })}
            className="h-12 text-center"
            autoFocus
          />

          <div className="flex flex-col gap-3 pt-4">
            <Button 
              className="w-full"
              onClick={handleNext}
              disabled={!currentAnswer.trim()}
            >
              {currentQuestion < questions.length - 1 ? "Next" : "Continue"}
            </Button>
            <Button 
              variant="ghost" 
              className="w-full text-muted-foreground"
              onClick={handleSkip}
            >
              Skip
            </Button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterQuestions;
