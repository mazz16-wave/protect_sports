"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Radar, Shield, Sparkles, Zap } from "lucide-react";
import AnimatedGridBg from "@/components/animated-grid-bg";

const features = [
  {
    icon: Shield,
    title: "Fingerprint every asset",
    copy: "Generate tamper-resistant hashes for match photos, clips, and press imagery in seconds."
  },
  {
    icon: Radar,
    title: "Track propagation",
    copy: "Simulate near real-time detections across social, streaming, and fringe web surfaces."
  },
  {
    icon: BadgeCheck,
    title: "Verify authenticity",
    copy: "Check any incoming file or hash against your internal trusted library instantly."
  }
];

const stats = [
  { label: "Avg. detection window", value: "< 90s" },
  { label: "Verification confidence", value: "99.2%" },
  { label: "Mock channels monitored", value: "28" }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <AnimatedGridBg />
      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10">
              <Shield className="h-5 w-5 text-cyan-200" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold tracking-[0.18em] text-cyan-200/90 uppercase">
                Solution Challenge
              </p>
              <p className="text-sm text-slate-300">Digital Asset Protection Platform</p>
            </div>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Open Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-100"
            >
              <Sparkles className="h-4 w-4" />
              Trusted media intelligence for clubs, leagues, and broadcasters
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-heading text-glow max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
            >
              Protect Your Digital Sports Assets
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Fingerprint official match content, monitor simulated propagation across the web, and
              surface misuse before it distorts the value of your media rights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-6 py-3 font-medium text-slate-950 shadow-[0_10px_40px_rgba(83,230,255,0.25)] transition hover:scale-[1.01]"
              >
                Launch Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Explore Features
                <Zap className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-2xl p-5">
                  <p className="font-heading text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="glass-panel grid-surface relative overflow-hidden rounded-[28px] p-6"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">Live Threat Feed</p>
                <h2 className="font-heading mt-2 text-2xl font-semibold">Rights Command Center</h2>
              </div>
              <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                Monitoring active
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[
                { site: "Instagram Reel Mirror", state: "Unauthorized", confidence: "96%" },
                { site: "Broadcast Partner CDN", state: "Authorized", confidence: "100%" },
                { site: "Fan Clip Aggregator", state: "Suspicious", confidence: "83%" }
              ].map((item, index) => (
                <motion.div
                  key={item.site}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.12 }}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-white">{item.site}</p>
                      <p className="mt-1 text-sm text-slate-400">Matchday highlight package detected</p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-200">
                      {item.confidence}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-slate-400">07 Apr, 22:14 UTC</span>
                    <span
                      className={`rounded-full px-3 py-1 ${
                        item.state === "Authorized"
                          ? "bg-emerald-400/10 text-emerald-200"
                          : item.state === "Unauthorized"
                            ? "bg-rose-400/10 text-rose-200"
                            : "bg-amber-400/10 text-amber-200"
                      }`}
                    >
                      {item.state}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-panel rounded-[24px] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10">
                  <Icon className="h-5 w-5 text-cyan-200" />
                </div>
                <h3 className="font-heading mt-6 text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{feature.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
