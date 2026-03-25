import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-header py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-sm group-hover:scale-105 transition-transform">
            <span className="font-serif font-bold text-lg leading-none">DC</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-none text-foreground">
              Dreams Compassion
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mt-1">
              Support delivered with dignity
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const [isActive] = useRoute(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/donate">
            <Button className="gap-2">
              <Heart className="w-4 h-4" />
              Donate
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg p-4 flex flex-col gap-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-primary/5 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 pt-2">
            <Link href="/donate" onClick={() => setIsOpen(false)}>
              <Button className="w-full gap-2" size="lg">
                <Heart className="w-5 h-5" />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
