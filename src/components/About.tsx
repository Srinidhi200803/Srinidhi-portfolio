import ScrollReveal from "./ScrollReveal";
import { images } from "@/config/projects";

const skillTags = [
  { label: "Python", learning: false },
  { label: "SQL", learning: false },
  { label: "C", learning: true, note: "Learning" },
  { label: "AI", learning: false },
  { label: "Web Development", learning: true, note: "Learning" },
  { label: "Git & GitHub", learning: true, note: "Learning" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-ink-900" />
      <div
        className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cover bg-center opacity-10 blur-2xl"
        style={{ backgroundImage: `url(${images.tigerLilyDotted})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800/90 to-ink-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — text */}
          <div>
            <ScrollReveal>
              <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-botanical-300/70">
                About Me
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-display text-4xl font-light leading-tight text-cream-50 sm:text-5xl md:text-6xl">
                Growing,
                <br />
                <span className="text-gradient-lily">Building</span>,
                <br />
                <span className="text-gradient-crimson">Exploring</span>.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-crimson-500/60 to-transparent" />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mt-8 text-lg font-light leading-relaxed text-cream-100/70">
                I'm a first-year Computer Science Engineering student exploring
                software development, AI, and creative technology.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="mt-4 text-lg font-light leading-relaxed text-cream-100/60">
                I started with Python and SQL and am currently learning C while
                exploring modern AI-powered development tools. I enjoy taking an
                idea and turning it into something people can actually interact
                with.
              </p>
            </ScrollReveal>

            {/* Skill tags */}
            <ScrollReveal delay={500}>
              <div className="mt-10 flex flex-wrap gap-3">
                {skillTags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`skill-tag inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-light ${
                      tag.learning
                        ? "border-lily-500/30 bg-lily-500/5 text-lily-200/80"
                        : "border-botanical-400/30 bg-botanical-900/20 text-botanical-200/80"
                    }`}
                  >
                    {tag.label}
                    {tag.note && (
                      <span className="text-xs uppercase tracking-wider text-lily-400/60">
                        {tag.note}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — tiger lily image */}
          <ScrollReveal delay={200} className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-crimson-600/20 via-lily-500/10 to-botanical-500/20 blur-2xl" />

              {/* Image frame */}
              <div className="glass relative overflow-hidden rounded-3xl">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={images.tigerLilyDark}
                    alt="Red tiger lily against a dark background"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display text-lg italic text-cream-100/80">
                    "Like a tiger lily — growing in the dark, reaching for the light."
                  </p>
                </div>
              </div>

              {/* Floating accent butterfly */}
              <div className="absolute -right-6 -top-6 animate-float-medium">
                <svg width="50" height="50" viewBox="0 0 100 100">
                  <defs>
                    <radialGradient id="aboutWing" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#f95e5e" />
                      <stop offset="100%" stopColor="#9d0208" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="34" cy="40" rx="18" ry="22" fill="url(#aboutWing)" opacity="0.9" />
                  <ellipse cx="66" cy="40" rx="18" ry="22" fill="url(#aboutWing)" opacity="0.9" />
                  <ellipse cx="42" cy="66" rx="11" ry="14" fill="url(#aboutWing)" opacity="0.8" />
                  <ellipse cx="58" cy="66" rx="11" ry="14" fill="url(#aboutWing)" opacity="0.8" />
                  <ellipse cx="50" cy="50" rx="2" ry="18" fill="#1a1a1a" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
