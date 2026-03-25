import { Link } from "wouter";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#14291F] text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6 inline-flex">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary font-serif font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                DC
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-white">
                  Dreams Compassion
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Support delivered with dignity. We work with trusted local partners to deliver urgent support with compassion and hope—in Chicago, Denver, and beyond.
            </p>
            <Link href="/donate">
              <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full font-medium text-sm transition-colors inline-flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Support Our Mission
              </button>
            </Link>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white/90">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/impact" className="text-gray-300 hover:text-white transition-colors">Our Impact</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white/90">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</Link></li>
              <li>
                <a href="mailto:info@dreamscompassion.org" className="text-gray-300 hover:text-white transition-colors">
                  info@dreamscompassion.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white/90">Trust</h4>
            <ul className="space-y-4">
              <li><Link href="/transparency" className="text-gray-300 hover:text-white transition-colors">Transparency</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Dreams Compassion. All rights reserved.</p>
          <p>A registered non-profit organization.</p>
        </div>
      </div>
    </footer>
  );
}
