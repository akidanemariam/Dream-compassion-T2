import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDonate } from "@/context/DonateContext";
import logoSrc from "@assets/android-chrome-512x512_1774462538999.png";

const NAV_LINKS = [
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const [isActive] = useRoute(href);
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "text-sm font-semibold transition-colors hover:text-primary",
          isActive
            ? "text-primary relative after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[2.5px] after:rounded-full after:bg-primary"
            : "text-foreground/80"
        )}
      >
        {label}
      </Link>
    </li>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openDonate } = useDonate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
          <img
            src={logoSrc}
            alt="Dreams Compassion logo"
            className="w-11 h-11 object-contain group-hover:scale-105 transition-transform duration-200 drop-shadow-sm"
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif font-bold text-[1.1rem] text-foreground">
              Dreams Compassion
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mt-0.5">
              Support delivered with dignity
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 relative">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
          <Button className="gap-2 rounded-full px-5" onClick={() => openDonate()}>
            <Heart className="w-3.5 h-3.5" fill="currentColor" />
            Donate
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-foreground/5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-border shadow-lg p-4 flex flex-col gap-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-semibold text-foreground hover:bg-primary/5 hover:text-primary rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-2">
            <Button
              className="w-full gap-2 rounded-full"
              size="lg"
              onClick={() => { setIsOpen(false); openDonate(); }}
            >
              <Heart className="w-4 h-4" fill="currentColor" />
              Donate Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
