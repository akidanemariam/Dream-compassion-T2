import { Link } from "wouter";
import { Heart, Repeat, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";

export function Donate() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        eyebrow="Donate"
        title="Turn compassion into action."
        subtitle="Your gift helps deliver essentials quickly and safely."
        image="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Volunteers handing out food and essentials"
      />

      {/* Ways to give */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-14">
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-3 block">Ways to give</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Choose what works best for you</h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
              Choose a way to give. Links can be updated to PayPal, Donorbox, Stripe, or your preferred provider.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* One-time */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=600&auto=format&fit=crop"
                    alt="Online donation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground mb-3">Online donation</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">Fast, secure giving through an online donation platform.</p>
                  <a href="#" className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors text-sm">
                    Donate online <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Monthly — featured */}
            <FadeIn delay={0.2}>
              <div className="bg-primary rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col relative">
                <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Most impactful
                </div>
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop"
                    alt="Monthly giving"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-secondary mb-5">
                    <Repeat className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white mb-3">Monthly support</h3>
                  <p className="text-white/75 text-sm mb-6 flex-1">Steady giving helps us plan and respond quickly when needs arise.</p>
                  <a href="#" className="inline-flex items-center justify-center gap-2 w-full bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-white/90 transition-colors text-sm">
                    Become a monthly donor <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Partner */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=600&auto=format&fit=crop"
                    alt="Partner giving"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-foreground mb-3">Partner giving</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">Organizations can sponsor a program area or match donations.</p>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 w-full border border-primary text-primary font-semibold py-3 px-6 rounded-full hover:bg-primary hover:text-white transition-colors text-sm">
                    Talk with us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Your gift in action — photo strip */}
      <section className="py-20 bg-background-alt border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-3 block">Your gift in action</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Support that reaches people</h2>
            <p className="text-lg text-muted-foreground mt-3">Partner-led delivery—fast and respectful.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=700&auto=format&fit=crop",
                label: "Essentials",
                desc: "Food & hygiene.",
              },
              {
                image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=700&auto=format&fit=crop",
                label: "Safety",
                desc: "Shelter referrals.",
              },
              {
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=700&auto=format&fit=crop",
                label: "Care",
                desc: "Referrals & support.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-white font-serif font-bold text-xl block">{item.label}</span>
                    <span className="text-white/70 text-sm">{item.desc}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Donor intent */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <FadeIn>
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Donor intent</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">Give where your heart is.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Want to support a specific area? Tell us, and we'll do our best to honor your intent.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Food & essentials", desc: "Emergency meals, groceries, and basic supplies." },
                  { label: "Shelter & safety", desc: "Connections to safe housing and crisis resources." },
                  { label: "Care & healing", desc: "Medical referrals and trauma-informed support." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-background-alt rounded-2xl border border-border">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block mb-0.5">{item.label}</strong>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                  alt="Volunteer helping community"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background-alt border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <FadeIn>
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Questions</span>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Want to donate another way?</h2>
            <p className="text-lg text-muted-foreground mb-8">Contact us for offline giving options or organizational sponsorship.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="px-8 rounded-full">Contact</Button>
              </Link>
              <Link href="/transparency">
                <Button size="lg" variant="outline" className="px-8 rounded-full">Transparency</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
