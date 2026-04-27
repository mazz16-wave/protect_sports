"use client";

import { useState } from "react";
import { BadgeCheck, ShieldQuestion } from "lucide-react";

export default function VerifyPanel({ onVerify, verification, verifying }) {
  const [value, setValue] = useState("");

  const verified = verification?.verified;

  return (
    <section className="glass-panel rounded-[28px] p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/75">Verify Authenticity</p>
          <h2 className="font-heading mt-2 text-2xl font-semibold">Blockchain-style trust check</h2>
        </div>
      </div>

      <form
        className="space-y-4"
        onSubmit={async (event) => {
          event.preventDefault();
          await onVerify(value);
        }}
      >
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Paste a fingerprint hash</span>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="e3b0c44298fc1c149afbf4c8996fb924..."
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
          />
        </label>
        <button
          type="submit"
          disabled={verifying}
          className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-5 text-sm font-medium text-slate-950 disabled:opacity-60"
        >
          {verifying ? "Verifying..." : "Verify hash"}
        </button>
      </form>

      <div
        className={`mt-5 rounded-[22px] border p-5 ${
          verification
            ? verified
              ? "border-emerald-400/20 bg-emerald-400/10"
              : "border-amber-400/20 bg-amber-400/10"
            : "border-white/10 bg-white/5"
        }`}
      >
        {verification ? (
          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-2xl border border-white/10 bg-white/5 p-2">
              {verified ? (
                <BadgeCheck className="h-5 w-5 text-emerald-200" />
              ) : (
                <ShieldQuestion className="h-5 w-5 text-amber-200" />
              )}
            </div>
            <div>
              <p className="font-medium text-white">{verified ? "Verified asset" : "No trusted match found"}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{verification.message}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm leading-7 text-slate-300">
            Verification results appear here after a fingerprint check against the local trusted registry.
          </p>
        )}
      </div>
    </section>
  );
}
