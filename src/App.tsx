
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Receivables from "./pages/Receivables";
import Integrations from "./pages/Integrations";
import CashFlow from "./pages/CashFlow";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={
            <SidebarProvider>
              <Index />
            </SidebarProvider>
          } />
          <Route path="/receivables" element={
            <SidebarProvider>
              <Receivables />
            </SidebarProvider>
          } />
          <Route path="/integrations" element={
            <SidebarProvider>
              <Integrations />
            </SidebarProvider>
          } />
          <Route path="/cash-flow" element={
            <SidebarProvider>
              <CashFlow />
            </SidebarProvider>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
