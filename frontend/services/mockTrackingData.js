const platforms = [
  {
    platform: "YouTube",
    domains: ["https://youtube.com/watch?v=match-recap", "https://youtube.com/shorts/training-cam"]
  },
  {
    platform: "Instagram",
    domains: ["https://instagram.com/reel/fan-cut", "https://instagram.com/p/highlight-drop"]
  },
  {
    platform: "X / Twitter",
    domains: ["https://x.com/fansphere/status/20495", "https://x.com/mediaflash/status/88315"]
  },
  {
    platform: "ClipMirror",
    domains: ["https://clipmirror.example/highlights/alpha", "https://clipmirror.example/press/frame"]
  },
  {
    platform: "Forum Stream",
    domains: ["https://forumstream.example/thread/984", "https://forumstream.example/thread/1102"]
  }
];

function seededNumber(seed, index) {
  const charCode = seed.charCodeAt(index % seed.length);
  return (charCode * (index + 17) * 9301 + 49297) % 233280;
}

export function buildTrackingResults(hash, isKnownAsset) {
  const count = 3 + (seededNumber(hash, 2) % 3);

  return Array.from({ length: count }).map((_, index) => {
    const platform = platforms[(seededNumber(hash, index) + index) % platforms.length];
    const status = seededNumber(hash, index + 5) % 100 > (isKnownAsset ? 42 : 65) ? "Unauthorized" : "Authorized";
    const confidence = 72 + (seededNumber(hash, index + 8) % 28);
    const minutesAgo = 4 + (seededNumber(hash, index + 11) % 180);

    return {
      id: `${hash.slice(0, 8)}-${index}`,
      platform: platform.platform,
      url: platform.domains[index % platform.domains.length],
      confidence,
      timestamp: `${minutesAgo} minutes ago`,
      status,
      signal: status === "Authorized" ? "Rights owner match" : "Mirrored without attribution",
      reason:
        status === "Authorized"
          ? "Whitelisted distribution partner detected."
          : "High confidence match surfaced outside the trusted distribution list."
    };
  });
}
