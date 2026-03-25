import { Link } from "wouter";
import { HandHeart, Target, BarChart3, ArrowRight, Quote } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";

export function Impact() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        eyebrow="Impact"
        title="Support that reaches people—fast, safely, and respectfully."
        subtitle="Direct assistance through trusted partners—fast and respectful."
        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Community members receiving support"
      />

      {/* Highlight cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6 -mt-12 relative z-10">
            {[
              {
                icon: HandHeart,
                title: "Dignity-first support",
                desc: "We prioritize safety, privacy, and respect for every person.",
                color: "bg-emerald-50 border-emerald-100 text-emerald-700"
              },
              {
                icon: Target,
                title: "Partner-led delivery",
                desc: "Trusted local groups deliver help faster and more safely.",
                color: "bg-amber-50 border-amber-100 text-amber-700"
              },
              {
                icon: BarChart3,
                title: "Clear updates",
                desc: "Simple reporting on what was delivered and where.",
                color: "bg-blue-50 border-blue-100 text-blue-700"
              }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-border shadow-md p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${card.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground mb-3">{card.title}</h3>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* How impact happens */}
      <section id="model" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Model</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">How impact happens</h2>
              <p className="text-lg text-muted-foreground mb-10">
                A simple process designed for speed, safety, and coordination.
              </p>

              <div className="space-y-6">
                {[
                  { num: "1", title: "Identify needs", desc: "We listen to partners and communities to understand urgent needs and gaps." },
                  { num: "2", title: "Coordinate support", desc: "We align resources with trusted local groups to reduce duplication and increase reach." },
                  { num: "3", title: "Deliver resources", desc: "Food, shelter support, and care referrals delivered with dignity and privacy." },
                  { num: "4", title: "Follow up & report", desc: "We document outcomes and share updates to build accountability and trust." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-serif shrink-0 shadow-sm text-sm">
                      {step.num}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=900&auto=format&fit=crop"
                  alt="Community coordinators planning support outreach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section id="accountability" className="relative py-12 md:py-16 border-y border-border overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="relative container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-8">
            <span className="uppercase tracking-widest text-white/60 font-bold text-xs mb-3 block">Accountability</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Transparency builds trust.</h2>
            <p className="text-base text-white/75 mt-2 max-w-xl mx-auto">
              We share plain-language updates on what we did, who we partnered with, and what was delivered.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { title: "Clear updates", desc: "What was delivered, where, and through which partners." },
              { title: "Privacy and dignity", desc: "We protect sensitive details about the people we support." },
              { title: "Donor intent", desc: "We align support to the program you care about when possible." },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/15 backdrop-blur-sm border border-white/25 p-6 rounded-2xl text-center hover:bg-white/25 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white mb-2">{card.title}</h3>
                  <p className="text-white/75 text-sm">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Partners</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">We go further together.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We work with organizations and community leaders with local knowledge and trusted relationships.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Community organizations and mutual aid groups",
                  "Church and local outreach networks",
                  "Social service and case management partners",
                  "Health and counseling referral networks",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <span className="w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/donate">
                <Button size="lg" className="gap-2 rounded-full px-8">
                  Support our work <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=900&auto=format&fit=crop"
                    alt="Community partnership and collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Quote card */}
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-xs">
                  <Quote className="w-6 h-6 text-secondary mb-3 opacity-80" />
                  <p className="font-serif text-sm leading-relaxed italic">
                    "Compassion becomes sustainable when communities lead and partners coordinate."
                  </p>
                  <p className="text-xs text-white/70 mt-3 font-medium">Dreams Compassion</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background-alt border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <FadeIn>
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Support</span>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Your support fuels direct action.</h2>
            <p className="text-lg text-muted-foreground mb-8">Make a donation or connect with us to explore partnerships.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" className="px-8 rounded-full">Donate</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 rounded-full">Contact</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
