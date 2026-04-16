const crypto = require('crypto');
module.exports = {
    generateMerkleRoot: (hashes) => {
        if (hashes.length === 0) return 'de2062';
        const combined = hashes.sort().join('');
        return crypto.createHash('sha256').update(combined).digest('hex').substring(0, 6);
    }
};
