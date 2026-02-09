import { TRUTH_ANCHOR } from './anchor.js';
if (TRUTH_ANCHOR.state === "STATIONARY") {
    console.log("✅ Crypto-Gold Invariant Verified: Anchor is fixed.");
} else {
    process.exit(1);
}
