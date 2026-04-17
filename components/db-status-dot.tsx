"use client";

import { useEffect, useState } from "react";

type DbStatus = "checking" | "connected" | "disconnected";

type HealthResponse = {
  ok?: boolean;
};

export function DbStatusDot() {
  const [status, setStatus] = useState<DbStatus>("checking");

  useEffect(() => {
    let isMounted = true;

    const checkHealth = async () => {
      try {
        const response = await fetch("/api/health/db", {
          method: "GET",
          cache: "no-store",
        });

        const payload = (await response.json()) as HealthResponse;

        if (!isMounted) {
          return;
        }

        setStatus(response.ok && payload.ok ? "connected" : "disconnected");
      } catch {
        if (isMounted) {
          setStatus("disconnected");
        }
      }
    };

    checkHealth();

    const interval = setInterval(checkHealth, 30000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const colorClass =
    status === "connected"
      ? "bg-emerald-500"
      : status === "disconnected"
        ? "bg-yellow-400"
        : "bg-blue-400";

  const title =
    status === "connected"
      ? "MongoDB connected"
      : status === "disconnected"
        ? "MongoDB disconnected"
        : "Checking database connection";

  return (
    <div
      className={`absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-black transition-colors ${colorClass}`}
      title={title}
      aria-label={title}
      role="status"
    />
  );
}
