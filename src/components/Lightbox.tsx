"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import type { GalleryPiece } from "@/lib/gallery-data";
import { catLabels } from "@/lib/gallery-data";

interface LightboxProps {
  pieces: GalleryPiece[];
  index: number;
  onClose: () => void;
  onNav: (dir: number) => void;
}

export function Lightbox({ pieces, index, onClose, onNav }: LightboxProps) {
  const lbRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const tracking = useRef(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    },
    [onClose, onNav]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const piece = pieces[index];
  if (!piece) return null;

  return (
    <div
      ref={lbRef}
      className="lightbox open"
      onClick={(e) => {
        if (e.target === lbRef.current) onClose();
      }}
      onTouchStart={(e) => {
        if (e.touches.length === 1) {
          startX.current = e.touches[0].clientX;
          startY.current = e.touches[0].clientY;
          tracking.current = true;
        }
      }}
      onTouchEnd={(e) => {
        if (!tracking.current) return;
        tracking.current = false;
        const dx = e.changedTouches[0].clientX - startX.current;
        const dy = e.changedTouches[0].clientY - startY.current;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
          onNav(dx < 0 ? 1 : -1);
        }
      }}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <button className="lightbox-nav lightbox-prev" onClick={() => onNav(-1)} aria-label="Previous">
        ‹
      </button>
      <div className="lightbox-img-wrap">
        {piece.video ? (
          <video
            src={piece.src}
            autoPlay
            muted
            loop
            playsInline
            style={{
              maxWidth: "90vw",
              maxHeight: "80vh",
              objectFit: "contain",
              display: "block",
            }}
          />
        ) : (
          <Image
            src={piece.src}
            alt={piece.title || catLabels[piece.cat]}
            width={piece.w}
            height={piece.h}
            quality={90}
            sizes="90vw"
            style={{
              maxWidth: "90vw",
              maxHeight: "80vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        )}
      </div>
      <button className="lightbox-nav lightbox-next" onClick={() => onNav(1)} aria-label="Next">
        ›
      </button>
      <div className="lightbox-meta">
        <span className="card-tag">{catLabels[piece.cat]}</span>
        <span className="card-title" style={{ color: "var(--fg)", textAlign: "center" }}>
          {piece.title || ""}
        </span>
        <span className="lightbox-counter">
          {index + 1} / {pieces.length}
        </span>
      </div>
    </div>
  );
}
