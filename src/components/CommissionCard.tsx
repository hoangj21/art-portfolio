import Image from "next/image";
import type { Commission } from "@/lib/commission-data";

export function CommissionCard({ commission }: { commission: Commission }) {
  const exCount = commission.examples.length;
  const cols =
    exCount === 1 ? "1fr" :
    exCount === 3 ? "1fr 1fr 1fr" :
    "1fr 1fr";

  return (
    <div className="commission-card">
      <div
        className={`commission-examples${exCount === 1 ? " commission-examples--single" : ""}`}
        style={{ gridTemplateColumns: cols }}
      >
        {commission.examples.map((ex, i) => (
          <div key={i} className="ex-img">
            <Image
              src={ex.src}
              alt={`${commission.name} example ${i + 1}`}
              width={ex.w}
              height={ex.h}
              sizes={exCount === 1 ? "(max-width: 600px) 90vw, 500px" : "(max-width: 600px) 45vw, 200px"}
              quality={75}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
      <div className="commission-body">
        <div className="commission-card-header">
          <h4>{commission.name}</h4>
          <span className="commission-price">{commission.price}</span>
        </div>
        <p className="commission-desc">{commission.desc}</p>
        <p className="commission-includes">{commission.includes}</p>
        {commission.addons && <p className="commission-addons">{commission.addons}</p>}
      </div>
    </div>
  );
}
