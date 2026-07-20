import "./ResultCard.css";

import ResultFlow from "../ResultFlow/ResultFlow";

function ResultCard({
  losbuchResult,
  onRestart
}) {

  if (!losbuchResult) {
    return (
      <section className="result-card">
        <h2>Kein Ergebnis vorhanden</h2>

        <p>
          Starte zuerst einen Losbuch-Durchlauf.
        </p>

        <div className="result-card__section">
          <button
            type="button"
            onClick={onRestart}
          >
            Zum Losbuch
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="result-card">
      <h2>Deine Reise durch das Losbuch</h2>

      <ResultFlow
        losbuchResult={losbuchResult}
        onRestart={onRestart}
      />

    <button
      className="result-back-button"
      type="button"
      onClick={onRestart}
    >
      Zurück zum Losbuch
    </button>

    </section>
  );
}

export default ResultCard;
