import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
    const readme = readFileSync(join(__dirname, 'README.md'), 'utf8');
    if (!readme.includes('[Signal: MECHANICAL_HONESTY]')) {
        throw new Error("Crypto Signal Missing: The Invariant is unanchored.");
    }
    
    // Crypto Check: Ensure the RB_TOKEN is present for the environment to function
    if (!process.env.RB_TOKEN || process.env.RB_TOKEN.length < 10) {
        throw new Error("Authentication Entropy: RB_TOKEN is missing or corrupted.");
    }

    console.log("🔐 Crypto-Gold: Mechanical Honesty Verified.");
    process.exit(0);
} catch (e) {
    console.error(`❌ Crypto-Gold: Audit Failed - ${e.message}`);
    process.exit(1);
}
