import { FadeIn } from "./FadeIn";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto text-balance">
              {subtitle}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
