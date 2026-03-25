import { FadeIn } from "./FadeIn";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  eyebrow?: string;
}

export function PageHeader({ title, subtitle, image, imageAlt = "", eyebrow }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden min-h-[480px] md:min-h-[560px] flex items-end pt-24">
      {/* Background Photo */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      {/* Gradient overlay — rich dark green at bottom, lighter at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      {/* Subtle warm tint */}
      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pb-16 md:pb-20 max-w-4xl">
        <FadeIn>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white text-balance leading-tight drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl text-balance leading-relaxed">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
