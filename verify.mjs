import { readFileSync, writeFileSync } from "fs";
import { verify } from "./index.js";

const protocol = JSON.parse(readFileSync("protocol.steps", "utf8"));
const input = protocol.canonical_input;
const expectedDigest = protocol.expected_digest;

const result = verify(input);

const output = {
  schema: "riverbraid.gold.verify.output",
  version: "1.0.0",
  repo: "Riverbraid-Crypto-Gold",
  ring: 1,
  petal: "Crypto-Gold",
  invariant: "CRYPTOGRAPHIC_INTEGRITY",
  status: result.pass && result.digest === expectedDigest ? "VERIFIED" : "FAILED",
  digest: result.digest,
  expected_digest: expectedDigest,
  canonical_signal: result.signal,
  canonical_reason: result.reason
};

writeFileSync("verify-output.json", JSON.stringify(output, null, 2) + "\n", "utf8");

if (output.status !== "VERIFIED") {
  console.error("CRYPTO_GOLD_VERIFICATION_FAILED");
  process.exit(1);
}
console.log("CRYPTO_GOLD_VERIFICATION_SUCCESS");
