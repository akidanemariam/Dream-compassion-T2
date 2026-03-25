import { Link } from "wouter";
import { Lock, Mail, Activity, Eye, ShieldAlert, CheckSquare } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";

export function Privacy() {
  return (
    <div className="flex flex-col w-full bg-background">
      <PageHeader 
        title="Privacy with respect and restraint." 
        subtitle="We collect only what we need, use it responsibly, and protect it carefully. This policy explains how we handle your data."
      />

      {/* What we collect */}
      <section id="data" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-12">What we collect</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Contact information</h3>
              <p className="text-muted-foreground">Name, email address, and phone number when you voluntarily submit our contact form or sign up for updates.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <Lock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Donation information</h3>
              <p className="text-muted-foreground">Billing details required to process gifts (processed via secure third-party platforms; we do not store full credit card numbers).</p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <Activity className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Basic site analytics</h3>
              <p className="text-muted-foreground">Anonymized, aggregate data about how visitors navigate our site to help us improve the experience.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How we use it */}
      <section id="use" className="py-24 bg-background-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-serif font-bold mb-8">How we use it</h2>
              <p className="text-lg text-muted-foreground mb-10">
                Your data is used solely to further the mission of Dreams Compassion. Specifically, we use it to:
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                  <CheckSquare className="w-6 h-6 text-secondary shrink-0" />
                  <p className="text-foreground">Process and acknowledge your donations, providing necessary tax receipts.</p>
                </li>
                <li className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                  <CheckSquare className="w-6 h-6 text-secondary shrink-0" />
                  <p className="text-foreground">Respond to your inquiries, volunteer requests, or partnership proposals.</p>
                </li>
                <li className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                  <CheckSquare className="w-6 h-6 text-secondary shrink-0" />
                  <p className="text-foreground">Send occasional updates about our impact (only if you have opted in).</p>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* When we share */}
      <section id="sharing" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">When we share data</h2>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
              We never sell, trade, or rent your personal information to third parties. We only share data in these limited circumstances:
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <ShieldAlert className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Service providers</h3>
              <p className="text-muted-foreground">Trusted platforms that process payments or send our newsletters, bound by strict confidentiality.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Legal obligations</h3>
              <p className="text-muted-foreground">When required by law to comply with a subpoena or similar legal process.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">With your consent</h3>
              <p className="text-muted-foreground">If we wish to publicly recognize your specific contribution, we will ask you first.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Your choices */}
      <section id="choices" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-6">Your choices</h2>
            <p className="text-lg text-primary-foreground/80 mb-10">
              You have the right to review the information we have about you, request corrections, or ask us to delete your data entirely. You can also opt out of communications at any time.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-8 text-lg">Contact us about your data</Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
