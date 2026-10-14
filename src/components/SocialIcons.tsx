const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/artsfromjoanna/",
    svg: (
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    ),
  },
  {
    name: "ArtStation",
    href: "#",
    svg: (
      <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24-2.218a2.434 2.434 0 0 0-.453-1.392L15.63 1.803a2.452 2.452 0 0 0-2.106-1.239H9.58a2.468 2.468 0 0 0-2.118 1.239l-1.4 2.424 8.38 14.513h5.9L24 15.505zM4.166 8.18l3.947 6.838L4.166 8.18z" />
    ),
  },
  {
    name: "TikTok",
    href: "#",
    svg: (
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    ),
  },
  {
    name: "Bluesky",
    href: "#",
    svg: (
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.601 3.476 6.178 3.233-4.337.613-8.14 2.1-4.584 7.417 3.907 5.127 5.37-.903 5.782-2.607.413 1.704 1.486 7.564 5.782 2.607 3.443-5.149-.076-6.804-4.584-7.417 2.577.243 5.393-.606 6.178-3.233C15.622 9.418 16 4.458 16 3.768c0-.688-.139-1.86-.902-2.203-.659-.3-1.664-.62-4.3 1.24C8.046 4.748 5.087 8.687 4 10.8" />
    ),
  },
];

export function SocialIcons() {
  return (
    <div className="flex gap-2.5">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          title={s.name}
          aria-label={s.name}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border border-border-red rounded-sm flex items-center justify-center text-fg-muted no-underline transition-all hover:border-accent hover:text-accent-bright hover:bg-accent/10 hover:shadow-[0_0_12px_rgba(196,32,51,0.2)]"
        >
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
            {s.svg}
          </svg>
        </a>
      ))}
    </div>
  );
}
