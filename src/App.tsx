import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import RegisterAccept from "./pages/RegisterAccept";
import RegisterQuestions from "./pages/RegisterQuestions";
import RegisterPricing from "./pages/RegisterPricing";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Workspace from "./pages/Workspace";
import WorkspaceComplete from "./pages/WorkspaceComplete";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/accept" element={<RegisterAccept />} />
          <Route path="/register/questions" element={<RegisterQuestions />} />
          <Route path="/register/pricing" element={<RegisterPricing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/workspace/complete" element={<WorkspaceComplete />} />
          <Route path="/workspace/:id" element={<Workspace />} />
          <Route path="/community" element={<Community />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
