import ThemeToggle from "@/components/theme-toggle";

export default function LandingNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/80 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-white">MF</span>
          <div>
            <p className="text-sm font-semibold text-ink">MediFlow</p>
            <p className="text-xs text-subtle">Medicine reminders, simplified</p>
          </div>
        </div>
        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-600 md:flex">
          <ThemeToggle />
          <a href="#features" className="hover:text-ink">Features</a>
          <a href="#auth" className="hover:text-ink">Sign In</a>
          <a href="/dashboard" className="rounded-full bg-ink px-4 py-2 text-white">Dashboard</a>
        </nav>
      </div>
    </header>
  );
}
