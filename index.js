/**
 * Riverbraid-Crypto-Gold: index.js
 * SHA-256 State Anchoring (v1.3.0)
 */

import { createHash } from 'crypto';

export const RB_PETAL_ID = 'Riverbraid-Crypto-Gold';

export function anchor(input) {
  if (typeof input !== 'string') {
    throw new TypeError('ANCHOR_ERROR: input must be a string');
  }
  return createHash('sha256').update(input, 'utf8').digest('hex');
}

export function verifyAnchor(input, expectedHash) {
  if (typeof expectedHash !== 'string' || expectedHash.length !== 64) {
    throw new TypeError('VERIFY_ERROR: expectedHash must be a 64-character hex string');
  }
  return anchor(input) === expectedHash;
}

export function getStatus() {
  return { status: 'STATIONARY', petal: RB_PETAL_ID };
}
