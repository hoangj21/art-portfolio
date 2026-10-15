import { DecoSep } from "@/components/DecoSep";
import { GeoDecoration } from "@/components/GeoDecoration";

const tools = [
  "Clip Studio Paint",
  "Wacom Cintiq",
  "iPad Pro",
  "Fountain Pens",
  "India Ink",
  "Canon R50",
  "Lightroom",
  "Photoshop",
];

export default function AboutPage() {
  return (
    <header className="hero section-block section-block--glow section-block--deep cyan-glow-tl">
      <div className="circuit-pattern" />
      <div className="about-wrap">
        <GeoDecoration variant="about" />
        <GeoDecoration variant="about-spin" />

        {/* Data tags */}
        <span className="data-tag" style={{ top: 100, right: 40 }}>
          SECTOR:ART // BIO
        </span>
        <span className="data-tag" style={{ bottom: 200, left: 0 }}>
          NODE.ABOUT // 002
        </span>

        <div className="about-layout">
          <h2 className="section-heading">About Me</h2>
          <DecoSep className="mb-8" />
          <div className="about-bio">
            <p>
              I&apos;m a Portland-based illustrator working across digital, traditional ink, and
              comics. My work pulls from sci-fi, horror, industrial, and metal aesthetics. My primary tools
              are Clip Studio Paint, a Wacom Cintiq, fountain pens, and india ink.
            </p>
            <p>
              I also shoot photography including local black metal concerts, urban architecture, and travel.
              It started as reference-gathering for illustrations and a way to document shows for
              friends, and it became its own practice. I shoot with a Canon R50 and process
              everything in RAW.
            </p>
            <p>
              By day, I&apos;m a solutions engineer working with security systems and enterprise software. 
              My background in computer science and programming is partially what made me so interested in the 
              cyberpunk aesthetics that inform my work. This site is built by yours truly with 
              Next.js, React, and Tailwind CSS.
            </p>
          </div>
          <div className="tools-section">
            <h3>Tools &amp; Mediums</h3>
            <div className="tools-grid">
              {tools.map((tool) => (
                <span key={tool} className="tool-badge">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <a href="https://joannahoang.me" target="_blank" rel="noopener noreferrer" className="about-cta">
            View my engineering portfolio →
          </a>
        </div>
      </div>
    </header>
  );
}
