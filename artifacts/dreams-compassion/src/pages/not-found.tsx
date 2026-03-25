import { Link } from "wouter";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn>
          <AlertCircle className="w-20 h-20 text-secondary mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
          </p>
          <Link href="/">
            <Button size="lg" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
