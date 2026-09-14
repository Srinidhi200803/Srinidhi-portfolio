import { ExternalLink, Award, Trophy, Medal, FileText, DollarSign } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projectLinks, images } from "@/config/projects";

interface Project {
  id: string;
  number: string;
  name: string;
  description: string;
  label: string;
  url: string;
  image: string;
  achievement?: {
    place: string;
    placeIcon: "medal";
    badges: { icon: "certificate" | "trophy" | "cash"; label: string }[];
  };
}

const projects: Project[] = [
  {
    id: "campusflow",
    number: "01",
    name: "CampusFlow",
    description:
      "A student-focused web project designed around improving the campus experience, where AI can help students check their attendance, CGPA, and pending work.",
    label: "AI-Assisted Project",
    url: projectLinks.campusflow,
    image: images.tigerLilyDew,
  },
  {
    id: "cryptoguard",
    number: "02",
    name: "CryptoGuard AI",
    description:
      "An AI-assisted web experience exploring cryptocurrency risk analysis and portfolio insights.",
    label: "AI-Assisted Project",
    url: projectLinks.cryptoGuard,
    image: images.darkLeaves,
  },
  {
    id: "hobbylobby",
    number: "03",
    name: "Hobby Lobby",
    description:
      "A creative project developed for the Evo11ev Creative Contest 2025, where AI helps users identify their ideal hobby.",
    label: "Creative Project",
    url: projectLinks.hobbyLobby,
    image: images.tigerLilyGarden,
    achievement: {
      place: "3rd Place",
      placeIcon: "medal",
      badges: [
        { icon: "certificate", label: "Certificate" },
        { icon: "trophy", label: "Trophy" },
        { icon: "cash", label: "Cash Prize" },
      ],
    },
  },
];

const badgeIcons = {
  certificate: FileText,
  trophy: Trophy,
  cash: DollarSign,
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800/50 to-ink-900" />
      <div
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-crimson-600/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <ScrollReveal className="text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-botanical-300/70">
            My Projects
          </p>
          <h2 className="font-display text-4xl font-light text-cream-50 sm:text-5xl md:text-6xl">
            Things I've <span className="text-gradient-crimson">Built</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-crimson-500/60 to-transparent" />
        </ScrollReveal>

        {/* Project cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 150}>
              <article className="card-3d group relative h-full overflow-hidden rounded-3xl">
                {/* Card glass background */}
                <div className="glass-strong relative flex h-full flex-col overflow-hidden rounded-3xl">
                  {/* Image area */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

                    {/* Project number */}
                    <div className="absolute left-5 top-5">
                      <span className="font-display text-5xl font-light text-cream-100/20">
                        {project.number}
                      </span>
                    </div>

                    {/* Achievement badge */}
                    {project.achievement && (
                      <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-lily-500/40 bg-lily-500/15 px-3 py-1.5 backdrop-blur-sm">
                        <Medal size={16} className="text-lily-400" />
                        <span className="text-xs font-medium tracking-wide text-lily-300">
                          3RD PLACE
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Label */}
                    <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-botanical-400/30 bg-botanical-900/20 px-3 py-1 text-xs uppercase tracking-wider text-botanical-300/80">
                      {project.label}
                    </span>

                    {/* Name */}
                    <h3 className="font-display text-2xl font-medium text-cream-50">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-cream-100/60">
                      {project.description}
                    </p>

                    {/* Achievement badges */}
                    {project.achievement && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.achievement.badges.map((badge) => {
                          const Icon = badgeIcons[badge.icon];
                          return (
                            <span
                              key={badge.label}
                              className="inline-flex items-center gap-1.5 rounded-full border border-lily-500/20 bg-lily-500/5 px-3 py-1.5 text-xs font-light text-lily-200/70"
                            >
                              <Icon size={14} />
                              {badge.label}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {/* View Live Project button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow mt-6 inline-flex items-center justify-between gap-2 rounded-2xl border border-crimson-500/30 bg-crimson-500/10 px-5 py-3 text-sm font-medium tracking-wide text-cream-50 transition-all duration-300 hover:border-crimson-500/60 hover:bg-crimson-500/20 hover:shadow-lg hover:shadow-crimson-500/20"
                    >
                      VIEW LIVE PROJECT
                      <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  {/* Hover glow border */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: "inset 0 0 0 1px rgba(230,57,70,0.2)" }} />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal delay={300}>
          <p className="mt-12 text-center font-display text-lg italic text-cream-100/40">
            Each project was built using AI-assisted development tools — learning by building.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
