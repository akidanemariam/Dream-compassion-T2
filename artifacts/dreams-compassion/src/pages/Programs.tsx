import { Link } from "wouter";
import { HeartHandshake, Shield, Heart, Users, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";

const PROGRAMS = [
  {
    id: "essentials",
    icon: HeartHandshake,
    title: "Emergency essentials",
    subtitle: "Food, hygiene supplies, and urgent basics for families in hardship.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Volunteers handing out food boxes",
    cards: [
      { title: "Food distribution", desc: "Emergency meals and groceries coordinated with local partners." },
      { title: "Hygiene kits", desc: "Hygiene essentials to protect health and dignity." },
      { title: "Urgent assistance", desc: "Fast help for time-sensitive needs." },
    ],
    accent: "from-emerald-500 to-primary"
  },
  {
    id: "safety",
    icon: Shield,
    title: "Shelter & safety",
    subtitle: "Help connecting to safe shelter and crisis resources.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Safe shelter and community space",
    cards: [
      { title: "Emergency shelter referrals", desc: "Connections to shelters and safe housing through partner networks." },
      { title: "Safety planning", desc: "Support for survivors, grounded in safety and choice." },
      { title: "Community navigation", desc: "Help finding trusted local services (housing, legal, food)." },
    ],
    accent: "from-blue-500 to-primary"
  },
  {
    id: "care",
    icon: Heart,
    title: "Medical & emotional support",
    subtitle: "Referrals and support for health and healing.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Compassionate care and support",
    cards: [
      { title: "Medical referrals", desc: "Connections to clinics and health services." },
      { title: "Emotional support", desc: "Compassionate support with privacy and respect." },
      { title: "Case collaboration", desc: "Coordination with partners for continuity of care." },
    ],
    accent: "from-rose-500 to-primary"
  },
  {
    id: "partnerships",
    icon: Users,
    title: "Partnership model",
    subtitle: "We partner locally to deliver support safely and effectively.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Community partners working together",
    cards: [
      { title: "Partner-led delivery", desc: "Work with trusted organizations already serving the community." },
      { title: "Targeted distribution", desc: "Prioritize people affected by crisis, poverty, or violence." },
      { title: "Clear reporting", desc: "Share simple updates with donors and partners." },
    ],
    accent: "from-amber-500 to-primary"
  },
];

export function Programs() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        eyebrow="Programs"
        title="Practical support, delivered through partnerships."
        subtitle="Essentials, safety, and care—delivered with trusted local partners who know their communities."
        image="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Hands holding coins representing community change and giving"
      />

      {/* Programs list */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-28">
            {PROGRAMS.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;
              return (
                <FadeIn key={program.id} id={program.id} className="scroll-mt-24">
                  <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? "lg:direction-rtl" : ""}`}>
                    {/* Image */}
                    <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                        <img
                          src={program.image}
                          alt={program.imageAlt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      {/* Floating label */}
                      <div className="absolute -bottom-5 left-6 bg-white rounded-2xl shadow-lg px-5 py-3 border border-border flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-serif font-bold text-foreground text-sm">{program.title}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={!isEven ? "lg:order-1" : ""}>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{program.title}</h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{program.subtitle}</p>

                      <div className="space-y-4">
                        {program.cards.map((card, i) => (
                          <div key={i} className="flex items-start gap-4 bg-background-alt p-5 rounded-2xl border border-border">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0 mt-0.5">
                              {i + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-1">{card.title}</h4>
                              <p className="text-muted-foreground text-sm">{card.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index < PROGRAMS.length - 1 && (
                    <div className="mt-28 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_80%_50%,_white,_transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Next step</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5">Want to support a specific program?</h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              We can direct your support to the area you care about most.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" variant="secondary" className="px-8 rounded-full gap-2">
                  Donate <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 rounded-full border-white/30 text-white hover:bg-white/10">
                  Partner with us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
