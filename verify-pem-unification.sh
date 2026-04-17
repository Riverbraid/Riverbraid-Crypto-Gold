#!/bin/bash
# Proof of Absence: Manual DER Wrapping
echo "Starting PEM Unification Audit..."
# Check all .pem and .key files for standard headers
FOUND_RAW=$(grep -rL "BEGIN" . --include="*.pem" --include="*.key")

if [ -z "$FOUND_RAW" ]; then
  echo "✅ PROOF: All cryptographic assets are PEM-Unified. No manual DER detected."
  exit 0
else
  echo "❌ FAILURE: Raw DER or non-standard wrapping found in: $FOUND_RAW"
  exit 1
fi
