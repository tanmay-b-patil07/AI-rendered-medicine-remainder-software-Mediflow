"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#e7f2f5] to-[#d7eef7]">
      <div className="section-shell grid items-center gap-12 py-20 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
          >
            MediFlow Health Suite
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-semibold text-ink md:text-6xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Never Miss Your Medicine Again
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-subtle"
          >
            MediFlow delivers intelligent reminders, adherence insights, and family-friendly tracking so your care plan
            stays on schedule.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#auth"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Get Started
            </a>
            <a href="#features" className="text-sm font-semibold text-ink">
              View Features
            </a>
          </motion.div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["AI timing", "Caregiver ready", "HIPAA-minded"].map((item) => (
              <div key={item} className="glass-card px-4 py-3 text-sm font-semibold text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-sky/30 blur-3xl" />
          <div className="absolute -right-8 bottom-0 h-36 w-36 rounded-full bg-emerald-200/60 blur-3xl" />
          <div className="glass-card relative overflow-hidden p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Today</p>
                <p className="mt-2 text-2xl font-semibold text-ink">2 Doses Due</p>
                <p className="text-sm text-subtle">Next in 1h 20m</p>
              </div>
              <div className="h-16 w-16 rounded-2xl bg-sky/20" />
            </div>
            <div className="mt-8 space-y-4">
              {[
                { name: "Atorvastatin", time: "8:00 AM" },
                { name: "Vitamin D3", time: "1:00 PM" },
                { name: "Metformin", time: "7:00 PM" }
              ].map((med) => (
                <div key={med.name} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{med.name}</p>
                    <p className="text-xs text-subtle">Scheduled</p>
                  </div>
                  <span className="text-xs font-semibold text-ink">{med.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
