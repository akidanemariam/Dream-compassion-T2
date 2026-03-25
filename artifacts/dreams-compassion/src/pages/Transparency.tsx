import { Link } from "wouter";
import { FileCheck2, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";

export function Transparency() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        eyebrow="Transparency"
        title="Trust through clarity."
        subtitle="We commit to clear communication about our work, partners, and how support is delivered."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop"
        imageAlt="People in open, honest discussion"
      />

      {/* Principles */}
      <section id="principles" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-14">
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-3 block">Principles</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">How we earn trust</h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-xl mx-auto">Commitments that guide our outreach and stewardship.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: HeartHandshake,
                title: "Dignity-first storytelling",
                desc: "We avoid exploiting images or details that put people at risk or remove their agency.",
                accent: "bg-emerald-50 border-emerald-100 text-emerald-700"
              },
              {
                icon: ShieldCheck,
                title: "Minimize harm",
                desc: "We reduce exposure of sensitive information, especially for survivors of violence or trafficking.",
                accent: "bg-blue-50 border-blue-100 text-blue-700"
              },
              {
                icon: FileCheck2,
                title: "Plain-language updates",
                desc: "We aim to communicate needs and outcomes clearly to donors and partners.",
                accent: "bg-amber-50 border-amber-100 text-amber-700"
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-3xl border border-border shadow-sm p-8 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 ${item.accent}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safeguarding — with image */}
      <section id="safeguarding" className="py-20 bg-background-alt border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=900&auto=format&fit=crop"
                  alt="Safety and trust"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Safeguarding</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">Safety and privacy matter</h2>
              <p className="text-lg text-muted-foreground mb-8">We protect privacy and safety—especially for vulnerable people.</p>

              <div className="space-y-5">
                {[
                  { title: "Do no harm", desc: "We avoid sharing identifying details about recipients unless consent and safety are assured." },
                  { title: "Partner vetting", desc: "We prefer trusted organizations with established practices for protecting vulnerable individuals." },
                  { title: "Secure handling", desc: "We aim to limit access to sensitive communications and maintain basic operational security." },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-border shadow-sm flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0 text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Donor commitments */}
      <section id="donors" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn>
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Donors</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">Our commitment to donors</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We use contributions responsibly, communicate honestly, and respect donor intent when possible.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Use funds consistent with stated purpose and donor intent (when feasible)",
                  "Share updates about program activity and outcomes",
                  "Respect donor privacy and communication preferences",
                  "Provide a clear way to ask questions or raise concerns",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8">Contact us</Button>
                </Link>
                <Link href="/impact">
                  <Button size="lg" variant="outline" className="rounded-full px-8">Impact</Button>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative bg-primary text-white p-12 rounded-3xl shadow-xl overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/5" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-secondary/10" />
                <span className="text-8xl font-serif text-white/10 leading-none block -mt-4 mb-4">"</span>
                <p className="text-2xl md:text-3xl font-serif font-bold leading-snug relative z-10">
                  Transparency isn't a page—it's a practice.
                </p>
                <div className="mt-8 w-16 h-1 bg-secondary rounded-full" />
                <p className="text-white/60 text-sm mt-4">Dreams Compassion</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background-alt border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <FadeIn>
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Next step</span>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Want to see impact updates here?</h2>
            <p className="text-lg text-muted-foreground mb-8">Add quarterly updates, partner highlights, and reports as they become available.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/impact">
                <Button size="lg" className="px-8 rounded-full">Impact</Button>
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
