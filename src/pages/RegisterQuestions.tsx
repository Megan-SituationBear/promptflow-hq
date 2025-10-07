import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/components/AuthLayout";
import { Beaker } from "lucide-react";

interface Question {
  id: number;
  title: string;
  question: string;
  placeholder?: string;
  field: string;
  type: 'text' | 'choice';
  choices?: string[];
}

const questions: Question[] = [
  {
    id: 1,
    title: "Welcome!",
    question: "What's your favorite name?",
    placeholder: "Your Favorite Name",
    field: "name",
    type: "text"
  },
  {
    id: 2,
    title: "Tell us more",
    question: "How can I free up your day?",
    field: "freeUpDay",
    type: "choice",
    choices: [
      "Identify & template repetitive work",
      "Translate my Salesforce work into plain language",
      "Scan & identify and fix trending support issues",
      "Tell me what Salesforce work I do on repeat",
      "Proactively clean up my org"
    ]
  },
  {
    id: 3,
    title: "Almost there",
    question: "Want to work:",
    field: "workPreference",
    type: "choice",
    choices: ["on my own", "with my team", "manage my team"]
  }
];

const RegisterQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    name: "",
    freeUpDay: "",
    workPreference: ""
  });
  const [isAnimating, setIsAnimating] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/register/pricing");
    }
  };

  const handleChoiceClick = (choice: string) => {
    const currentQ = questions[currentQuestion];
    setAnswers({ ...answers, [currentQ.field]: choice });
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate("/register/pricing");
      }
    }, 300);
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
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <AuthLayout gradientVariant="balanced">
      <div className="space-y-8">
        {/* Beaker Progress */}
        <div className="flex justify-center">
          <div className="relative">
            <Beaker className="w-16 h-16 text-foreground/20" strokeWidth={1.5} />
            <div 
              className="absolute bottom-0 left-0 right-0 bg-primary/30 rounded-b-lg transition-all duration-500 ease-out"
              style={{ height: `${progressPercentage}%` }}
            />
            <div 
              className="absolute bottom-0 left-0 right-0 bg-primary/60 blur-sm rounded-b-lg transition-all duration-500 ease-out"
              style={{ height: `${progressPercentage * 0.6}%` }}
            />
          </div>
        </div>

        <div 
          className={`space-y-6 transition-all duration-300 ${
            isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
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
            {currentQ.type === 'text' ? (
              <>
                <Input
                  type="text"
                  placeholder={currentQ.placeholder}
                  value={currentAnswer}
                  onChange={(e) => setAnswers({ ...answers, [currentQ.field]: e.target.value })}
                  className="h-12 text-center"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && currentAnswer.trim()) {
                      handleNext();
                    }
                  }}
                />
                <button
                  className="w-full h-12 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleNext}
                  disabled={!currentAnswer.trim()}
                >
                  {currentQuestion < questions.length - 1 ? "Next" : "Continue"}
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {currentQ.choices?.map((choice) => (
                  <button
                    key={choice}
                    onClick={() => handleChoiceClick(choice)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                      currentAnswer === choice
                        ? 'border-primary bg-primary/10 shadow-md'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                  >
                    <span className="text-sm md:text-base font-medium text-foreground">
                      {choice}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={handleSkip}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            Skip
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterQuestions;
