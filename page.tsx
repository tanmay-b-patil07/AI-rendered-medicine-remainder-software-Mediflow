"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/hero";
import Features from "@/components/features";
import AuthSection from "@/components/auth-section";
import LandingNav from "@/components/landing-nav";
import Footer from "@/components/footer";
import { isAuthenticated } from "@/lib/auth";

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/dashboard");
    }
  }, [router]);
  return (
    <div className="min-h-screen bg-mist dark:bg-slate-950">
      <LandingNav />
      <main>
        <Hero />
        <Features />
        <AuthSection />
      </main>
      <Footer />
    </div>
  );
}
