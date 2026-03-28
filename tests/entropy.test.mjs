import { anchor } from '../src/anchor.mjs';

const stringA = "Riverbraid_Stationary\r\n";
const stringB = "Riverbraid_Stationary \n";

try {
  const hashA = anchor(stringA);
  const hashB = anchor(stringB);

  if (hashA === hashB) {
    console.log("✅ ZERO-ENTROPY_VERIFIED");
    console.log(`Common Hash: ${hashA}`);
    process.exit(0);
  } else {
    console.error("❌ ENTROPY_LEAK: Non-deterministic hashes.");
    process.exit(1);
  }
} catch (e) {
  console.error(`FATAL: ${e.message}`);
  process.exit(1);
}
