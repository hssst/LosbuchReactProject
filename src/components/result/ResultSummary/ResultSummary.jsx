import "./ResultSummary.css";

import { planetLabels } from "../../../data/planetLabels";

function ResultSummary({ losbuchResult }) {
  const planetLabel =
    planetLabels[losbuchResult.planet] ??
    losbuchResult.planet;

  return (
    <div className="result-summary">
      <p>
        <strong>Deine Frage:</strong>{" "}
        {losbuchResult.question?.modernText}
      </p>

      <p>
        <strong>Historische Frage:</strong>{" "}
        {losbuchResult.question?.originalText}
      </p>

      <p>
        <strong>Dein Name:</strong>{" "}
        {losbuchResult.name}
      </p>

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

      <p>
        <strong>König:</strong>{" "}
        {losbuchResult.result?.king}
      </p>

      <hr />

      <p>
        <strong>Historischer Losspruch:</strong>{" "}
        {losbuchResult.result?.historical}
      </p>

      <p>
        <strong>Moderne Deutung:</strong>{" "}
        {losbuchResult.result?.modern}
      </p>
    </div>
  );
}

export default ResultSummary;
