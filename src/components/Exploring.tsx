import { Terminal, Globe, Sparkles, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    title: "Learning C",
    description: "Building strong programming fundamentals.",
    icon: Terminal,
    accent: "botanical",
  },
  {
    title: "Web Development",
    description: "Starting my journey beyond AI-powered website builders.",
    icon: Globe,
    accent: "crimson",
  },
  {
    title: "AI",
    description: "Exploring AI-assisted development and creative technology.",
    icon: Sparkles,
    accent: "lily",
  },
  {
    title: "Hackathons",
    description: "Turning ideas into working prototypes and learning by building.",
    icon: Rocket,
    accent: "botanical",
  },
];

const accentMap: Record<string, { border: string; bg: string; text: string; hoverBorder: string; hoverBg: string }> = {
  botanical: {
    border: "border-botanical-400/20",
    bg: "bg-botanical-900/20",
    text: "text-botanical-300",
    hoverBorder: "hover:border-botanical-400/50",
    hoverBg: "hover:bg-botanical-800/30",
  },
  crimson: {
    border: "border-crimson-500/20",
    bg: "bg-crimson-500/5",
    text: "text-crimson-400",
    hoverBorder: "hover:border-crimson-500/50",
    hoverBg: "hover:bg-crimson-500/10",
  },
  lily: {
    border: "border-lily-500/20",
    bg: "bg-lily-500/5",
    text: "text-lily-400",
    hoverBorder: "hover:border-lily-500/50",
    hoverBg: "hover:bg-lily-500/10",
  },
};

export default function Exploring() {
  return (
    <section id="exploring" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800/50 to-ink-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal className="text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-botanical-300/70">
            Currently Exploring
          </p>
          <h2 className="font-display text-4xl font-light text-cream-50 sm:text-5xl md:text-6xl">
            What I'm <span className="text-gradient-cream">Curious</span> About
          </h2>
          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-cream-300/40 to-transparent" />
        </ScrollReveal>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const accent = accentMap[card.accent];
            return (
              <ScrollReveal key={card.title} delay={i * 120}>
                <div className={`group relative h-full overflow-hidden rounded-3xl border ${accent.border} ${accent.bg} p-8 transition-all duration-500 ${accent.hoverBorder} ${accent.hoverBg}`}>
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cream-100/10 bg-ink-800/50 transition-all duration-500 group-hover:scale-110">
                    <Icon size={26} className={`${accent.text} transition-transform duration-500 group-hover:rotate-6`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-medium text-cream-50">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm font-light leading-relaxed text-cream-100/60">
                    {card.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cream-100/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Bottom accent line */}
                  <div className={`pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-${card.accent === "botanical" ? "botanical" : card.accent === "crimson" ? "crimson" : "lily"}-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
