import { useMemo } from "react";

interface FirefliesProps {
  count?: number;
  className?: string;
}

interface Firefly {
  top: string;
  left: string;
  size: number;
  duration: string;
  delay: string;
  color: string;
}

export default function Fireflies({ count = 30, className = "" }: FirefliesProps) {
  const fireflies = useMemo<Firefly[]>(() => {
    const colors = ["#fdba74", "#f95e5e", "#e3d0a0", "#7ab38a"];
    return Array.from({ length: count }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 5}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {fireflies.map((f, i) => (
        <div
          key={i}
          className="firefly absolute rounded-full"
          style={{
            top: f.top,
            left: f.left,
            width: `${f.size}px`,
            height: `${f.size}px`,
            backgroundColor: f.color,
            boxShadow: `0 0 ${f.size * 3}px ${f.size}px ${f.color}40`,
            ["--firefly-duration" as string]: f.duration,
            ["--firefly-delay" as string]: f.delay,
          }}
        />
      ))}
    </div>
  );
}
