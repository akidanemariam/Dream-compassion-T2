import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const values = [
    { title: "Dignity", desc: "Respecting the humanity of every individual." },
    { title: "Partnership", desc: "Collaborating to multiply our impact." },
    { title: "Equity", desc: "Ensuring resources reach marginalized groups." },
    { title: "Accountability", desc: "Honest, clear stewardship of all funds." }
  ];

  const team = [
    { name: "Rahel Kebede", role: "President", bio: "Rahel founded DC to bridge the gap between resources and grassroots organizations." },
    { name: "Elsa Woldegarima", role: "Treasurer", bio: "Elsa brings years of financial stewardship to ensure every dollar maximizes impact." },
    { name: "Askale Berhanemeskel", role: "Volunteer", bio: "Askale leads community outreach, building vital relationships with local shelters." },
    { name: "Edna Aman", role: "Board member", bio: "Edna advises on strategic partnerships and scaling our trauma-informed care model." },
    { name: "Henos Aman", role: "Volunteer", bio: "Henos coordinates our logistics and essential supplies distribution network." }
  ];

  return (
    <div className="flex flex-col w-full bg-background">
      <PageHeader 
        title="Community-led support, delivered with dignity." 
        subtitle="Dreams Compassion was built on a simple premise: communities already have the knowledge to heal themselves—they just need the resources."
      />

      {/* Mission & Vision */}
      <section id="mission" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn className="bg-white p-10 rounded-3xl shadow-sm border border-border">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Our Mission</h2>
              <p className="text-2xl font-serif text-foreground leading-snug">
                Provide essential support with dignity, and partner locally so help reaches people who need it most.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-primary text-white p-10 rounded-3xl shadow-sm">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">Our Vision</h2>
              <p className="text-2xl font-serif leading-snug">
                A world where everyone can access basic needs and build a safer future.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-24 bg-background-alt">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Our Core Values</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <Card className="h-full border-none shadow-md hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
                    <h3 className="text-xl font-bold font-serif mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Leadership & Team</h2>
              <p className="text-lg text-muted-foreground">
                Dedicated individuals united by a shared commitment to community service.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => {
              const initials = member.name.split(' ').map(n => n[0]).join('');
              return (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-serif font-bold mb-4">
                      {initials}
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium text-sm mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
