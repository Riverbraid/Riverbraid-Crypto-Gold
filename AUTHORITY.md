# AUTHORITY

Repository: Riverbraid-Crypto-Gold
Ring: 1
Class: Gold petal
Invariant: CRYPTOGRAPHIC_INTEGRITY

## Authority Boundary
This repository verifies only its own cryptographic integrity invariant.
It does not verify the full Riverbraid constellation.
It does not verify any other repository.
It does not expand the Riverbraid-Core claim boundary.

## Allowed Claim
Given the canonical input declared in protocol.steps, this repository deterministically computes a SHA 256 digest over input.text encoded as UTF 8 and verifies that the digest matches the expected lowercase 64 character hexadecimal value.
