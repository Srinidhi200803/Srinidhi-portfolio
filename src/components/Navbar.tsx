import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#achievements" },
  { label: "Exploring", href: "#exploring" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong py-3 shadow-lg shadow-ink-900/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#hero" className="group flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 100 100" className="transition-transform duration-500 group-hover:rotate-12">
            <defs>
              <radialGradient id="navWing" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#f95e5e" />
                <stop offset="100%" stopColor="#9d0208" />
              </radialGradient>
            </defs>
            <ellipse cx="34" cy="40" rx="18" ry="22" fill="url(#navWing)" opacity="0.9" />
            <ellipse cx="66" cy="40" rx="18" ry="22" fill="url(#navWing)" opacity="0.9" />
            <ellipse cx="42" cy="66" rx="11" ry="14" fill="url(#navWing)" opacity="0.8" />
            <ellipse cx="58" cy="66" rx="11" ry="14" fill="url(#navWing)" opacity="0.8" />
            <ellipse cx="50" cy="50" rx="2" ry="18" fill="#1a1a1a" />
          </svg>
          <span className="font-display text-xl font-medium tracking-wide text-cream-100">
            Srinidhi
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-light tracking-wide text-cream-100/70 transition-colors duration-300 hover:text-cream-50 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-crimson-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="text-cream-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="glass-strong mt-3 mx-6 rounded-2xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-light tracking-wide text-cream-100/80 transition-colors hover:text-crimson-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
