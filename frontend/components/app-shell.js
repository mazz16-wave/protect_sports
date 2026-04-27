"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  Activity,
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  Layers3,
  Shield,
  Siren,
  UploadCloud
} from "lucide-react";
import AnimatedGridBg from "@/components/animated-grid-bg";
import DropzoneUploader from "@/components/dropzone-uploader";
import TrackerResults from "@/components/tracker-results";
import MisusePanel from "@/components/misuse-panel";
import AnalyticsPanel from "@/components/analytics-panel";
import VerifyPanel from "@/components/verify-panel";
import SkeletonCard from "@/components/skeleton-card";
import StatCard from "@/components/stat-card";
import AssetMetadataPanel from "@/components/asset-metadata-panel";
import { addAsset, setVerification, setVerifyLoading } from "@/features/assets/assetsSlice";
import { pushToast } from "@/features/ui/uiSlice";
import { trackAsset, uploadAsset, verifyHash } from "@/services/api";

const navItems = [
  { label: "Upload", icon: UploadCloud },
  { label: "Tracking", icon: Activity },
  { label: "Misuse", icon: Siren },
  { label: "Analytics", icon: BarChart3 },
  { label: "Verify", icon: BadgeCheck }
];

export default function AppShell() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets.items);
  const verification = useSelector((state) => state.assets.verification);
  const verifyLoading = useSelector((state) => state.assets.verifyLoading);
  const latestAsset = assets[0] || null;

  const [uploading, setUploading] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const detections = latestAsset?.detections || [];

  const stats = useMemo(() => {
    const unauthorized = assets.flatMap((asset) => asset.detections || []).filter((item) => item.status !== "Authorized").length;
    return {
      totalAssets: assets.length,
      alerts: unauthorized,
      latestHash: latestAsset ? `${latestAsset.hash.slice(0, 10)}...${latestAsset.hash.slice(-6)}` : "No asset yet",
      latestType: latestAsset?.type || "Waiting for upload"
    };
  }, [assets, latestAsset]);

  const handleUpload = async (file) => {
    try {
      setUploading(true);
      setTracking(true);
      const uploadResult = await uploadAsset(file);
      const trackingResult = await trackAsset(uploadResult.hash);
      dispatch(
        addAsset({
          ...uploadResult,
          detections: trackingResult.detections
        })
      );
      dispatch(
        pushToast({
          type: "success",
          title: "Asset protected",
          message: "Fingerprint generated and tracking session started."
        })
      );
    } catch (error) {
      dispatch(
        pushToast({
          type: "error",
          title: "Upload failed",
          message: error.message || "Unable to fingerprint the selected media."
        })
      );
    } finally {
      setUploading(false);
      setTracking(false);
    }
  };

  const handleVerify = async (hash) => {
    if (!hash?.trim()) {
      dispatch(
        pushToast({
          type: "info",
          title: "Hash required",
          message: "Paste a fingerprint hash to run the authenticity check."
        })
      );
      return;
    }

    try {
      dispatch(setVerifyLoading(true));
      const response = await verifyHash(hash.trim());
      const localMatch = assets.some((asset) => asset.hash === hash.trim());
      const verified = response.verified || localMatch;
      dispatch(
        setVerification({
          verified,
          message: verified
            ? "This fingerprint matches a trusted locally uploaded asset."
            : "No matching fingerprint exists in the current local protection registry."
        })
      );
    } catch (error) {
      dispatch(
        setVerification({
          verified: false,
          message: "Verification service is unavailable right now."
        })
      );
    } finally {
      dispatch(setVerifyLoading(false));
    }
  };

  const handleReport = (item) => {
    dispatch(
      pushToast({
        type: "info",
        title: "Report queued",
        message: `Mock report created for ${item.platform}. Legal review can be wired in later.`
      })
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedGridBg />
      <div className="relative mx-auto grid min-h-screen max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:grid-cols-[290px_minmax(0,1fr)] lg:px-8 lg:py-6">
        <aside className="glass-panel rounded-[30px] p-5 lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <div className="flex h-full flex-col">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Back to landing
              </Link>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10">
                  <Shield className="h-6 w-6 text-cyan-200" />
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-white">Rights Vault</p>
                  <p className="text-sm text-slate-400">Sports media command layer</p>
                </div>
              </div>
            </div>

            <nav className="mt-8 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-slate-300"
                  >
                    <Icon className="h-4 w-4 text-cyan-200" />
                    {item.label}
                  </div>
                );
              })}
            </nav>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-sm text-slate-400">Latest fingerprint</p>
                <p className="mt-3 break-all font-mono text-sm text-cyan-100">{stats.latestHash}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-sm text-slate-400">Asset type</p>
                <p className="mt-3 text-sm text-white">{stats.latestType}</p>
              </div>
            </div>

            <div className="mt-auto rounded-[26px] border border-fuchsia-300/15 bg-[linear-gradient(135deg,rgba(83,230,255,0.12),rgba(255,79,216,0.12))] p-5">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 p-2">
                <Layers3 className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-heading mt-4 text-xl font-semibold text-white">Authenticity ledger</h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                Everything runs locally with in-memory state and mock APIs, which makes it easy to demo and extend.
              </p>
            </div>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {!mounted ? (
              Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
            ) : (
              <>
                <StatCard
                  label="Assets Uploaded"
                  value={stats.totalAssets}
                  detail="Protected files currently in session memory"
                  tone="cyan"
                />
                <StatCard
                  label="Unauthorized Detections"
                  value={stats.alerts}
                  detail="Potential rights violations surfaced by the simulator"
                  tone="rose"
                />
                <StatCard
                  label="Tracking Coverage"
                  value={latestAsset ? `${detections.length} nodes` : "Idle"}
                  detail="Web channels scanned in the latest simulated sweep"
                  tone="violet"
                />
                <StatCard
                  label="Verification Status"
                  value={verification ? (verification.verified ? "Trusted" : "Unknown") : "Ready"}
                  detail="Authenticity pipeline status"
                  tone="emerald"
                />
              </>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="grid gap-6 2xl:grid-cols-[1.05fr_0.95fr]"
          >
            <DropzoneUploader onUpload={handleUpload} uploading={uploading} />
            <VerifyPanel onVerify={handleVerify} verification={verification} verifying={verifyLoading} />
          </motion.div>

          <AssetMetadataPanel asset={latestAsset} />

          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <TrackerResults detections={detections} loading={tracking} />
            <MisusePanel detections={detections} onReport={handleReport} />
          </div>

          <AnalyticsPanel assets={assets} detections={assets.flatMap((asset) => asset.detections || [])} />
        </section>
      </div>
    </main>
  );
}
