import Link from "next/link";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="px-[clamp(16px,4vw,48px)] pb-12 max-w-[1200px] mx-auto relative">
      <hr className="gradient-divider mb-12" />
      <div className="flex justify-between items-start flex-wrap gap-8 max-sm:flex-col">
        <div>
          <p className="font-hero text-[28px] tracking-wider uppercase m-0 mb-2">Joanna Hoang</p>
          <p className="text-[13px] text-fg-muted m-0 mb-5">
            Illustration · Sequential Art · Ink · Photography
          </p>
          <div className="flex gap-5">
            <Link href="/about" className="text-[13px] text-fg-muted no-underline hover:text-accent-bright transition-colors">
              About
            </Link>
            <Link href="/commissions" className="text-[13px] text-fg-muted no-underline hover:text-accent-bright transition-colors">
              Commissions
            </Link>
            <Link href="/contact" className="text-[13px] text-fg-muted no-underline hover:text-accent-bright transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="text-right max-sm:text-left">
          <div className="flex gap-2.5 mb-3 justify-end max-sm:justify-start">
            <SocialIcons />
          </div>
          <p className="text-[12px] text-fg-muted opacity-60">© 2026 Joanna Hoang</p>
          <div className="mt-2">
            <a href="#" className="text-[12px] text-accent no-underline opacity-80 hover:opacity-100 hover:text-accent-bright transition-opacity">
              Solutions Engineer Portfolio →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
