"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/?auth=required");
    }
  }, [router]);

  if (!isAuthenticated()) {
    return (
      <div className="min-h-screen bg-mist dark:bg-slate-950">
        <div className="section-shell flex min-h-screen items-center justify-center">
          <div className="glass-card px-6 py-4 text-sm text-subtle">Checking authentication...</div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
