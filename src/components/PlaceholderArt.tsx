import { makeSVG } from "@/lib/make-svg";

interface PlaceholderArtProps {
  w: number;
  h: number;
  colors: [string, string, string, string];
  cat: string;
  className?: string;
}

export function PlaceholderArt({ w, h, colors, cat, className = "" }: PlaceholderArtProps) {
  return (
    <div
      className={`placeholder-art ${className}`}
      dangerouslySetInnerHTML={{ __html: makeSVG(w, h, colors, cat) }}
    />
  );
}
