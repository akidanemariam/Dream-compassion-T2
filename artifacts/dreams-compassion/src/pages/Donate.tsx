import { Link } from "wouter";
import { Heart, Repeat, Handshake, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Donate() {
  return (
    <div className="flex flex-col w-full bg-background">
      <PageHeader 
        title="Turn compassion into action." 
        subtitle="Your financial support translates directly into hot meals, safe nights, and critical care for families who need it most."
      />

      {/* Donation Options */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card className="h-full border-primary/20 shadow-md hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <CardHeader>
                  <Heart className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-2xl">One-time gift</CardTitle>
                  <CardDescription className="text-base h-16">
                    Fast, secure giving through our online donation platform to meet immediate needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <a href="#" className="gap-2">Donate online <ArrowRight className="w-4 h-4"/></a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Card className="h-full border-secondary/20 shadow-md hover:shadow-xl transition-all relative overflow-hidden bg-primary text-primary-foreground">
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
                <CardHeader>
                  <Repeat className="w-10 h-10 text-secondary mb-4" />
                  <CardTitle className="text-2xl text-white">Monthly support</CardTitle>
                  <CardDescription className="text-base h-16 text-white/80">
                    Steady giving helps us plan ahead and respond rapidly when sudden crises arise.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="secondary" asChild>
                    <a href="#" className="gap-2">Become a monthly donor <ArrowRight className="w-4 h-4"/></a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="h-full border-primary/20 shadow-md hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <CardHeader>
                  <Handshake className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-2xl">Partner giving</CardTitle>
                  <CardDescription className="text-base h-16">
                    Organizations can sponsor specific program areas or set up donation matching.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact" className="gap-2">Talk with us <ArrowRight className="w-4 h-4"/></Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-4">
            <FadeIn delay={0.1} className="aspect-square rounded-2xl overflow-hidden shadow-lg relative group">
              {/* fresh produce food donation box */}
              <img src="https://pixabay.com/get/g19f4a56c04064d63b616181b4ecfa4c23f3f5b4ab8dca50aad012ecba23548acd27a97e369ab8f9ad9478f843cd1d8e025f8de7f5d8cfd2d9ed6a2c25e049c4a_1280.jpg" alt="Essentials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-serif font-bold text-xl">Essentials</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="aspect-square rounded-2xl overflow-hidden shadow-lg relative group">
              {/* safe warm shelter bed */}
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop" alt="Safety" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-serif font-bold text-xl">Safety</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="aspect-square rounded-2xl overflow-hidden shadow-lg relative group">
              {/* compassionate medical care hands */}
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop" alt="Care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-serif font-bold text-xl">Care</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Donor Intent */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Honor your intent</h2>
              <p className="text-lg text-muted-foreground">
                You can direct your gift to where you feel most called to help. 100% of restricted donations go to that specific cause.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FadeIn delay={0.1} className="bg-white p-6 rounded-xl border border-border text-center shadow-sm">
              <h3 className="font-bold text-foreground mb-2">Food & Essentials</h3>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white p-6 rounded-xl border border-border text-center shadow-sm">
              <h3 className="font-bold text-foreground mb-2">Shelter & Safety</h3>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-white p-6 rounded-xl border border-border text-center shadow-sm">
              <h3 className="font-bold text-foreground mb-2">Care & Healing</h3>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-6">Want to donate another way?</h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              If you'd prefer to send a check, donate stock, or discuss planned giving, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">Contact us</Button>
              </Link>
              <Link href="/transparency">
                <Button size="lg" variant="outline" className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">Read our transparency promise</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
