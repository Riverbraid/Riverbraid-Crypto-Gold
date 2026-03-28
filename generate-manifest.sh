#!/bin/bash
echo "--- GENERATING STATIONARY MANIFEST ---"
MANIFEST="/workspaces/Riverbraid-Golds/STATIONARY_MANIFEST.json"
echo "{" > $MANIFEST
echo "  \"version\": \"1.1.0\"," >> $MANIFEST
echo "  \"anchor\": \"Go 44\"," >> $MANIFEST
echo "  \"hashes\": {" >> $MANIFEST
echo "    \"judicial_rules\": \"$(sha256sum /workspaces/Riverbraid-Judicial-Gold/policy.rules | awk '{print $1}')\"," >> $MANIFEST
echo "    \"entropy_scanner\": \"$(sha256sum /workspaces/Riverbraid-Harness-Gold/scripts/entropy-check.mjs | awk '{print $1}')\"," >> $MANIFEST
echo "    \"truth_document\": \"$(sha256sum /workspaces/Riverbraid-Golds/TRUTH.md | awk '{print $1}')\"" >> $MANIFEST
echo "  }," >> $MANIFEST
echo "  \"status\": \"VERIFIED_STATIONARY\"" >> $MANIFEST
echo "}" >> $MANIFEST
echo "MANIFEST_CREATED: $MANIFEST"
