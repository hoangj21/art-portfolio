export function HudFrame() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {/* Corner brackets */}
      <div className="absolute top-3 left-3 w-[60px] h-[60px] border-t-2 border-l-2 border-accent/30">
        <span className="absolute -top-1 -left-[3px] font-mono text-[10px] text-accent/30">+</span>
      </div>
      <div className="absolute top-3 right-3 w-[60px] h-[60px] border-t-2 border-r-2 border-accent/30">
        <span className="absolute -top-1 -right-[3px] font-mono text-[10px] text-accent/30">+</span>
      </div>
      <div className="absolute bottom-3 left-3 w-[60px] h-[60px] border-b-2 border-l-2 border-accent/20">
        <span className="absolute -bottom-1 -left-[3px] font-mono text-[10px] text-accent/30">+</span>
      </div>
      <div className="absolute bottom-3 right-3 w-[60px] h-[60px] border-b-2 border-r-2 border-accent/20">
        <span className="absolute -bottom-1 -right-[3px] font-mono text-[10px] text-accent/30">+</span>
      </div>

      {/* HUD readouts */}
      <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[9px] text-teal/20 tracking-wider uppercase">
        SYS.PORTFOLIO // V1.0
      </span>
      <span className="absolute top-1/2 right-4 font-mono text-[9px] text-teal/20 tracking-wider uppercase origin-right rotate-90 translate-x-1/2">
        45.5152°N 122.6784°W
      </span>
    </div>
  );
}
