import { DecoSep } from "@/components/DecoSep";
import { GeoDecoration } from "@/components/GeoDecoration";
import { Marquee } from "@/components/Marquee";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className="hero section-block section-block--glow cyan-glow-br">
        <div className="scan-line" />
        <div className="circuit-pattern" />
        <div className="hero-bg-glow" />
        <GeoDecoration variant="gallery-hero" />
        <GeoDecoration variant="gallery-hero-spin" />
        <div className="hero-content">
          <h1 className="hero-name">
            Joanna
            <br />
            <span className="accent">Hoang</span>
          </h1>
          <p className="hero-sub">Illustration · Sequential Art · Ink · Photography</p>
          <DecoSep />
        </div>
      </header>

      {/* Marquee ticker */}
      <Marquee />

      {/* Gallery with filter + lightbox */}
      <Gallery />
    </>
  );
}
