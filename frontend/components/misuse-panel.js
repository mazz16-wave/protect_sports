"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Siren, TriangleAlert } from "lucide-react";

export default function MisusePanel({ detections, onReport }) {
  const suspicious = detections.filter((item) => item.status !== "Authorized");

  return (
    <section className="glass-panel rounded-[28px] p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-rose-200/80">Misuse Detection</p>
          <h2 className="font-heading mt-2 text-2xl font-semibold">Escalate unauthorized usage</h2>
        </div>
        <div className="rounded-full border border-rose-300/20 bg-rose-300/10 px-3 py-1 text-sm text-rose-100">
          {suspicious.length} active alerts
        </div>
      </div>

      {suspicious.length === 0 ? (
        <div className="rounded-[22px] border border-emerald-400/15 bg-emerald-400/10 p-6 text-sm text-emerald-100">
          No misuse currently detected. Your monitored asset footprint looks clean.
        </div>
      ) : (
        <div className="space-y-4">
          {suspicious.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[22px] border border-rose-300/15 bg-rose-400/8 p-5"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-rose-300/20 px-3 py-1 text-sm text-rose-100">
                      <TriangleAlert className="h-4 w-4" />
                      {item.platform}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-200">
                      {item.confidence}% confidence
                    </span>
                  </div>
                  <p className="mt-4 text-lg font-medium text-white">{item.url}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.reason}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onReport(item)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-400 to-fuchsia-500 px-5 text-sm font-medium text-white shadow-[0_12px_40px_rgba(255,107,145,0.22)] transition hover:scale-[1.01]"
                >
                  <Siren className="h-4 w-4" />
                  Report
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
        <ShieldAlert className="h-5 w-5 text-cyan-200" />
        Add a takedown workflow or legal escalation layer later without changing the core UI shell.
      </div>
    </section>
  );
}
