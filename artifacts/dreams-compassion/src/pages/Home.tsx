import { Link } from "wouter";
import { ArrowRight, Heart, HeartHandshake, Shield, Users, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/FadeIn";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-background pt-12 lg:pt-24 pb-20 lg:pb-32">
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6 text-balance">
                  Food, shelter, and care for families who need it most.
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  We work with trusted local partners to deliver urgent support with dignity, compassion, and hope—in Chicago, Denver, and beyond.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="flex flex-wrap gap-4 mb-12">
                <Link href="/donate">
                  <Button size="lg" className="text-lg px-8">Donate Now</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-white/50 backdrop-blur-sm">Get Involved</Button>
                </Link>
              </FadeIn>

              <FadeIn delay={0.4} className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <h3 className="font-bold text-foreground mb-1 flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-secondary" /> Food & Essentials
                  </h3>
                  <p className="text-sm text-muted-foreground">Food and hygiene essentials.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-secondary" /> Shelter & Safety
                  </h3>
                  <p className="text-sm text-muted-foreground">Shelter referrals & safety resources.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-secondary" /> Care & Support
                  </h3>
                  <p className="text-sm text-muted-foreground">Care referrals & emotional support.</p>
                </div>
              </FadeIn>
            </div>

            {/* Right Visual */}
            <FadeIn delay={0.3} direction="left" className="relative lg:ml-auto w-full max-w-lg aspect-[4/5]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                {/* landing page hero compassionate volunteer delivering food box */}
                <img 
                  src="https://pixabay.com/get/gc3f370cb2becbab6bfc0f59deb6127cbf132de842eb0a899011f4dbe5e6b70c2ac39b549dbeb2dfbc4630ea635a8d6d9b97043cd813bda752055012e58734d42_1280.jpg" 
                  alt="Volunteer handing a box of essentials to a family member"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent mix-blend-multiply" />
              </div>
              
              {/* Mission Card Overlay */}
              <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-border/50 max-w-[280px]">
                <h4 className="font-serif font-bold text-lg mb-3 text-primary border-b border-border pb-2">Our Mission</h4>
                <p className="text-sm text-foreground font-medium mb-4 italic">
                  "Fast, safe support—always respectful."
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-muted-foreground items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Partner-led delivery
                  </li>
                  <li className="flex gap-2 text-sm text-muted-foreground items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    Dignity-first outreach
                  </li>
                  <li className="flex gap-2 text-sm text-muted-foreground items-start">
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
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20 text-center">
            <FadeIn delay={0.1}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">500+</div>
              <div className="text-primary-foreground/80 font-medium">Families Supported</div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">120+</div>
              <div className="text-primary-foreground/80 font-medium">Volunteers</div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">30+</div>
              <div className="text-primary-foreground/80 font-medium">Community Partners</div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">3</div>
              <div className="text-primary-foreground/80 font-medium">Cities Served</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <FadeIn>
            <span className="uppercase tracking-widest text-secondary font-bold text-sm mb-4 block">Why this matters</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-balance">
              No family should face hunger, unsafe shelter, or crisis alone.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We exist to make sure help arrives when it's needed most—through trusted partners who know their communities and serve with dignity.
            </p>
            <Link href="/about">
              <Button variant="outline" className="gap-2">
                Our story <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <span className="uppercase tracking-widest text-secondary font-bold text-sm mb-4 block">Programs</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">What we do</h2>
              <p className="text-lg text-muted-foreground">
                Three focus areas—essentials, safety, and care—delivered through partners with local knowledge and trusted relationships.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card className="h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Emergency essentials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    Food support, hygiene kits, and urgent basic needs for families in crisis.
                  </CardDescription>
                  <Link href="/programs#essentials" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Explore programs <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Safety and stability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    Connections to shelter, safety planning, and community resources.
                  </CardDescription>
                  <Link href="/programs#safety" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    See how we help <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <Heart className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Care and healing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    Medical referrals and emotional support with a trauma-informed approach.
                  </CardDescription>
                  <Link href="/programs#care" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="uppercase tracking-widest text-secondary font-bold text-sm mb-4 block">How we work</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Community-led, partnership-driven.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We coordinate with trusted local organizations so resources reach the right people quickly, safely, and without duplication.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border">
                  <Users className="w-8 h-8 text-primary shrink-0" />
                  <span className="font-bold text-foreground">Local partnership</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border">
                  <MapPin className="w-8 h-8 text-primary shrink-0" />
                  <span className="font-bold text-foreground">Targeted support</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border">
                  <Shield className="w-8 h-8 text-primary shrink-0" />
                  <span className="font-bold text-foreground">Transparency</span>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4">
              <FadeIn delay={0.2} className="space-y-4">
                {/* nonprofit essential supplies distribution community center */}
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                  <img src="https://pixabay.com/get/g7b630b442143c4b0f2ecb2b0f97b2e0bf6139c3df8953fa5b3a854c91c7f5da0f9e4781726866e68f421a7734527cfdc5ff7e52d3d6c8e68d7a32b4ef15de6bd_1280.jpg" alt="Community support" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
              <FadeIn delay={0.4} className="space-y-4 mt-12">
                {/* volunteers organizing community food drive */}
                <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" alt="Volunteer organization" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <Heart className="w-12 h-12 mx-auto mb-8 text-secondary" />
            <blockquote className="text-2xl md:text-4xl font-serif font-medium leading-relaxed mb-8 text-balance">
              "This organization helped my family when we had nowhere else to turn. They showed up with kindness, no questions asked."
            </blockquote>
            <cite className="block text-lg font-medium text-primary-foreground/80 not-italic">
              — Community member, Chicago
            </cite>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Help us deliver hope—today.</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Every dollar and every volunteer hour helps us reach more families in crisis. Join us in making a direct impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate">
                <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg">Donate Now</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg">Contact us</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
