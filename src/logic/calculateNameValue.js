import { letterValues } from "../data/letterValues";
import { normalizeName } from "../utils/normalizeName";

export function calculateNameValue(name) {
  const normalizedName = normalizeName(name);

  let total = 0;

  for (const character of normalizedName) {
    const value = letterValues[character];

    if (value) {
      total += value;
    }
  }

  return total;
}
