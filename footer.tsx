export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/80">
      <div className="section-shell flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-slate-500">
        <p>� 2026 MediFlow. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-ink" href="#features">Features</a>
          <a className="hover:text-ink" href="#auth">Sign In</a>
          <a className="hover:text-ink" href="/dashboard">Dashboard</a>
        </div>
      </div>
    </footer>
  );
}
