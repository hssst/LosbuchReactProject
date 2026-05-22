import "./NameValueBreakdown.css";

import { letterValues } from "../../../data/letters/letterValues";
import { normalizeName } from "../../../utils/normalizeName";

function NameValueBreakdown({ name }) {
  const normalizedName = normalizeName(name);

  return (
    <div className="name-value-breakdown">
      {normalizedName.split("").map((letter, index) => (
        <div
          key={`${letter}-${index}`}
          className="name-value-breakdown__row"
        >
          <span>{letter}</span>
          <span>{letterValues[letter] ?? 0}</span>
        </div>
      ))}
    </div>
  );
}

export default NameValueBreakdown;
