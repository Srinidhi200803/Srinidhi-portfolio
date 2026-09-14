import { useEffect, useRef, useState } from "react";
import { ArrowDown, User } from "lucide-react";
import RedButterfly from "./RedButterfly";
import Fireflies from "./Fireflies";
import { images } from "@/config/projects";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(() => setLoaded(true), 100);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-ink-900" />

      {/* Deep foliage background — lazy loaded */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images.darkFoliage})`,
          opacity: loaded ? 0.35 : 0,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/40 to-ink-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-transparent to-ink-900/70" />

      {/* Vignette */}
      <div className="vignette absolute inset-0" />

      {/* Fog layer */}
      <div className="fog-layer absolute inset-0" />

      {/* Fireflies */}
      <Fireflies count={25} />

      {/* Floating butterflies */}
      <div
        className="butterfly-float absolute left-[10%] top-[20%] opacity-80"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      >
        <RedButterfly size={70} wingSpeed={0.7} />
      </div>
      <div
        className="absolute right-[12%] top-[30%] opacity-60"
        style={{
          transform: `translateY(${scrollY * -0.25}px)`,
          animation: "drift 30s ease-in-out infinite",
        }}
      >
        <RedButterfly size={50} wingSpeed={0.9} />
      </div>
      <div
        className="absolute bottom-[15%] left-[20%] opacity-50"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
          animation: "drift 25s ease-in-out infinite reverse",
        }}
      >
        <RedButterfly size={40} wingSpeed={1.1} />
      </div>

      {/* Tiger lily accents — lazy loaded */}
      <div
        className="absolute -bottom-10 left-0 h-72 w-72 rounded-full bg-cover bg-center opacity-20 blur-md"
        style={{
          backgroundImage: `url(${images.tigerLilyDark})`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      <div
        className="absolute -bottom-5 right-0 h-80 w-80 rounded-full bg-cover bg-center opacity-15 blur-md"
        style={{
          backgroundImage: `url(${images.tigerLilyClose})`,
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      {/* Main content */}
      <div
        className={`relative z-10 flex flex-col items-center px-6 text-center transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Small butterfly above name */}
        <div className="mb-6 animate-float-slow">
          <RedButterfly size={60} wingSpeed={0.6} />
        </div>

        <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-botanical-300/80">
          Computer Science Student • Builder • Explorer
        </p>

        <h1 className="font-display text-7xl font-light tracking-wide text-cream-50 sm:text-8xl md:text-9xl lg:text-[10rem]">
          <span className="text-gradient-cream">SRINIDHI</span>
        </h1>

        <div className="my-8 h-px w-32 bg-gradient-to-r from-transparent via-crimson-500 to-transparent" />

        <p className="font-display text-xl italic text-cream-100/70 sm:text-2xl md:text-3xl">
          "Turning curiosity into things people can experience."
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="btn-glow group relative flex items-center gap-3 rounded-full border border-crimson-500/40 bg-crimson-500/10 px-8 py-4 text-sm font-medium tracking-wide text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-crimson-500/70 hover:bg-crimson-500/20 hover:shadow-lg hover:shadow-crimson-500/20"
          >
            EXPLORE MY WORK
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
          </a>
          <a
            href="#about"
            className="btn-glow group relative flex items-center gap-3 rounded-full border border-botanical-400/30 bg-botanical-900/20 px-8 py-4 text-sm font-medium tracking-wide text-cream-100/80 backdrop-blur-sm transition-all duration-300 hover:border-botanical-400/60 hover:bg-botanical-800/30 hover:text-cream-50"
          >
            ABOUT ME
            <User size={16} className="transition-transform duration-300 group-hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500"
        style={{ opacity: scrollY < 100 ? 0.6 : 0 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-cream-100/40">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-botanical-400/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
