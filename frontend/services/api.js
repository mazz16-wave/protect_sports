import { buildTrackingResults } from "@/services/mockTrackingData";

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createHash(file) {
  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(digest));
  return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function uploadAsset(file) {
  await wait(900);

  if (!file) {
    throw new Error("File upload is required.");
  }

  return {
    fileName: file.name,
    hash: await createHash(file),
    size: file.size,
    type: file.type || "application/octet-stream",
    uploadedAt: new Date().toISOString()
  };
}

export async function trackAsset(hash) {
  await wait(700);
  return {
    hash,
    detections: buildTrackingResults(hash, true)
  };
}

export async function verifyHash(hash) {
  await wait(400);
  return {
    verified: false,
    hash
  };
}
