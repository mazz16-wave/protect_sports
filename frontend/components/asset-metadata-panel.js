export default function AssetMetadataPanel({ asset }) {
  if (!asset) {
    return (
      <section className="glass-panel rounded-[28px] p-6">
        <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/75">Asset Metadata</p>
        <div className="mt-5 rounded-[22px] border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          Upload an image or video to inspect file size, MIME type, timestamp, and SHA-256 fingerprint.
        </div>
      </section>
    );
  }

  return (
    <section className="glass-panel rounded-[28px] p-6">
      <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/75">Asset Metadata</p>
      <h2 className="font-heading mt-2 text-2xl font-semibold">Trusted asset record</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">File name</p>
          <p className="mt-3 break-words text-sm text-white">{asset.fileName}</p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">File size</p>
          <p className="mt-3 text-sm text-white">{(asset.size / (1024 * 1024)).toFixed(2)} MB</p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">MIME type</p>
          <p className="mt-3 text-sm text-white">{asset.type}</p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Uploaded at</p>
          <p className="mt-3 text-sm text-white">{new Date(asset.uploadedAt).toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-4 rounded-[22px] border border-cyan-300/15 bg-cyan-300/8 p-4">
        <p className="text-sm text-slate-400">SHA-256 fingerprint</p>
        <p className="mt-3 break-all font-mono text-sm text-cyan-100">{asset.hash}</p>
      </div>
    </section>
  );
}
