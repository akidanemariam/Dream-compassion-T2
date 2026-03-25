import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Mail } from "lucide-react";

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
    
    // Construct mailto link
    const subject = encodeURIComponent(`Website Contact: ${formData.name}`);
    let bodyText = `Name: ${formData.name}\n`;
    if (formData.org) bodyText += `Organization: ${formData.org}\n`;
    bodyText += `Email: ${formData.email}\n`;
    if (formData.phone) bodyText += `Phone: ${formData.phone}\n`;
    bodyText += `\nMessage:\n${formData.message}\n`;
    
    const body = encodeURIComponent(bodyText);
    const mailtoUrl = `mailto:info@dreamscompassion.org?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-full bg-background">
      <PageHeader 
        title="Volunteer, donate, or partner with us." 
        subtitle="We want to hear from you. Reach out to start a conversation about making an impact together."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Col: Info */}
            <FadeIn>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Help us understand your message.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To help us route your inquiry to the right person, please let us know if you are contacting us regarding:
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex gap-4 p-4 rounded-xl bg-white border border-border shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <strong className="block text-foreground mb-1">Volunteer interest</strong>
                    <span className="text-muted-foreground text-sm">Please include your skills and availability.</span>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-xl bg-white border border-border shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <strong className="block text-foreground mb-1">Partnership opportunities</strong>
                    <span className="text-muted-foreground text-sm">For community orgs, churches, clinics.</span>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-xl bg-white border border-border shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <strong className="block text-foreground mb-1">Donation questions</strong>
                    <span className="text-muted-foreground text-sm">Questions about restricted giving or corporate matching.</span>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-xl bg-white border border-border shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <strong className="block text-foreground mb-1">Urgent needs or referrals</strong>
                    <span className="text-muted-foreground text-sm">No personal details required initially.</span>
                  </div>
                </li>
              </ul>
            </FadeIn>

            {/* Right Col: Form */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
                      <Input id="name" name="name" required value={formData.name} onChange={handleChange} className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org">Organization <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Input id="org" name="org" value={formData.org} onChange={handleChange} className="bg-background/50" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                      <Input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className="bg-background/50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={6}
                      value={formData.message} 
                      onChange={handleChange}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Mail className="w-5 h-5" />
                    Email Dreams Compassion
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    This button will open your default email application with a prefilled message to info@dreamscompassion.org
                  </p>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
