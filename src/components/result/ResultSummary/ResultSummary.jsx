import "./ResultSummary.css";

import { planetLabels } from "../../../data/planetLabels";

function ResultSummary({ losbuchResult }) {
  const planetLabel =
    planetLabels[losbuchResult.planet] ??
    losbuchResult.planet;

  return (
    <div className="result-summary">
      <p>
        <strong>Namenswert:</strong>{" "}
        {losbuchResult.nameValue}
      </p>

      <p>
        <strong>Planet:</strong>{" "}
        {planetLabel}
      </p>

      <p>
        <strong>Planetenwert:</strong>{" "}
        {losbuchResult.planetValue}
      </p>

      <p>
        <strong>Ergebniszahl:</strong>{" "}
        {losbuchResult.resultNumber}
      </p>
    </div>
  );
}

export default ResultSummary;
