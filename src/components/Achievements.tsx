import { Medal, GraduationCap, Code2, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    year: "2025",
    icon: Medal,
    title: "3rd Place",
    subtitle: "Evo11ev Creative Contest",
    detail: "Project: Hobby Lobby",
    accent: "lily",
  },
  {
    year: "2026",
    icon: GraduationCap,
    title: "Computer Science Engineering",
    subtitle: "SRM",
    detail: "First year",
    accent: "botanical",
  },
  {
    year: "2026",
    icon: Code2,
    title: "AI-Assisted Projects",
    subtitle: "CampusFlow • CryptoGuard AI",
    detail: "Built and deployed",
    accent: "crimson",
  },
  {
    year: "2026",
    icon: Trophy,
    title: "Exploring Hackathons",
    subtitle: "& Technical Communities",
    detail: "Just getting started",
    accent: "botanical",
  },
];

const accentColors: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  lily: {
    border: "border-lily-500/40",
    bg: "bg-lily-500/10",
    text: "text-lily-400",
    glow: "shadow-lily-500/20",
  },
  botanical: {
    border: "border-botanical-400/40",
    bg: "bg-botanical-900/20",
    text: "text-botanical-300",
    glow: "shadow-botanical-500/20",
  },
  crimson: {
    border: "border-crimson-500/40",
    bg: "bg-crimson-500/10",
    text: "text-crimson-400",
    glow: "shadow-crimson-500/20",
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800/40 to-ink-900" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal className="text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-botanical-300/70">
            Achievements
          </p>
          <h2 className="font-display text-4xl font-light text-cream-50 sm:text-5xl md:text-6xl">
            My <span className="text-gradient-crimson">Journey</span> So Far
          </h2>
          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-crimson-500/60 to-transparent" />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="timeline-line absolute left-4 top-0 h-full w-px md:left-1/2 md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              const accent = accentColors[item.accent];
              const isLeft = i % 2 === 0;

              return (
                <ScrollReveal key={`${item.year}-${i}`} delay={i * 100}>
                  <div className={`relative flex items-center gap-8 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Card */}
                    <div className={`ml-12 flex-1 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                      <div className={`glass-strong group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-${accent.border.includes("lily") ? "lily" : accent.border.includes("crimson") ? "crimson" : "botanical"}-500/40 hover:shadow-lg ${accent.glow}`}>
                        {/* Year badge */}
                        <span className={`inline-flex items-center gap-2 rounded-full border ${accent.border} ${accent.bg} px-3 py-1 text-xs font-medium tracking-wider ${accent.text}`}>
                          {item.year}
                        </span>

                        <h3 className="mt-4 font-display text-xl font-medium text-cream-50">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-light text-cream-100/70">
                          {item.subtitle}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-wider text-cream-100/40">
                          {item.detail}
                        </p>

                        {/* Hover glow line */}
                        <div className={`pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${item.accent === "lily" ? "lily" : item.accent === "crimson" ? "crimson" : "botanical"}-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-4 top-6 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${accent.border} ${accent.bg} backdrop-blur-sm`}>
                        <Icon size={16} className={accent.text} />
                      </div>
                    </div>

                    {/* Spacer for other side */}
                    <div className="hidden flex-1 md:block md:w-1/2" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
