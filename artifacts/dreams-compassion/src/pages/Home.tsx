import { Link } from "wouter";
import { ArrowRight, Heart, HeartHandshake, Shield, Users, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";

const PROGRAMS = [
  {
    title: "Emergency essentials",
    desc: "Food support, hygiene kits, and urgent basic needs for families in crisis.",
    href: "/programs#essentials",
    link: "Explore programs",
    icon: HeartHandshake,
    // Vibrant fresh produce / food market photo
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Fresh produce and food essentials",
    accent: "from-emerald-600/80 to-primary/70",
  },
  {
    title: "Safety & stability",
    desc: "Connections to shelter, safety planning, and community resources.",
    href: "/programs#safety",
    link: "See how we help",
    icon: Shield,
    // Warm shelter / community space
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Safe community shelter space",
    accent: "from-blue-700/70 to-primary/70",
  },
  {
    title: "Care & healing",
    desc: "Medical referrals and emotional support with a trauma-informed approach.",
    href: "/programs#care",
    link: "Learn more",
    icon: Heart,
    // Compassionate hands / medical care
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Compassionate care and healing",
    accent: "from-rose-600/70 to-primary/70",
  },
];

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-background pt-12 lg:pt-24 pb-20 lg:pb-28">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-background-alt -z-10 rounded-bl-[100px] md:rounded-bl-[200px]" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Content */}
            <div className="max-w-xl">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6 border border-secondary/20">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Nonprofit • Community partnerships • Direct support
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                {/* Reduced from text-5xl/6xl/7xl → text-4xl/5xl/6xl */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] mb-6 text-balance">
                  Food, shelter, and care for families who need it most.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  We work with trusted local partners to deliver urgent support with dignity, compassion, and hope—in Chicago, Denver, and beyond.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="flex flex-wrap gap-4 mb-12">
                <Link href="/donate">
                  <Button size="lg" className="px-8 rounded-full">Donate Now</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="px-8 rounded-full bg-white/50 backdrop-blur-sm">Get Involved</Button>
                </Link>
              </FadeIn>

              <FadeIn delay={0.4} className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <h3 className="font-bold text-foreground mb-1 flex items-center gap-2 text-sm">
                    <HeartHandshake className="w-4 h-4 text-secondary shrink-0" /> Food & Essentials
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Food and hygiene essentials.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-secondary shrink-0" /> Shelter & Safety
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Shelter referrals & safety resources.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 flex items-center gap-2 text-sm">
                    <Heart className="w-4 h-4 text-secondary shrink-0" /> Care & Support
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Care referrals & emotional support.</p>
                </div>
              </FadeIn>
            </div>

            {/* Right Visual */}
            <FadeIn delay={0.3} direction="left" className="relative lg:ml-auto w-full max-w-lg aspect-[4/5]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://pixabay.com/get/gc3f370cb2becbab6bfc0f59deb6127cbf132de842eb0a899011f4dbe5e6b70c2ac39b549dbeb2dfbc4630ea635a8d6d9b97043cd813bda752055012e58734d42_1280.jpg"
                  alt="Volunteer handing a box of essentials to a family member"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent mix-blend-multiply" />
              </div>

              {/* Mission Card Overlay */}
              <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-border/50 max-w-[260px]">
                <h4 className="font-serif font-bold text-base mb-3 text-primary border-b border-border pb-2">Our Mission</h4>
                <p className="text-sm text-foreground font-medium mb-4 italic">
                  "Fast, safe support—always respectful."
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-xs text-muted-foreground items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Partner-led delivery
                  </li>
                  <li className="flex gap-2 text-xs text-muted-foreground items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Dignity-first outreach
                  </li>
                  <li className="flex gap-2 text-xs text-muted-foreground items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Prioritize urgent needs
                  </li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20 text-center">
            <FadeIn delay={0.1}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-1">500+</div>
              <div className="text-primary-foreground/80 font-medium text-sm">Families Supported</div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-1">120+</div>
              <div className="text-primary-foreground/80 font-medium text-sm">Volunteers</div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-1">30+</div>
              <div className="text-primary-foreground/80 font-medium text-sm">Community Partners</div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-1">3</div>
              <div className="text-primary-foreground/80 font-medium text-sm">Cities Served</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <FadeIn>
            <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Why this matters</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5 text-balance">
              No family should face hunger, unsafe shelter, or crisis alone.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              We exist to make sure help arrives when it's needed most—through trusted partners who know their communities and serve with dignity.
            </p>
            <Link href="/about">
              <Button variant="outline" className="gap-2 rounded-full px-6">
                Our story <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* PROGRAMS SECTION — Photo cards */}
      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">Programs</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">What we do</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Three focus areas—essentials, safety, and care—delivered through partners with local knowledge and trusted relationships.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PROGRAMS.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                    {/* Photo background */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={prog.image}
                        alt={prog.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Gradient overlay on photo */}
                      <div className={`absolute inset-0 bg-gradient-to-b ${prog.accent} opacity-60`} />
                      {/* Icon floating on photo */}
                      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card content — clean white background below */}
                    <div className="bg-white flex-1 p-7 flex flex-col">
                      <h3 className="text-xl font-serif font-bold text-foreground mb-3">{prog.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{prog.desc}</p>
                      <Link
                        href={prog.href}
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                      >
                        {prog.link} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">How we work</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">Community-led, partnership-driven.</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                We coordinate with trusted local organizations so resources reach the right people quickly, safely, and without duplication.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block text-sm">Local partnership</span>
                    <span className="text-xs text-muted-foreground">Trusted community organizations on the ground.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block text-sm">Targeted support</span>
                    <span className="text-xs text-muted-foreground">Resources matched to specific needs and locations.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-foreground block text-sm">Transparency</span>
                    <span className="text-xs text-muted-foreground">Clear reporting to donors and the communities we serve.</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4">
              <FadeIn delay={0.2} className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                  <img
                    src="https://pixabay.com/get/g7b630b442143c4b0f2ecb2b0f97b2e0bf6139c3df8953fa5b3a854c91c7f5da0f9e4781726866e68f421a7734527cfdc5ff7e52d3d6c8e68d7a32b4ef15de6bd_1280.jpg"
                    alt="Community support"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.4} className="space-y-4 mt-12">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                    alt="Volunteer organization"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <Heart className="w-10 h-10 mx-auto mb-6 text-secondary" />
            <blockquote className="text-2xl md:text-3xl font-serif font-medium leading-relaxed mb-6 text-balance">
              "This organization helped my family when we had nowhere else to turn. They showed up with kindness, no questions asked."
            </blockquote>
            <cite className="block text-base font-medium text-primary-foreground/80 not-italic">
              — Community member, Chicago
            </cite>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">Help us deliver hope—today.</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Every dollar and every volunteer hour helps us reach more families in crisis. Join us in making a direct impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="w-full sm:w-auto px-8 rounded-full">Donate Now</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 rounded-full">Contact us</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
