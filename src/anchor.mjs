import crypto from 'crypto';
import { isSafeASCII } from '/workspaces/Riverbraid-Core/src/index.mjs';

export const anchor = (input) => {
  if (typeof input !== 'string') throw new Error('FATAL: String required.');
  const canonical = input.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').trim();
  if (!isSafeASCII(canonical)) throw new Error('FATAL: Non-ASCII detected.');
  return crypto.createHash('sha256').update(canonical).digest('hex');
};
