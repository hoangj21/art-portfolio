import Link from "next/link";
import { DecoSep } from "@/components/DecoSep";
import { GeoDecoration } from "@/components/GeoDecoration";
import { CommissionCard } from "@/components/CommissionCard";
import { commissions } from "@/lib/commission-data";

const steps = [
  {
    num: 1,
    title: "Reach out",
    desc: "Send me a message with what you're looking for — references, ideas, and timeline are all helpful.",
  },
  {
    num: 2,
    title: "Quote & brief",
    desc: "I'll respond within 48 hours with a quote and any questions. Once we agree on scope, I'll send an invoice on the agreed amount.",
  },
  {
    num: 3,
    title: "Sketch & feedback",
    desc: "You'll see a rough sketch or comp for approval before I move to final. Two rounds of revisions are included.",
  },
  {
    num: 4,
    title: "Final delivery",
    desc: "For larger commissions, the remaining 50% is due on completion. You get full-res files in your preferred format. Print-ready on request.",
  },
];

const tos = [
  { label: "Payment.", text: "50% upfront, 50% on completion, pricing in USD.  Unless the amount is less than $50 USD, in which case the full amount is due up front. Payment via PayPal or Venmo. Work begins after the deposit clears." },
  { label: "Revisions.", text: "Two rounds of revisions are included in all commissions. Additional revisions are billed at a flat rate agreed upon beforehand." },
  { label: "Turnaround.", text: "Estimated delivery times vary by commission type and complexity. Rush orders may incur a fee — I'll communicate any changes to the timeline." },
  { label: "Usage rights.", text: "You receive personal use rights to the finished piece. Commercial use (merchandise, print sales, branding) requires a separate license. Please ask if you're unsure." },
  { label: "Credit.", text: "I ask that you credit me when posting commissioned work online. A tag or link is appreciated." },
  { label: "Refunds.", text: "The deposit is non-refundable once the sketch phase begins. If I'm unable to complete the work, you'll receive a full refund." },
  { label: "Content I won't draw.", text: "I reserve the right to decline any commission at my discretion. Hateful, discriminatory, or illegal content will be refused." },
  { label: "Communication.", text: "I'll keep you updated throughout the process, and send progress updates as needed. If I don't hear back from your initial inquiry within 30 days, the commission may be cancelled and the slot reopened." },
];

export default function CommissionsPage() {
  return (
    <header className="hero section-block section-block--glow section-block--red cyan-glow-tl">
      <div className="circuit-pattern" />
      <div className="commissions-wrap">
        <GeoDecoration variant="commissions" />

        {/* Data tags */}
        <span className="data-tag" style={{ top: 100, left: 0 }}>
          NODE.COMMISSIONS // 003
        </span>
        <span className="data-tag" style={{ top: 340, right: 40 }}>
          STATUS:OPEN
        </span>

        <div className="page-inner">
          <div className="commissions-header">
            <h2 className="section-heading">Commissions</h2>
            <DecoSep className="mt-1 mb-4" />
            <div className="status-badge status-open">✦ Open for Commissions</div>
          </div>

          <div className="commission-grid">
            {commissions.map((c) => (
              <CommissionCard key={c.name} commission={c} />
            ))}
          </div>

          <div className="stripe-bar" style={{ marginBottom: 40 }} />

          {/* How It Works */}
          <div className="process-section">
            <h3>How It Works</h3>
            <div>
              {steps.map((step) => (
                <div key={step.num} className="process-step">
                  <span className="step-num">{step.num}</span>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="gradient-divider-subtle" style={{ marginBottom: 40 }} />

          {/* Terms of Service */}
          <div className="tos-section">
            <h3>Terms of Service</h3>
            <ul className="tos-list">
              {tos.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom decorative geometry */}
          <div style={{ position: "relative", height: 0 }}>
            <GeoDecoration variant="commissions-spin" />
          </div>

          <div style={{ marginTop: 8 }}>
            <Link href="/contact" className="commission-cta">
              Request a Commission →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
