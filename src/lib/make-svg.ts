export function makeSVG(
  w: number,
  h: number,
  colors: [string, string, string, string],
  cat: string
): string {
  const c = colors;
  const seed = (h * 7 + c[0].charCodeAt(1) + w) & 0xffff;
  let s = `<rect x="0" y="0" width="${w}" height="${h}" fill="${c[0]}" />`;

  if (cat === "digital" || cat === "sequential") {
    const x1 = seed % (w * 0.5);
    s += `<polygon points="${x1},${h} ${x1 + w * 0.4},${seed % (h * 0.6)} ${w},${h}" fill="${c[1]}" opacity="0.7" />`;
    s += `<rect x="${(seed % 120) + 20}" y="${(seed % 80) + 20}" width="${w * 0.3}" height="${h * 0.15}" fill="${c[2]}" opacity="0.3" rx="1" />`;
    s += `<line x1="0" y1="${h * 0.6}" x2="${w}" y2="${h * 0.35}" stroke="${c[3]}" stroke-width="2" opacity="0.4" />`;
    s += `<circle cx="${w * 0.7}" cy="${h * 0.3}" r="${25 + (seed % 25)}" fill="${c[2]}" opacity="0.2" />`;
    if (cat === "sequential") {
      s += `<line x1="${w * 0.5}" y1="0" x2="${w * 0.5}" y2="${h}" stroke="${c[2]}" stroke-width="1.5" opacity="0.15" />`;
      s += `<line x1="0" y1="${h * 0.33}" x2="${w}" y2="${h * 0.33}" stroke="${c[2]}" stroke-width="1" opacity="0.12" />`;
      s += `<line x1="0" y1="${h * 0.66}" x2="${w}" y2="${h * 0.66}" stroke="${c[2]}" stroke-width="1" opacity="0.12" />`;
    }
  } else if (cat === "ink") {
    for (let i = 0; i < 10; i++) {
      const lx = (seed * (i + 1) * 7) % w;
      const ly = (seed * (i + 1) * 3) % h;
      s += `<line x1="${lx}" y1="${ly}" x2="${(lx + 80 + i * 15) % w}" y2="${(ly + 50 + i * 12) % h}" stroke="${c[1]}" stroke-width="${1 + i * 0.4}" opacity="${0.2 + i * 0.07}" />`;
    }
    s += `<circle cx="${w * 0.5}" cy="${h * 0.45}" r="${50 + (seed % 40)}" fill="none" stroke="${c[1]}" stroke-width="2" opacity="0.35" />`;
    s += `<circle cx="${w * 0.35}" cy="${h * 0.6}" r="${20 + (seed % 15)}" fill="none" stroke="${c[2]}" stroke-width="1.5" opacity="0.2" />`;
  } else if (cat === "photography") {
    s += `<ellipse cx="${w * 0.5}" cy="${h * 0.7}" rx="${w * 0.7}" ry="${h * 0.5}" fill="${c[1]}" opacity="0.12" />`;
    s += `<ellipse cx="${w * 0.3}" cy="${h * 0.4}" rx="50" ry="70" fill="${c[2]}" opacity="0.2" />`;
    s += `<ellipse cx="${w * 0.7}" cy="${h * 0.5}" rx="35" ry="45" fill="${c[1]}" opacity="0.25" />`;
    s += `<polygon points="0,${h * 0.6} ${w * 0.25},${h * 0.35} ${w * 0.6},${h * 0.45} ${w},${h * 0.5} ${w},${h} 0,${h}" fill="${c[2]}" opacity="0.15" />`;
    s += `<circle cx="${w * 0.82}" cy="${h * 0.14}" r="14" fill="${c[3]}" opacity="0.25" />`;
  } else {
    s += `<rect x="${w * 0.08}" y="${h * 0.08}" width="${w * 0.38}" height="${h * 0.75}" fill="${c[1]}" opacity="0.12" rx="1" />`;
    s += `<rect x="${w * 0.52}" y="${h * 0.15}" width="${w * 0.38}" height="${h * 0.65}" fill="${c[2]}" opacity="0.08" rx="1" />`;
    s += `<line x1="0" y1="${h * 0.87}" x2="${w}" y2="${h * 0.87}" stroke="${c[3]}" stroke-width="1" opacity="0.25" />`;
    s += `<rect x="${w * 0.14}" y="${h * 0.25}" width="10" height="25" fill="${c[1]}" opacity="0.2" />`;
    s += `<rect x="${w * 0.58}" y="${h * 0.3}" width="8" height="20" fill="${c[2]}" opacity="0.15" />`;
  }
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}
