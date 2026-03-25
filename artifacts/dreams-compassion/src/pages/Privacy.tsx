import { Link } from "wouter";
import { Lock, Mail, Activity, Eye, ShieldAlert, CheckSquare } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";

export function Privacy() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        eyebrow="Privacy"
        title="Privacy with respect and restraint."
        subtitle="We collect the minimum needed to communicate and operate our programs. We don't sell personal information."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Safe and secure environment"
      />

      {/* What we collect */}
      <section id="data" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-14">
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-3 block">Data</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">What we collect</h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
              The information we may collect depends on how you interact with us.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Mail, title: "Contact information", desc: "Name, email address, phone (optional), and any details you choose to share in messages." },
              { icon: Lock, title: "Donation information", desc: "If you donate through a third-party platform, that provider may process payment details. We may receive your name, email, donation amount, and receipt information." },
              { icon: Activity, title: "Basic site analytics", desc: "We may use privacy-friendly analytics to understand general website usage (e.g., page views), without identifying individuals where feasible." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we use it */}
      <section id="use" className="py-20 bg-background-alt border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <FadeIn>
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Use</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">How we use information</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We use information to respond to messages, coordinate volunteers and partners, and manage donations and communications.
              </p>
              <ul className="space-y-4">
                {[
                  "Respond to inquiries and coordinate volunteer or partnership opportunities",
                  "Send donation receipts and operational updates (when you opt in)",
                  "Improve website performance and accessibility",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border border-border">
                    <CheckSquare className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop"
                  alt="Community trust and transparency"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* When we share */}
      <section id="sharing" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-14">
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-3 block">Sharing</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">When we share data</h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
              We do not sell your personal information. We may share limited information in these cases:
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: ShieldAlert, title: "Service providers", desc: "Vendors that help us operate (e.g., email, donation processing, hosting) may process data on our behalf." },
              { icon: Lock, title: "Legal obligations", desc: "We may disclose information if required by law or to protect safety and rights." },
              { icon: Eye, title: "With your consent", desc: "We may share information when you explicitly ask us to (for example, connecting you to a partner organization)." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your choices */}
      <section id="choices" className="py-20 bg-background-alt border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-white rounded-3xl border border-border shadow-sm p-10 md:p-14 text-center">
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Choices</span>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-5">Your choices</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                You can ask us to update, correct, or delete your contact details, and you can opt out of non-essential communications.
              </p>
              <p className="text-sm text-muted-foreground mb-8 p-4 bg-background rounded-xl border border-border">
                This is a template privacy overview and not legal advice. Consider consulting counsel to ensure compliance with laws applicable to your operations and donors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="px-8 rounded-full">Contact us</Button>
                </Link>
                <Link href="/transparency">
                  <Button size="lg" variant="outline" className="px-8 rounded-full">Transparency</Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
