"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FileUp, LoaderCircle, Sparkles, Video } from "lucide-react";

export default function DropzoneUploader({ onUpload, uploading }) {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const helperText = useMemo(() => {
    if (!selectedFile) {
      return "Drop an image or video here, or browse from your device.";
    }

    return `${selectedFile.name} · ${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`;
  }, [selectedFile]);

  const handleSelection = async (file) => {
    if (!file) {
      return;
    }

    setSelectedFile(file);
    await onUpload(file);
  };

  return (
    <section className="glass-panel rounded-[28px] p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/75">Upload Media</p>
          <h2 className="font-heading mt-2 text-2xl font-semibold">Fingerprint an official asset</h2>
        </div>
        <div className="hidden rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-100 sm:inline-flex">
          <Sparkles className="mr-2 h-4 w-4" />
          Drag and drop enabled
        </div>
      </div>

      <motion.label
        whileHover={{ scale: 1.01 }}
        onDragEnter={() => setDragActive(true)}
        onDragOver={(event) => {
          event.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={async (event) => {
          event.preventDefault();
          setDragActive(false);
          const file = event.dataTransfer.files?.[0];
          await handleSelection(file);
        }}
        className={`flex min-h-72 cursor-pointer flex-col items-center justify-center rounded-[24px] border border-dashed px-6 text-center transition ${
          dragActive
            ? "border-cyan-300/80 bg-cyan-300/10"
            : "border-white/12 bg-slate-950/30 hover:bg-slate-950/45"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={async (event) => {
            const file = event.target.files?.[0];
            await handleSelection(file);
          }}
        />

        <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-cyan-300/25 bg-cyan-300/10">
          {uploading ? (
            <LoaderCircle className="h-8 w-8 animate-spin text-cyan-200" />
          ) : (
            <FileUp className="h-8 w-8 text-cyan-200" />
          )}
        </div>
        <h3 className="font-heading mt-6 text-2xl font-semibold text-white">
          {uploading ? "Generating media fingerprint..." : "Drop asset to start protection"}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{helperText}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400">
          <span className="rounded-full border border-white/10 px-3 py-1">SHA-256 fingerprinting</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Image + video support</span>
          <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1">
            <Video className="mr-2 h-4 w-4" />
            Rights-ready metadata
          </span>
        </div>
      </motion.label>
    </section>
  );
}
