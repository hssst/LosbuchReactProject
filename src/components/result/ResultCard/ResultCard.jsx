import "./ResultCard.css";

import ResultSummary from "../ResultSummary/ResultSummary";
import ResultInterpretation from "../ResultInterpretation/ResultInterpretation";

function ResultCard({ losbuchResult }) {
  if (!losbuchResult) {
    return (
      <section className="result-card">
        <h2>Kein Ergebnis vorhanden</h2>

        <p>
          Starte zuerst einen Losbuch-Durchlauf.
        </p>
      </section>
    );
  }

  return (
    <section className="result-card">
      <h2>Dein Losspruch</h2>

      <ResultSummary
        losbuchResult={losbuchResult}
      />

      <ResultInterpretation
        result={losbuchResult.result}
      />
    </section>
  );
}

export default ResultCard;
