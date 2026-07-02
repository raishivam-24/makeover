export default function Ornament({ variant = "line" }) {
  if (variant === "crest") {
    return (
      <svg
        className="ornament ornament-crest"
        width="72"
        height="40"
        viewBox="0 0 72 40"
        fill="none"
        aria-hidden="true"
      >
        <path d="M2 30 C 20 8, 52 8, 70 30" stroke="var(--gold)" strokeWidth="1" />
        <path
          d="M30 12 L33 18 L39 13 L37 20 L44 19 L38 24 L44 29 L36 27 L36 34 L32 28 L26 33 L27 26 L20 27 L26 22 L20 17 L28 18 Z"
          fill="var(--gold)"
        />
        <circle cx="2" cy="30" r="1.6" fill="var(--gold)" />
        <circle cx="70" cy="30" r="1.6" fill="var(--gold)" />
      </svg>
    );
  }

  return (
    <svg
      className="ornament ornament-line"
      width="140"
      height="16"
      viewBox="0 0 140 16"
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="8" x2="56" y2="8" stroke="var(--gold-dim)" strokeWidth="1" />
      <path d="M70 2 L74 8 L70 14 L66 8 Z" fill="var(--gold)" />
      <line x1="84" y1="8" x2="140" y2="8" stroke="var(--gold-dim)" strokeWidth="1" />
    </svg>
  );
}
