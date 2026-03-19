"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, LineChart, Users, Layers, History, AlertCircle } from "lucide-react";

const FEATURES = [
  {
    title: "Smart Reminders",
    description: "Push notifications calibrated to your routine and timezone.",
    icon: Bell
  },
  {
    title: "Progress Tracking",
    description: "Visual graphs and adherence statistics over time.",
    icon: LineChart
  },
  {
    title: "Multi-Medicine Management",
    description: "Track multiple prescriptions with confidence.",
    icon: Layers
  },
  {
    title: "Family Profiles",
    description: "Support dependents and caregivers in one workspace.",
    icon: Users
  },
  {
    title: "Dose History",
    description: "Complete logs for physician visits and audits.",
    icon: History
  },
  {
    title: "Refill Alerts",
    description: "Never run low with proactive inventory reminders.",
    icon: AlertCircle
  }
];

export default function Features() {
  const [open, setOpen] = useState(false);

  return (
    <section id="features" className="section-shell py-20">
      <div className="glass-card px-8 py-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Features</p>
            <h2 className="mt-4 text-3xl font-semibold text-ink">Everything you need to stay on track</h2>
            <p className="mt-3 text-subtle">
              Switch on the feature view to explore MediFlow's core capabilities.
            </p>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
          >
            {open ? "Hide Features" : "View Features"}
          </button>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="features"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 overflow-hidden"
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {FEATURES.map((feature) => (
                  <motion.div
                    key={feature.title}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl border border-slate-100 bg-white p-5"
                  >
                    <feature.icon className="h-6 w-6 text-sky" />
                    <h3 className="mt-4 text-lg font-semibold text-ink">{feature.title}</h3>
                    <p className="mt-2 text-sm text-subtle">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
