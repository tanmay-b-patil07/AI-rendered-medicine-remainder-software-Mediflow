"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { getStoredUser, verifyPassword, createSession, setFlash, isAuthenticated, popFlash } from "@/lib/auth";

export default function AuthSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: true });
  const [error, setError] = useState("");
  const [flash, setFlashState] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/dashboard");
    }
  }, [router]);

  useEffect(() => {
    const message = popFlash();
    if (message) setFlashState(message);
  }, []);

  return (
    <section id="auth" className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="glass-card p-8">
          <h2 className="text-3xl font-semibold text-ink">Secure, calm, and ready when you are.</h2>
          <p className="mt-4 text-subtle">
            Sign in to sync reminders across devices or create a new account in seconds.
          </p>
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky/20 via-white to-emerald-100 p-6">
            <p className="text-sm font-semibold text-ink">Why families trust MediFlow</p>
            <ul className="mt-4 space-y-3 text-sm text-subtle">
              <li>Private profiles with caregiver controls.</li>
              <li>Built-in compliance reports for clinicians.</li>
              <li>Always-on backup reminders via SMS.</li>
            </ul>
          </div>
        </div>

        <div className="glass-card p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Sign In</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">Welcome back</h3>
            </div>
            <Link className="text-sm font-semibold text-ink" href="/signup">
              Don&apos;t have an account? Sign Up
            </Link>
          </div>

          {flash && (
            <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              {flash}
            </div>
          )}
          {searchParams.get("auth") === "required" && (
            <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Please sign up or sign in to access your dashboard.
            </div>
          )}
          {error && (
            <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </div>
          )}
          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              const user = getStoredUser();
              if (!user) {
                setError("No account found. Please sign up first.");
                return;
              }
              if (user.email !== form.email.trim().toLowerCase()) {
                setError("Email not found.");
                return;
              }
              if (!verifyPassword(form.password, user.passwordHash)) {
                setError("Incorrect password.");
                return;
              }
              createSession(user, form.remember);
              setFlash(`Welcome back, ${user.fullName}!`);
              router.push("/dashboard");
            }}
          >
            <div>
              <label className="text-sm font-medium text-ink">Email address</label>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                placeholder="you@mediflow.com"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Password</label>
              <div className="mt-2 flex items-center rounded-xl border border-slate-200 px-3 py-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
                  placeholder="********"
                  className="w-full border-none bg-transparent text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label="Toggle password visibility"
                  className="text-slate-400"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(event) => setForm((prev) => ({ ...prev, remember: event.target.checked }))}
                  className="h-4 w-4 rounded border-slate-300"
                />{" "}
                Remember me
              </label>
              <button type="button" className="text-ink">
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
