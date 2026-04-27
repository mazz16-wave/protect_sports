"use client";

import { ExternalLink, Globe, ShieldCheck, ShieldX } from "lucide-react";

function statusClass(status) {
  if (status === "Authorized") {
    return "bg-emerald-400/10 text-emerald-200";
  }

  return "bg-rose-400/10 text-rose-200";
}

export default function TrackerResults({ detections, loading }) {
  return (
    <section className="glass-panel rounded-[28px] p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/75">Asset Tracker</p>
          <h2 className="font-heading mt-2 text-2xl font-semibold">Propagation across channels</h2>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
          Simulated monitoring
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="animate-pulse rounded-[22px] border border-white/10 bg-white/5 p-5">
              <div className="h-4 w-24 rounded-full bg-white/10" />
              <div className="mt-4 h-5 w-2/3 rounded-full bg-white/10" />
              <div className="mt-5 h-16 rounded-2xl bg-white/5" />
            </div>
          ))}
        </div>
      ) : detections.length === 0 ? (
        <div className="rounded-[22px] border border-white/10 bg-white/5 p-8 text-center text-slate-300">
          Upload an asset to simulate web tracking results.
        </div>
      ) : (
        <div className="space-y-4">
          {detections.map((detection) => (
            <div key={detection.id} className="rounded-[22px] border border-white/10 bg-slate-950/35 p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm text-slate-200">
                      <Globe className="h-4 w-4 text-cyan-200" />
                      {detection.platform}
                    </span>
                    <span className={`rounded-full px-3 py-1 text-sm ${statusClass(detection.status)}`}>
                      {detection.status}
                    </span>
                  </div>
                  <p className="mt-4 truncate text-lg font-medium text-white">{detection.url}</p>
                  <p className="mt-2 text-sm text-slate-400">Detected {detection.timestamp}</p>
                </div>
                <div className="grid min-w-[220px] gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Match confidence</p>
                    <p className="font-heading mt-2 text-2xl font-semibold text-white">{detection.confidence}%</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Integrity signal</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-200">
                      {detection.status === "Authorized" ? (
                        <ShieldCheck className="h-4 w-4 text-emerald-200" />
                      ) : (
                        <ShieldX className="h-4 w-4 text-rose-200" />
                      )}
                      {detection.signal}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-end">
                <a
                  href={detection.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  Open Source
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
