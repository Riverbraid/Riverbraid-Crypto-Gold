import { createHash } from "crypto";

export const PETAL = "Crypto-Gold";
export const INVARIANT = "CRYPTOGRAPHIC_INTEGRITY";

export function verify(input) {
  if (!input || typeof input.text !== "string") {
    return {
      pass: false,
      signal: "crypto:INVALID_INPUT",
      reason: "input.text must be a string"
    };
  }

  const digest = createHash("sha256")
    .update(input.text, "utf8")
    .digest("hex");

  const pass = /^[0-9a-f]{64}$/.test(digest);

  return {
    pass,
    signal: pass ? `crypto:${digest.slice(0, 16)}` : "crypto:MALFORMED_DIGEST",
    reason: pass
      ? "SHA 256 digest is lowercase 64 character hexadecimal"
      : "Digest failed lowercase hexadecimal length check",
    digest
  };
}
