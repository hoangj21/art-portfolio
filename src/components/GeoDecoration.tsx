interface GeoDecorationProps {
  variant: "gallery-hero" | "gallery-hero-spin" | "about" | "about-spin" | "commissions" | "commissions-spin" | "contact" | "contact-spin";
}

export function GeoDecoration({ variant }: GeoDecorationProps) {
  switch (variant) {
    case "gallery-hero":
      return (
        <svg
          className="geo-deco geo-medium"
          style={{ top: 60, right: "clamp(0px,5vw,40px)", width: "clamp(200px,35vw,480px)", height: "clamp(200px,35vw,480px)" }}
          viewBox="0 0 480 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="240,15 440,130 385,420 95,420 40,130" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          <polygon points="240,65 390,155 355,375 125,375 90,155" stroke="var(--accent-deep)" strokeWidth="1" fill="none" />
          <polygon points="240,115 340,185 315,325 165,325 140,185" stroke="var(--accent)" strokeWidth="0.7" fill="none" />
          <circle cx="240" cy="240" r="95" stroke="var(--accent-deep)" strokeWidth="0.8" fill="none" strokeDasharray="4 8" />
          <circle cx="240" cy="240" r="160" stroke="var(--accent)" strokeWidth="0.4" fill="none" strokeDasharray="2 12" />
          <line x1="240" y1="15" x2="240" y2="420" stroke="var(--accent)" strokeWidth="0.3" />
          <line x1="40" y1="240" x2="440" y2="240" stroke="var(--accent-deep)" strokeWidth="0.3" />
        </svg>
      );
    case "gallery-hero-spin":
      return (
        <svg
          className="geo-deco geo-subtle geo-spin"
          style={{ bottom: -20, left: "clamp(-80px,-5vw,-20px)", width: 260, height: 260 }}
          viewBox="0 0 260 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="30" y="30" width="200" height="200" stroke="var(--accent)" strokeWidth="1" fill="none" transform="rotate(12 130 130)" />
          <rect x="55" y="55" width="150" height="150" stroke="var(--accent-deep)" strokeWidth="0.8" fill="none" transform="rotate(24 130 130)" />
          <rect x="80" y="80" width="100" height="100" stroke="var(--accent)" strokeWidth="0.6" fill="none" transform="rotate(36 130 130)" />
        </svg>
      );
    case "about":
      return (
        <svg
          className="geo-deco geo-medium"
          style={{ top: -40, right: -60, width: 440, height: 440 }}
          viewBox="0 0 440 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="220,15 420,145 380,400 60,400 20,145" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
          <polygon points="220,60 370,160 340,350 100,350 70,160" stroke="var(--accent-deep)" strokeWidth="1" fill="none" />
          <line x1="220" y1="15" x2="220" y2="400" stroke="var(--accent)" strokeWidth="0.4" />
          <line x1="20" y1="145" x2="420" y2="145" stroke="var(--accent-deep)" strokeWidth="0.3" />
          <circle cx="220" cy="220" r="90" stroke="var(--accent)" strokeWidth="0.8" fill="none" />
          <circle cx="220" cy="220" r="140" stroke="var(--accent-deep)" strokeWidth="0.5" fill="none" strokeDasharray="4 8" />
          <circle cx="220" cy="220" r="185" stroke="var(--accent)" strokeWidth="0.3" fill="none" strokeDasharray="2 12" />
        </svg>
      );
    case "about-spin":
      return (
        <svg
          className="geo-deco geo-subtle geo-spin"
          style={{ bottom: 60, left: -80, width: 300, height: 300 }}
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="30" y="30" width="240" height="240" stroke="var(--accent)" strokeWidth="1" fill="none" transform="rotate(15 150 150)" />
          <rect x="60" y="60" width="180" height="180" stroke="var(--accent-deep)" strokeWidth="0.8" fill="none" transform="rotate(30 150 150)" />
          <rect x="90" y="90" width="120" height="120" stroke="var(--accent)" strokeWidth="0.5" fill="none" transform="rotate(45 150 150)" />
        </svg>
      );
    case "commissions":
      return (
        <svg
          className="geo-deco geo-medium"
          style={{ top: 0, right: -40, width: 400, height: 400 }}
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="200,10 380,100 350,330 50,330 20,100" stroke="var(--accent)" strokeWidth="1.2" fill="none" />
          <polygon points="200,55 330,120 305,285 95,285 70,120" stroke="var(--accent-deep)" strokeWidth="0.8" fill="none" />
          <line x1="200" y1="10" x2="50" y2="330" stroke="var(--accent)" strokeWidth="0.4" />
          <line x1="200" y1="10" x2="350" y2="330" stroke="var(--accent-deep)" strokeWidth="0.4" />
          <circle cx="200" cy="200" r="120" stroke="var(--accent)" strokeWidth="0.4" fill="none" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="65" stroke="var(--accent-deep)" strokeWidth="0.6" fill="none" />
        </svg>
      );
    case "commissions-spin":
      return (
        <svg
          className="geo-deco geo-subtle geo-spin"
          style={{ bottom: -200, left: -100, width: 340, height: 340 }}
          viewBox="0 0 340 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="170" cy="170" r="150" stroke="var(--accent)" strokeWidth="0.8" fill="none" />
          <circle cx="170" cy="170" r="110" stroke="var(--accent-deep)" strokeWidth="0.6" fill="none" strokeDasharray="8 4" />
          <circle cx="170" cy="170" r="70" stroke="var(--accent)" strokeWidth="0.4" fill="none" />
          <line x1="20" y1="170" x2="320" y2="170" stroke="var(--accent-deep)" strokeWidth="0.3" />
          <line x1="170" y1="20" x2="170" y2="320" stroke="var(--accent)" strokeWidth="0.3" />
        </svg>
      );
    case "contact":
      return (
        <svg
          className="geo-deco geo-medium"
          style={{ top: 20, right: -30, width: 340, height: 340 }}
          viewBox="0 0 340 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="170" cy="170" r="150" stroke="var(--accent)" strokeWidth="1" fill="none" />
          <circle cx="170" cy="170" r="110" stroke="var(--accent-deep)" strokeWidth="0.8" fill="none" />
          <circle cx="170" cy="170" r="70" stroke="var(--accent)" strokeWidth="0.5" fill="none" />
          <circle cx="170" cy="170" r="30" stroke="var(--accent-deep)" strokeWidth="0.4" fill="none" />
          <line x1="20" y1="170" x2="320" y2="170" stroke="var(--accent)" strokeWidth="0.4" />
          <line x1="170" y1="20" x2="170" y2="320" stroke="var(--accent-deep)" strokeWidth="0.4" />
          <line x1="50" y1="50" x2="290" y2="290" stroke="var(--accent)" strokeWidth="0.25" />
          <line x1="290" y1="50" x2="50" y2="290" stroke="var(--accent-deep)" strokeWidth="0.25" />
        </svg>
      );
    case "contact-spin":
      return (
        <svg
          className="geo-deco geo-subtle geo-spin"
          style={{ bottom: 0, left: -60, width: 220, height: 220 }}
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="110,10 210,70 190,180 30,180 10,70" stroke="var(--accent)" strokeWidth="0.8" fill="none" />
          <polygon points="110,40 175,75 160,150 60,150 45,75" stroke="var(--accent-deep)" strokeWidth="0.5" fill="none" />
        </svg>
      );
  }
}
