import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import { Home } from "@/pages/Home";
import { Programs } from "@/pages/Programs";
import { Impact } from "@/pages/Impact";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Donate } from "@/pages/Donate";
import { Transparency } from "@/pages/Transparency";
import { Privacy } from "@/pages/Privacy";
import NotFound from "@/pages/not-found";

// Layout
import { Layout } from "@/components/layout/Layout";
import { DonateProvider } from "@/context/DonateContext";
import { DonateModal } from "@/components/ui/DonateModal";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/programs" component={Programs} />
        <Route path="/impact" component={Impact} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/donate" component={Donate} />
        <Route path="/transparency" component={Transparency} />
        <Route path="/privacy" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DonateProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <DonateModal />
          <Toaster />
        </DonateProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
