export function SectionHeader({ children }: { children: string }) {
  return (
    <h2
      className="text-[0.7em] md:text-[0.8em] font-semibold tracking-[0.2em] uppercase mb-[3em] text-center"
      style={{ color: "#2A4A7F" }}
    >
      {children}
    </h2>
  );
}
