"use client";

import NextLink from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { siteConfig } from "@/config/site";

import styles from "./db-status-brand.module.css";

const statusLabels = {
  checking: "Checking database…",
  connected: "Database connected",
  disconnected: "Database disconnected",
  unavailable: "Status unavailable",
};

type DbStatus = keyof typeof statusLabels;
type Timer = ReturnType<typeof setTimeout> | null;

export function DbStatusBrand({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<DbStatus>("checking");
  const tooltipId = useId();
  const container = useRef<HTMLSpanElement>(null);
  const openTimer = useRef<Timer>(null);
  const closeTimer = useRef<Timer>(null);
  const holdTimer = useRef<Timer>(null);
  const pinned = useRef(false);
  const revealed = useRef(false);
  const touchOrigin = useRef<{ x: number; y: number } | null>(null);
  const suppressClickUntil = useRef(0);

  const clearTimers = useCallback(() => {
    for (const timer of [openTimer, closeTimer, holdTimer]) {
      if (timer.current) clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const reveal = useCallback(() => {
    clearTimers();
    revealed.current = true;
    setOpen(true);
  }, [clearTimers]);

  const close = useCallback(() => {
    clearTimers();
    pinned.current = false;
    revealed.current = false;
    suppressClickUntil.current = 0;
    touchOrigin.current = null;
    setOpen(false);
    setStatus("checking");
  }, [clearTimers]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  // Check only while the secret is visible, and stop requests when it closes.
  useEffect(() => {
    if (!open) return;
    let active = true;
    let controller: AbortController | undefined;

    const checkHealth = async () => {
      controller = new AbortController();
      const request = controller;
      const timeout = setTimeout(() => request.abort(), 10000);
      setStatus("checking");

      try {
        const response = await fetch("/api/health/db", { cache: "no-store", signal: request.signal });
        const payload: { ok?: boolean } = await response.json();
        if (active) setStatus(response.ok && payload.ok === true ? "connected" : payload.ok === false ? "disconnected" : "unavailable");
      } catch {
        if (active) setStatus("unavailable");
      } finally {
        clearTimeout(timeout);
      }
    };

    void checkHealth();
    const interval = setInterval(checkHealth, 30000);
    return () => {
      active = false;
      clearInterval(interval);
      controller?.abort();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!container.current?.contains(event.target as Node)) close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, close]);

  return (
    <span
      ref={container}
      className={styles.container}
      onBlur={(event) => {
        if (!pinned.current && !event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onFocus={(event) => {
        if (event.target.matches(":focus-visible")) reveal();
      }}
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        clearTimers();
        if (!revealed.current) openTimer.current = setTimeout(reveal, 650);
      }}
      onPointerLeave={(event) => {
        clearTimers();
        if (event.pointerType !== "mouse" || pinned.current || container.current?.querySelector(":focus-visible")) return;
        closeTimer.current = setTimeout(close, 180);
      }}
    >
      <NextLink
        aria-describedby={open ? tooltipId : undefined}
        aria-label={siteConfig.name + " — Home"}
        className={className}
        href="/"
        onClick={(event) => {
          if (Date.now() < suppressClickUntil.current) event.preventDefault();
          else close();
        }}
        onContextMenu={(event) => {
          if (!touchOrigin.current && Date.now() >= suppressClickUntil.current) return;
          event.preventDefault();
          pinned.current = true;
          suppressClickUntil.current = Date.now() + 1500;
          reveal();
        }}
        onPointerDown={(event) => {
          if (event.pointerType === "mouse") return;
          touchOrigin.current = { x: event.clientX, y: event.clientY };
          holdTimer.current = setTimeout(() => {
            pinned.current = true;
            suppressClickUntil.current = Infinity;
            reveal();
          }, 600);
        }}
        onPointerMove={(event) => {
          const origin = touchOrigin.current;
          if (origin && Math.hypot(event.clientX - origin.x, event.clientY - origin.y) > 10) {
            clearTimers();
            touchOrigin.current = null;
          }
        }}
        onPointerUp={() => {
          touchOrigin.current = null;
          if (holdTimer.current) clearTimeout(holdTimer.current);
          if (pinned.current) suppressClickUntil.current = Date.now() + 800;
        }}
        onPointerCancel={() => {
          touchOrigin.current = null;
          clearTimers();
          if (pinned.current) suppressClickUntil.current = Date.now() + 800;
        }}
      >
        {siteConfig.name}
      </NextLink>
      {open && (
        <span className={styles.tooltip} id={tooltipId} role="tooltip">
          <span className={styles.eyebrow}>BEHIND THE SCENES</span>
          <span aria-live="polite" className={styles.status} data-status={status} role="status">{statusLabels[status]}</span>
          <span className={styles.hint}>MongoDB · refreshes every 30s</span>
        </span>
      )}
    </span>
  );
}
