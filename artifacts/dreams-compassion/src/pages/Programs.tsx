import { Link } from "wouter";
import { HeartHandshake, Shield, Heart, Users, CheckCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Programs() {
  const programs = [
    {
      id: "essentials",
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Emergency essentials",
      description: "When crisis hits, basic needs shouldn't be a burden. We provide immediate, tangible support to keep families fed, clean, and stable.",
      cards: [
        "Food distribution (groceries and hot meals)",
        "Hygiene kits and personal care items",
        "Urgent assistance for daily necessities"
      ]
    },
    {
      id: "safety",
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Shelter & safety",
      description: "Everyone deserves a safe place to rest. We help individuals navigate complex systems to find emergency housing and safety resources.",
      cards: [
        "Emergency shelter referrals",
        "Safety planning resources",
        "Community navigation assistance"
      ]
    },
    {
      id: "care",
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Medical & emotional support",
      description: "Healing requires more than physical safety. We connect people with critical medical care and mental health professionals.",
      cards: [
        "Medical clinic referrals",
        "Emotional and mental health support",
        "Case collaboration with local providers"
      ]
    },
    {
      id: "partnerships",
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Partnership model",
      description: "We don't do this alone. We empower existing community organizations by providing the resources they need to serve their neighborhoods better.",
      cards: [
        "Partner-led delivery networks",
        "Targeted, context-aware distribution",
        "Clear reporting and feedback loops"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background">
      <PageHeader 
        title="Practical support, delivered through partnerships." 
        subtitle="Our programs are designed to meet urgent needs quickly while respecting the dignity of every person we serve."
      />

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24">
            {programs.map((program, index) => (
              <FadeIn key={program.id} id={program.id} delay={0.1} className="scroll-mt-32">
                <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
                  {/* Left Col: Header */}
                  <div className="sticky top-32">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      {program.icon}
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{program.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  
                  {/* Right Col: Details */}
                  <div className="grid sm:grid-cols-1 gap-4">
                    {program.cards.map((card, i) => (
                      <div key={i} className="bg-white border border-border p-6 rounded-2xl shadow-sm flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
                        <span className="text-lg font-medium text-foreground">{card}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {index < programs.length - 1 && (
                  <hr className="mt-24 border-border" />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Want to support a specific program?</h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              You can direct your donation to the program area that means the most to you, or partner with us to expand our reach.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" variant="secondary" className="px-8 text-lg">Donate</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">Partner with us</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
