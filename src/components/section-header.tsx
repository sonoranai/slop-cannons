export function SectionHeader({ children }: { children: string }) {
  return (
    <h2 className="text-[0.7em] md:text-[0.8em] font-semibold tracking-[0.2em] uppercase text-ink-muted mb-[3em] text-center">
      {children}
    </h2>
  );
}
