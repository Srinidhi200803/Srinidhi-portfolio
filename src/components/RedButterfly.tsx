interface RedButterflyProps {
  size?: number;
  className?: string;
  wingSpeed?: number;
}

export default function RedButterfly({
  size = 80,
  className = "",
  wingSpeed = 0.8,
}: RedButterflyProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="wingGradL" cx="70%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ff9b9b" />
          <stop offset="30%" stopColor="#f95e5e" />
          <stop offset="70%" stopColor="#e63946" />
          <stop offset="100%" stopColor="#9d0208" />
        </radialGradient>
        <radialGradient id="wingGradR" cx="30%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ff9b9b" />
          <stop offset="30%" stopColor="#f95e5e" />
          <stop offset="70%" stopColor="#e63946" />
          <stop offset="100%" stopColor="#9d0208" />
        </radialGradient>
        <radialGradient id="wingGradLB" cx="60%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#f95e5e" />
          <stop offset="60%" stopColor="#e63946" />
          <stop offset="100%" stopColor="#7a0a0a" />
        </radialGradient>
        <radialGradient id="wingGradRB" cx="40%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#f95e5e" />
          <stop offset="60%" stopColor="#e63946" />
          <stop offset="100%" stopColor="#7a0a0a" />
        </radialGradient>
      </defs>

      {/* Left upper wing */}
      <g style={{ transformOrigin: "52px 50px" }}>
        <ellipse
          cx="34"
          cy="38"
          rx="20"
          ry="24"
          fill="url(#wingGradL)"
          opacity="0.92"
          style={{
            transformOrigin: "52px 50px",
            animation: `wingFlap ${wingSpeed}s ease-in-out infinite`,
          }}
        />
        <ellipse cx="38" cy="34" rx="5" ry="4" fill="#fefdf9" opacity="0.15" />
        <ellipse cx="28" cy="48" rx="3" ry="2.5" fill="#fefdf9" opacity="0.1" />
      </g>

      {/* Right upper wing */}
      <g style={{ transformOrigin: "48px 50px" }}>
        <ellipse
          cx="66"
          cy="38"
          rx="20"
          ry="24"
          fill="url(#wingGradR)"
          opacity="0.92"
          style={{
            transformOrigin: "48px 50px",
            animation: `wingFlap ${wingSpeed}s ease-in-out infinite`,
          }}
        />
        <ellipse cx="62" cy="34" rx="5" ry="4" fill="#fefdf9" opacity="0.15" />
        <ellipse cx="72" cy="48" rx="3" ry="2.5" fill="#fefdf9" opacity="0.1" />
      </g>

      {/* Left lower wing */}
      <g style={{ transformOrigin: "52px 52px" }}>
        <ellipse
          cx="40"
          cy="66"
          rx="13"
          ry="16"
          fill="url(#wingGradLB)"
          opacity="0.85"
          style={{
            transformOrigin: "52px 52px",
            animation: `wingFlap ${wingSpeed}s ease-in-out infinite`,
          }}
        />
        <ellipse cx="38" cy="62" rx="3" ry="2.5" fill="#fefdf9" opacity="0.1" />
      </g>

      {/* Right lower wing */}
      <g style={{ transformOrigin: "48px 52px" }}>
        <ellipse
          cx="60"
          cy="66"
          rx="13"
          ry="16"
          fill="url(#wingGradRB)"
          opacity="0.85"
          style={{
            transformOrigin: "48px 52px",
            animation: `wingFlap ${wingSpeed}s ease-in-out infinite`,
          }}
        />
        <ellipse cx="62" cy="62" rx="3" ry="2.5" fill="#fefdf9" opacity="0.1" />
      </g>

      {/* Body */}
      <ellipse cx="50" cy="50" rx="2.5" ry="20" fill="#1a1a1a" />
      <ellipse cx="50" cy="32" rx="3" ry="4" fill="#1a1a1a" />
      {/* Antennae */}
      <path
        d="M49 30 Q44 22 42 18"
        stroke="#1a1a1a"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M51 30 Q56 22 58 18"
        stroke="#1a1a1a"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="42" cy="18" r="1.5" fill="#e63946" />
      <circle cx="58" cy="18" r="1.5" fill="#e63946" />
    </svg>
  );
}
