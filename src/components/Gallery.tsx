"use client";

import React, { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { pieces, catLabels, type CategoryFilter, type GalleryPiece } from "@/lib/gallery-data";
import type { MasonryProps } from "masonic";

type GalleryItem = GalleryPiece & { _index: number; id: string };

const Masonry = dynamic(() => import("masonic").then((m) => m.Masonry), {
  ssr: false,
}) as unknown as React.ComponentType<MasonryProps<GalleryItem>>;

import { Lightbox } from "./Lightbox";

const filters: { cat: CategoryFilter; label: string }[] = [
  { cat: "all", label: "All" },
  { cat: "digital", label: "Digital Illustration" },
  { cat: "sequential", label: "Sequential Art" },
  { cat: "ink", label: "Ink & Traditional" },
  { cat: "animation", label: "Animation & Process" },
  { cat: "photography", label: "Photography" },
];

function MasonryCard({ data: piece, width, tapped }: { data: GalleryItem; width: number; tapped?: boolean }) {
  const height = Math.round(width * (piece.h / piece.w));

  return (
    <div className={`gallery-card${tapped ? " tapped" : ""}`} style={{ width, height }}>
      {piece.video ? (
        <video
          src={piece.src}
          className="card-img"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      ) : (
        <Image
          src={piece.src}
          alt={piece.title || catLabels[piece.cat]}
          width={piece.w}
          height={piece.h}
          className="card-img"
          sizes="(max-width: 600px) 50vw, (max-width: 1000px) 50vw, 33vw"
          quality={80}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      <div className="card-overlay">
        <span className="card-tag">{catLabels[piece.cat]}</span>
        {piece.title && <p className="card-title">{piece.title}</p>}
      </div>
    </div>
  );
}

export function Gallery() {
  const [activeCat, setActiveCat] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => {
      const items = activeCat === "all" ? [...pieces] : pieces.filter((p) => p.cat === activeCat);
      return items.map((p, i) => ({ ...p, _index: i, id: `${p.cat}-${i}-${p.src}` }));
    },
    [activeCat]
  );

  /* On touch: first tap reveals overlay, second tap opens lightbox.
     On desktop (hover): click goes straight to lightbox. */
  const isTouchRef = React.useRef(false);

  const handleTouch = useCallback(() => {
    isTouchRef.current = true;
  }, []);

  const handleClick = useCallback(
    (index: number) => {
      if (isTouchRef.current) {
        isTouchRef.current = false; // reset for next event
        if (tappedIndex === index) {
          // second tap → open lightbox
          setLightboxIndex(index);
          setTappedIndex(null);
        } else {
          // first tap → reveal overlay
          setTappedIndex(index);
        }
      } else {
        // mouse click → straight to lightbox
        setLightboxIndex(index);
      }
    },
    [tappedIndex]
  );

  function navLightbox(dir: number) {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + filtered.length) % filtered.length);
  }

  const renderItem = useCallback(
    (props: { data: GalleryItem; width: number; index: number }) => {
      const idx = props.data._index;
      return (
        <div
          onTouchStart={handleTouch}
          onClick={() => handleClick(idx)}
          className={tappedIndex === idx ? "gallery-card-wrapper tapped-wrapper" : "gallery-card-wrapper"}
        >
          <MasonryCard data={props.data} width={props.width} tapped={tappedIndex === idx} />
        </div>
      );
    },
    [handleClick, handleTouch, tappedIndex]
  );

  return (
    <>
      {/* Filter bar */}
      <div className="filter-section">
        <div className="filter-bar">
          {filters.map((f) => (
            <button
              key={f.cat}
              className={`filter-btn ${activeCat === f.cat ? "active" : ""}`}
              onClick={() => setActiveCat(f.cat)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <div className="gallery section-block section-block--glow-r">
        <div className="circuit-pattern" style={{ opacity: 0.02 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Masonry
            key={activeCat}
            items={filtered}
            columnGutter={14}
            columnCount={3}
            overscanBy={5}
            render={renderItem}
          />
        </div>
      </div>

      {/* Post-gallery stripe */}
      <div className="stripe-bar" style={{ maxWidth: 1200, margin: "32px auto 0" }} />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          pieces={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={navLightbox}
        />
      )}
    </>
  );
}
