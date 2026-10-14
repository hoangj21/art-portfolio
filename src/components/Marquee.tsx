"use client";

const items = [
  { t: "Digital Illustration", accent: false },
  { t: "◆", accent: true },
  { t: "Sequential Art", accent: false },
  { t: "//", accent: true },
  { t: "Ink & Traditional", accent: false },
  { t: "◆", accent: true },
  { t: "Commissions Open", accent: false, highlight: true },
  { t: "//", accent: true },
  { t: "Portland OR", accent: false },
  { t: "◆", accent: true },
  { t: "Photography", accent: false },
  { t: "//", accent: true },
];

export function Marquee() {
  // Repeat 4x for seamless loop
  const repeated = Array.from({ length: 4 }, () => items).flat();

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={
              item.accent
                ? "m-sep"
                : item.highlight
                  ? "m-accent"
                  : ""
            }
          >
            {item.t}
          </span>
        ))}
      </div>
    </div>
  );
}
