import { FileCheck2, ShieldCheck, HeartHandshake } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

export function Transparency() {
  return (
    <div className="flex flex-col w-full bg-background">
      <PageHeader 
        title="Trust through clarity." 
        subtitle="You deserve to know how your money is spent, and the communities we serve deserve to have their stories protected."
      />

      {/* Principles */}
      <section id="principles" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold text-center mb-16">Our core principles</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-primary/5 p-8 rounded-3xl text-center h-full border border-primary/10">
                <HeartHandshake className="w-10 h-10 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold font-serif mb-4">Dignity-first storytelling</h3>
                <p className="text-muted-foreground">We never use exploitative imagery or share stories without explicit, informed consent from the individuals involved.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-primary/5 p-8 rounded-3xl text-center h-full border border-primary/10">
                <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold font-serif mb-4">Minimize harm</h3>
                <p className="text-muted-foreground">We recognize that well-intentioned help can sometimes miss the mark. We rely on local partners to guide us on what is actually needed.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-primary/5 p-8 rounded-3xl text-center h-full border border-primary/10">
                <FileCheck2 className="w-10 h-10 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold font-serif mb-4">Plain-language updates</h3>
                <p className="text-muted-foreground">We skip the nonprofit jargon. When we report back on impact, we tell you clearly what worked, what didn't, and what we spent.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section id="safeguarding" className="py-24 bg-background-alt">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Operational Safeguards</h2>
          </FadeIn>
          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <Card className="h-full border-none shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-foreground mb-3">Do no harm</h3>
                  <p className="text-muted-foreground text-sm">We assess the potential risks before distributing resources to ensure we don't inadvertently endanger vulnerable individuals.</p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="h-full border-none shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-foreground mb-3">Partner vetting</h3>
                  <p className="text-muted-foreground text-sm">We rigorously evaluate our community partners to ensure they share our values of equity, inclusion, and accountability.</p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card className="h-full border-none shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-foreground mb-3">Secure handling</h3>
                  <p className="text-muted-foreground text-sm">Donations are processed through secure platforms, and financial records are maintained with strict oversight.</p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Donor Commitments */}
      <section id="donors" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl font-serif font-bold mb-8">Our commitment to donors</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-1">✓</div>
                  <p className="text-lg text-foreground">We use your funds consistently with the program area you specify.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-1">✓</div>
                  <p className="text-lg text-foreground">We share honest updates about challenges as well as successes.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-1">✓</div>
                  <p className="text-lg text-foreground">We respect your privacy and will not sell or trade your contact information.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-1">✓</div>
                  <p className="text-lg text-foreground">We provide a direct channel for you to ask questions about our finances.</p>
                </li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-primary text-white p-12 rounded-3xl relative">
                <p className="text-3xl font-serif font-bold leading-snug">
                  "Transparency isn't a page—it's a practice."
                </p>
                <div className="mt-8 w-16 h-1 bg-secondary rounded-full" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
