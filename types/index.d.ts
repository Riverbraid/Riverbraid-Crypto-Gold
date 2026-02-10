export interface TruthAnchor {
    version: string;
    algorithm: "sha256";
    state: "STATIONARY";
}
export function generateAnchor(data: any): string;
export const TRUTH_ANCHOR: TruthAnchor;
