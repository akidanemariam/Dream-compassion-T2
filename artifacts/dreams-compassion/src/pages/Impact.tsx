import { HandHeart, Target, BarChart3, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/FadeIn";

export function Impact() {
  return (
    <div className="flex flex-col w-full bg-background">
      <PageHeader 
        title="Support that reaches people—fast, safely, and respectfully." 
        subtitle="We measure our success not just by the amount of resources we distribute, but by the dignity and care with which they are delivered."
      />

      {/* Highlights */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <Card className="h-full shadow-lg border-none">
                <CardHeader>
                  <HandHeart className="w-8 h-8 text-secondary mb-2" />
                  <CardTitle>Dignity-first support</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  We believe receiving help shouldn't cost you your pride. Our outreach is designed to be discreet, respectful, and empowering.
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="h-full shadow-lg border-none">
                <CardHeader>
                  <Target className="w-8 h-8 text-secondary mb-2" />
                  <CardTitle>Partner-led delivery</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  We don't guess what communities need. We listen to local leaders and channel resources through organizations already trusted on the ground.
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card className="h-full shadow-lg border-none">
                <CardHeader>
                  <BarChart3 className="w-8 h-8 text-secondary mb-2" />
                  <CardTitle>Clear updates</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Transparency is non-negotiable. We track where every dollar goes and report back on the tangible impact it made.
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="model" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="uppercase tracking-widest text-secondary font-bold text-sm mb-4 block">The Process</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">How impact happens</h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            {[
              { num: "01", title: "Identify needs", desc: "Local partners signal urgent gaps in their communities—whether it's a food shortage or a need for winter gear." },
              { num: "02", title: "Coordinate support", desc: "We mobilize resources, purchase supplies in bulk, or organize specific drives to meet the exact request." },
              { num: "03", title: "Deliver resources", desc: "Goods are delivered directly to the partner organization, ensuring they are distributed in a familiar, safe environment." },
              { num: "04", title: "Follow up & report", desc: "We track the distribution and share stories of impact with our donors, respecting the privacy of recipients." }
            ].map((step, index) => (
              <FadeIn key={index} delay={index * 0.1} className="relative flex gap-8 pb-12 last:pb-0">
                {index !== 3 && <div className="absolute top-12 left-6 w-0.5 h-full bg-border -z-10" />}
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold font-serif text-lg shrink-0 shadow-md">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section id="accountability" className="py-24 bg-background-alt">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Accountability to you and them</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold font-serif mb-4 text-primary">Clear updates</h3>
              <p className="text-muted-foreground">You'll always know exactly how your contribution was utilized through regular, honest reporting.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold font-serif mb-4 text-primary">Privacy and dignity</h3>
              <p className="text-muted-foreground">We protect the identities of those we serve. We share impact data, not exploitative imagery.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold font-serif mb-4 text-primary">Donor intent</h3>
              <p className="text-muted-foreground">When you restrict your gift to a specific program, 100% of it honors that commitment.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our strength is our network</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We don't build parallel systems. Instead, we channel resources into existing community infrastructures: mutual aid groups, local churches, social service agencies, and health clinics.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By doing this, we eliminate redundant overhead and ensure that help is provided by neighbors who already know and love their communities.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-primary text-white p-10 rounded-3xl relative">
                <span className="absolute -top-6 -left-6 text-6xl text-secondary opacity-50 font-serif">"</span>
                <p className="text-2xl font-serif font-medium leading-tight relative z-10 italic">
                  Compassion becomes sustainable when communities lead and partners coordinate.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
