export default function TechStack() {
  const techs = ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "GitHub", "Vercel", "Docker"];

  return (
    <section className="py-12 border-y border-border/40 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Works with your favorite tools
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {techs.map((tech) => (
            <span key={tech} className="text-xl md:text-2xl font-bold tracking-tighter">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}