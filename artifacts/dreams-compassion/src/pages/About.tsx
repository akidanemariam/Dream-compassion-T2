import { Link } from "wouter";
import { Heart } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";

const VALUES = [
  {
    title: "Dignity",
    desc: "Respect for the people we serve: privacy, safety, and human value first.",
    num: "01"
  },
  {
    title: "Partnership",
    desc: "Work with trusted local organizations to increase reach and reduce duplication.",
    num: "02"
  },
  {
    title: "Equity",
    desc: "Prioritize vulnerable communities affected by conflict, poverty, and violence.",
    num: "03"
  },
  {
    title: "Accountability",
    desc: "Communicate clearly about needs, actions, and outcomes.",
    num: "04"
  },
];

const TEAM = [
  {
    name: "Rahel Kebede",
    initials: "RK",
    role: "President",
    bio: "Community volunteer active in church-based outreach and homelessness support in Chicago, including Little Brothers – Friends of the Elderly.",
    color: "bg-emerald-100 text-emerald-800"
  },
  {
    name: "Elsa Woldegarima",
    initials: "EW",
    role: "Treasurer",
    bio: "15+ years in social services and case management supporting refugees and survivors of domestic violence and trafficking.",
    color: "bg-amber-100 text-amber-800"
  },
  {
    name: "Askale Berhanemeskel",
    initials: "AB",
    role: "Volunteer",
    bio: "Supports families through church outreach and homeless services in Denver's Ethiopian community.",
    color: "bg-blue-100 text-blue-800"
  },
  {
    name: "Edna Aman",
    initials: "EA",
    role: "Board Member",
    bio: "Brings dedicated governance and community advocacy to Dreams Compassion, helping shape the organization's strategic direction and mission impact.",
    color: "bg-rose-100 text-rose-800"
  },
  {
    name: "Henos Aman",
    initials: "HA",
    role: "Volunteer",
    bio: "Actively serves families in need through hands-on community outreach, providing compassionate direct support and assistance to those facing hardship.",
    color: "bg-violet-100 text-violet-800"
  },
];

export function About() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        eyebrow="About"
        title="Community-led support, delivered with dignity."
        subtitle="We provide essentials and connect people to shelter, care, and emotional support through community partners."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Community volunteers gathering together"
      />

      {/* Mission & Vision */}
      <section id="mission" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-14">
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-3 block">Mission</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">What drives us every day</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <div className="relative bg-white p-10 rounded-3xl shadow-sm border border-border overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
                  <span className="text-xs uppercase tracking-widest font-bold text-secondary mb-4 block">Our Mission</span>
                  <p className="text-2xl font-serif text-foreground leading-snug">
                    Provide essential support with dignity, and partner locally so help reaches people who need it most.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="relative bg-primary text-white p-10 rounded-3xl shadow-sm overflow-hidden h-full">
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-secondary/10" />
                  <span className="text-xs uppercase tracking-widest font-bold text-secondary mb-4 block relative z-10">Our Vision</span>
                  <p className="text-2xl font-serif leading-snug relative z-10">
                    A world where everyone can access basic needs and build a safer future.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="relative py-12 md:py-16 border-y border-border overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1600&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-8">
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-3 block">Values</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">How we show up</h2>
            <p className="text-base text-white/70 mt-2 max-w-xl mx-auto">The principles that guide our work.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {VALUES.map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 h-full">
                  <span className="text-4xl font-serif font-bold text-secondary/60 block mb-3 leading-none">{value.num}</span>
                  <h3 className="text-lg font-bold font-serif text-white mb-2">{value.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-14">
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-3 block">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">People behind the work</h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
              Volunteers and leaders serving communities in Chicago, Denver, and beyond.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TEAM.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="p-8 pb-6 flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center text-2xl font-serif font-bold mb-5 ring-4 ring-white shadow-sm`}>
                      {member.initials}
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground mb-1">{member.name}</h3>
                    <span className="text-xs uppercase tracking-widest font-bold text-secondary mb-4">{member.role}</span>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-20 bg-background-alt border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <FadeIn>
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Connect</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Want to partner with Dreams Compassion?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We'd love to hear from volunteers, community organizations, and supporters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2 px-8 rounded-full">Contact us</Button>
              </Link>
              <Link href="/donate">
                <Button size="lg" variant="outline" className="gap-2 px-8 rounded-full">
                  <Heart className="w-4 h-4" /> Donate
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
