import crypto from 'node:crypto';
const hash = crypto.createHash('sha256').update('Source').digest('hex');
console.log(JSON.stringify({ status: "STATIONARY", cell: "crypto-gold", anchor: hash }));
