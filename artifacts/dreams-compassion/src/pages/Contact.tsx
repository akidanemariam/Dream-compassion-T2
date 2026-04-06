import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Mail, MapPin, Clock, MessageSquare, Users } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Dreams Compassion — Website inquiry${formData.org ? ` — ${formData.org}` : ""}`);
    let bodyText = `Hello Dreams Compassion team,\n\nI'm reaching out via your website contact form.\n\n`;
    bodyText += `Name: ${formData.name || "-"}\n`;
    bodyText += `Company: ${formData.org || "-"}\n`;
    bodyText += `Email: ${formData.email || "-"}\n`;
    bodyText += `Phone: ${formData.phone || "-"}\n\n`;
    bodyText += `Message:\n${formData.message || "-"}`;
    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:info@dreamscompassion.org?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        eyebrow="Contact"
        title="Volunteer, donate, or partner with us."
        subtitle="Tell us how you'd like to help or what needs you're seeing, and we'll follow up."
        image="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Diverse multiracial group of people laughing together"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* Left: Info */}
            <FadeIn>
              <span className="uppercase tracking-widest text-secondary font-bold text-xs mb-4 block">What to include</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5">Help us understand your message.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Share how you want to help, your community, and anything time-sensitive. Organizations: include your website and preferred contact method.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  { title: "Volunteer interest", sub: "Skills, availability" },
                  { title: "Partnership opportunities", sub: "Community orgs, churches, clinics" },
                  { title: "Donation questions or restricted giving", sub: "Corporate matching & planned giving" },
                  { title: "Urgent needs or referrals", sub: "No personal details required" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 p-5 rounded-2xl bg-background-alt border border-border hover:border-primary/30 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-foreground mb-0.5">{item.title}</strong>
                      <span className="text-muted-foreground text-sm">{item.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Contact info */}
              <div className="flex flex-col gap-4">
                <a href="mailto:info@dreamscompassion.org" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">info@dreamscompassion.org</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Chicago, Denver, and beyond</span>
                </div>
              </div>
            </FadeIn>

            {/* Right: Form + What happens next */}
            <FadeIn delay={0.2} className="flex flex-col gap-6">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold text-foreground text-sm">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name" name="name" required
                        value={formData.name} onChange={handleChange}
                        className="rounded-xl border-border bg-background/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org" className="font-semibold text-foreground text-sm">
                        Organization <span className="text-muted-foreground font-normal">(optional)</span>
                      </Label>
                      <Input
                        id="org" name="org"
                        value={formData.org} onChange={handleChange}
                        className="rounded-xl border-border bg-background/50"
                        placeholder="Your organization"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold text-foreground text-sm">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email" type="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className="rounded-xl border-border bg-background/50"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-semibold text-foreground text-sm">
                        Phone <span className="text-muted-foreground font-normal">(optional)</span>
                      </Label>
                      <Input
                        id="phone" type="tel" name="phone"
                        value={formData.phone} onChange={handleChange}
                        className="rounded-xl border-border bg-background/50"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold text-foreground text-sm">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message" name="message" required rows={5}
                      value={formData.message} onChange={handleChange}
                      className="rounded-xl border-border bg-background/50 resize-none"
                      placeholder="Tell us how you'd like to help, or what needs you're seeing..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2 rounded-full">
                    <Mail className="w-4 h-4" />
                    Email Dreams Compassion
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Submitting opens your email app with a pre-filled message to info@dreamscompassion.org
                  </p>
                </form>
              </div>

              {/* What happens next */}
              <div className="bg-background-alt rounded-3xl border border-border p-7">
                <h4 className="font-serif font-bold text-foreground text-base mb-5">What happens next</h4>
                <ul className="space-y-4">
                  {[
                    { icon: Mail, label: "We read every message", desc: "Our team reviews all inquiries personally and takes each one seriously." },
                    { icon: Clock, label: "Response within a few days", desc: "We aim to follow up within 2 to 3 business days, sooner for urgent matters." },
                    { icon: MessageSquare, label: "We may ask follow-up questions", desc: "To match you with the right opportunity or resource, we might reach out for a bit more context." },
                    { icon: Users, label: "We'll connect you to the right team", desc: "Depending on your message, we'll route you to our volunteer, partner, or donor relations contact." },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="block text-sm text-foreground mb-0.5">{item.label}</strong>
                          <span className="text-xs text-muted-foreground leading-relaxed">{item.desc}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
