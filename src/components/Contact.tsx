import { Mail, Github, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import RedButterfly from "./RedButterfly";
import Fireflies from "./Fireflies";
import { images } from "@/config/projects";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      {/* Nighttime garden background */}
      <div className="absolute inset-0 bg-ink-900" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${images.nightPlant})` }}
      />
      <div
        className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cover bg-center opacity-20 blur-2xl"
        style={{ backgroundImage: `url(${images.tigerLilyDark})` }}
      />
      <div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cover bg-center opacity-15 blur-2xl"
        style={{ backgroundImage: `url(${images.philodendron})` }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/60 to-ink-900" />
      <div className="vignette absolute inset-0" />
      <div className="fog-layer absolute inset-0" />

      {/* Fireflies */}
      <Fireflies count={35} />

      {/* Floating butterfly */}
      <div className="butterfly-float absolute left-[15%] top-[20%] opacity-70">
        <RedButterfly size={55} wingSpeed={0.7} />
      </div>
      <div
        className="absolute right-[18%] top-[35%] opacity-50"
        style={{ animation: "drift 28s ease-in-out infinite" }}
      >
        <RedButterfly size={40} wingSpeed={0.9} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
        {/* Butterfly accent */}
        <ScrollReveal>
          <div className="mb-8 flex justify-center animate-float-slow">
            <RedButterfly size={50} wingSpeed={0.6} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-botanical-300/70">
            Contact
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="font-display text-4xl font-light leading-tight text-cream-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Let's build something
            <br />
            <span className="text-gradient-crimson">interesting</span>.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-crimson-500/60 to-transparent" />
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mx-auto mt-8 max-w-xl text-lg font-light text-cream-100/60">
            I'm always open to learning, collaborating, and exploring new ideas.
            Feel free to reach out.
          </p>
        </ScrollReveal>

        {/* Contact links */}
        <ScrollReveal delay={500}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Email */}
            <a
              href="mailto:srinidhi@example.com"
              className="btn-glow group flex items-center gap-3 rounded-full border border-crimson-500/30 bg-crimson-500/10 px-6 py-3.5 text-sm font-medium tracking-wide text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-crimson-500/60 hover:bg-crimson-500/20 hover:shadow-lg hover:shadow-crimson-500/20"
            >
              <Mail size={18} className="text-crimson-400" />
              Email
              <Send size={14} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            {/* GitHub — placeholder since profile is empty */}
            <div
              className="group flex cursor-default items-center gap-3 rounded-full border border-cream-100/15 bg-cream-100/5 px-6 py-3.5 text-sm font-light tracking-wide text-cream-100/40 backdrop-blur-sm"
              title="GitHub profile coming soon"
            >
              <Github size={18} />
              GitHub
              <span className="ml-1 rounded-full bg-cream-100/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cream-100/30">
                Coming Soon
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="mt-6 text-xs font-light text-cream-100/30">
            GitHub profile is currently empty — this is my first project!
          </p>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <ScrollReveal delay={300}>
        <footer className="relative z-10 mt-24 border-t border-cream-100/5 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6">
            {/* Mini butterfly */}
            <svg width="24" height="24" viewBox="0 0 100 100" className="animate-float-medium">
              <defs>
                <radialGradient id="footerWing" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#f95e5e" />
                  <stop offset="100%" stopColor="#9d0208" />
                </radialGradient>
              </defs>
              <ellipse cx="34" cy="40" rx="18" ry="22" fill="url(#footerWing)" opacity="0.9" />
              <ellipse cx="66" cy="40" rx="18" ry="22" fill="url(#footerWing)" opacity="0.9" />
              <ellipse cx="42" cy="66" rx="11" ry="14" fill="url(#footerWing)" opacity="0.8" />
              <ellipse cx="58" cy="66" rx="11" ry="14" fill="url(#footerWing)" opacity="0.8" />
              <ellipse cx="50" cy="50" rx="2" ry="18" fill="#1a1a1a" />
            </svg>
            <p className="font-display text-sm font-light tracking-wide text-cream-100/40">
              Designed & built by Srinidhi
            </p>
          </div>
        </footer>
      </ScrollReveal>
    </section>
  );
}
