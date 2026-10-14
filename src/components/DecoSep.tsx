export function DecoSep({ className = "" }: { className?: string }) {
  return (
    <div className={`deco-sep ${className}`}>
      <span className="sep-diamond" />
      <span className="sep-line" />
      <span className="sep-dot" />
      <span className="sep-dot" />
      <span className="sep-dot" />
      <span className="sep-slash font-hero">{"//"}</span>
      <span className="sep-line-long" />
    </div>
  );
}
