"use client";

import { useMemo, useState } from "react";
import { Chrome, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { loadDB, updateUserProfile } from "@/lib/mediflow-db";
import { hashPassword, saveUser, createSession, setFlash } from "@/lib/auth";

type FormState = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  notificationEmail: string;
  extraEmails: string[];
  enableEmailReminders: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  notificationEmail: "",
  extraEmails: [],
  enableEmailReminders: true
};

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [extraEmailInput, setExtraEmailInput] = useState("");

  const isValidEmail = useMemo(() => {
    if (!form.email) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  }, [form.email]);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    if (form.email && !isValidEmail) nextErrors.email = "Enter a valid email address.";
    if (form.notificationEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.notificationEmail)) {
      nextErrors.notificationEmail = "Enter a valid notification email.";
    }
    if (!form.password) nextErrors.password = "Password is required.";
    if (form.password && form.password.length < 8) nextErrors.password = "Password must be at least 8 characters.";
    if (!form.confirmPassword) nextErrors.confirmPassword = "Confirm your password.";
    if (form.password && form.confirmPassword && form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      notificationEmail: form.notificationEmail.trim().toLowerCase(),
      notificationEmails: [
        form.notificationEmail.trim().toLowerCase(),
        ...form.extraEmails.map((item) => item.toLowerCase())
      ].filter(Boolean),
      emailRemindersEnabled: form.enableEmailReminders,
      createdAt: new Date().toISOString()
    };
    const storedUser = {
      id: `user-${crypto.randomUUID()}`,
      fullName: payload.fullName,
      email: payload.email,
      passwordHash: hashPassword(form.password),
      createdAt: payload.createdAt
    };
    saveUser(storedUser);
    window.localStorage.setItem("mediflow_user", JSON.stringify(payload));
    window.localStorage.setItem("mediflow_authenticated", "true");
    const db = loadDB();
    updateUserProfile(db, {
      fullName: payload.fullName,
      email: payload.email,
      notificationEmails: payload.notificationEmails,
      caregiverEmails: form.extraEmails.map((item) => item.toLowerCase()),
      emailNotificationsEnabled: payload.emailRemindersEnabled
    });
    createSession(storedUser, true);
    setFlash(`Welcome to MediFlow, ${payload.fullName}!`);
    router.push("/dashboard");
  };

  return (
    <div className="glass-card p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Sign Up</p>
          <h1 className="mt-3 text-3xl font-semibold text-ink">Create your MediFlow account</h1>
          <p className="mt-3 text-sm text-subtle">
            Get personalized reminders, adherence insights, and family profiles in minutes.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
        >
          <Chrome className="h-4 w-4 text-ink" />
          Google Sign-Up
        </button>
      </div>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="text-sm font-medium text-ink">Full Name</label>
          <input
            type="text"
            value={form.fullName}
            onChange={(event) => handleChange("fullName", event.target.value)}
            placeholder="Jordan Smith"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
          />
          {errors.fullName && <p className="mt-2 text-xs text-rose-600">{errors.fullName}</p>}
        </div>

        <div>
          <label className="text-sm font-medium text-ink">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="you@mediflow.com"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
          />
          {errors.email && <p className="mt-2 text-xs text-rose-600">{errors.email}</p>}
        </div>

        <div>
          <label className="text-sm font-medium text-ink">Notification Email</label>
          <input
            type="email"
            value={form.notificationEmail}
            onChange={(event) => handleChange("notificationEmail", event.target.value)}
            placeholder="alerts@mediflow.com"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
          />
          {errors.notificationEmail && (
            <p className="mt-2 text-xs text-rose-600">{errors.notificationEmail}</p>
          )}
          <p className="mt-2 text-xs text-subtle">
            This can be different from your login email.
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-ink">Additional Emails (Caregivers)</label>
          <div className="mt-2 flex gap-2">
            <input
              type="email"
              value={extraEmailInput}
              onChange={(event) => setExtraEmailInput(event.target.value)}
              placeholder="caregiver@example.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            />
            <button
              type="button"
              onClick={() => {
                if (!extraEmailInput.trim()) return;
                setForm((prev) => ({
                  ...prev,
                  extraEmails: [...prev.extraEmails, extraEmailInput.trim()]
                }));
                setExtraEmailInput("");
              }}
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
            >
              Add
            </button>
          </div>
          {form.extraEmails.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {form.extraEmails.map((email) => (
                <button
                  key={email}
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      extraEmails: prev.extraEmails.filter((item) => item !== email)
                    }))
                  }
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                >
                  {email} ×
                </button>
              ))}
            </div>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={form.enableEmailReminders}
            onChange={(event) => handleChange("enableEmailReminders", event.target.checked)}
            className="h-4 w-4 rounded border-slate-300"
          />
          Send me email reminders
        </label>

        <div>
          <label className="text-sm font-medium text-ink">Password</label>
          <div className="mt-2 flex items-center rounded-xl border border-slate-200 px-3 py-2">
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(event) => handleChange("password", event.target.value)}
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
          {errors.password && <p className="mt-2 text-xs text-rose-600">{errors.password}</p>}
        </div>

        <div>
          <label className="text-sm font-medium text-ink">Confirm Password</label>
          <div className="mt-2 flex items-center rounded-xl border border-slate-200 px-3 py-2">
            <input
              type={showConfirm ? "text" : "password"}
              value={form.confirmPassword}
              onChange={(event) => handleChange("confirmPassword", event.target.value)}
              placeholder="********"
              className="w-full border-none bg-transparent text-sm outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((prev) => !prev)}
              aria-label="Toggle confirm password visibility"
              className="text-slate-400"
            >
              {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-2 text-xs text-rose-600">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white disabled:opacity-70"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
