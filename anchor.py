import hashlib
import json

INVARIANT_SIGNAL = "MECHANICAL_HONESTY"

def compute_anchor(state: dict) -> str:
    canonical = json.dumps(state, sort_keys=True, separators=(",", ":"))
    return hashlib.sha256(canonical.encode("utf-8")).hexdigest()

def verify_anchor(state: dict, expected_hash: str) -> bool:
    return compute_anchor(state) == expected_hash

def anchor_report(state: dict, expected_hash: str | None = None) -> dict:
    current_hash = compute_anchor(state)
    report = {
        "signal": INVARIANT_SIGNAL,
        "anchor": current_hash,
        "status": "STATIONARY",
    }
    if expected_hash is not None:
        intact = current_hash == expected_hash
        report["expected"] = expected_hash
        report["drift_detected"] = not intact
        report["status"] = "STATIONARY" if intact else "DRIFT_DETECTED"
    return report
