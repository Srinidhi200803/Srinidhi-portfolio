import { Code2, Sparkles, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: "Working knowledge" },
      { name: "SQL", level: "Working knowledge" },
      { name: "C", level: "Learning" },
    ],
  },
  {
    title: "AI / Development Tools",
    icon: Sparkles,
    skills: [
      { name: "Bolt", level: "Building with" },
      { name: "Lovable", level: "Building with" },
      { name: "Google Antigravity", level: "Exploring" },
    ],
  },
  {
    title: "Currently Learning",
    icon: GraduationCap,
    skills: [
      { name: "Git", level: "Getting started" },
      { name: "GitHub", level: "Getting started" },
      { name: "Web Development", level: "Starting out" },
      { name: "New technologies", level: "Always" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800/60 to-ink-900" />
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-botanical-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <ScrollReveal className="text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-botanical-300/70">
            Technical Skills
          </p>
          <h2 className="font-display text-4xl font-light text-cream-50 sm:text-5xl md:text-6xl">
            My <span className="text-gradient-lily">Learning</span> Journey
          </h2>
          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-lily-500/60 to-transparent" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-light text-cream-100/50">
            I'm a first-year student — these reflect where I am right now, not where I'll be.
            Everything here is honestly labeled.
          </p>
        </ScrollReveal>

        {/* Skill groups */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <ScrollReveal key={group.title} delay={gi * 150}>
                <div className="glass-strong group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-botanical-400/30">
                  {/* Icon */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-botanical-400/20 bg-botanical-900/30 transition-all duration-500 group-hover:border-crimson-500/30 group-hover:bg-crimson-500/10">
                      <Icon size={22} className="text-botanical-300 transition-colors duration-500 group-hover:text-crimson-400" />
                    </div>
                    <h3 className="font-display text-xl font-medium text-cream-50">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between border-b border-cream-100/5 pb-3 last:border-0"
                      >
                        <span className="text-sm font-light text-cream-100/80">
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs uppercase tracking-wider ${
                            skill.level === "Learning" || skill.level === "Getting started" || skill.level === "Starting out"
                              ? "text-lily-400/70"
                              : skill.level === "Always" || skill.level === "Exploring"
                              ? "text-botanical-300/70"
                              : "text-cream-100/50"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
