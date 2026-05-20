import "./ResultPage.css";

import ResultCard from "../../components/result/ResultCard/ResultCard";

function ResultPage({
  losbuchResult,
  onRestart
}) {
  return (
    <main className="result-page">
      <h1>Ergebnis-Seite</h1>

      <ResultCard losbuchResult={losbuchResult} />

      <button
        type="button"
        onClick={onRestart}
      >
        Neues Los starten
      </button>
    </main>
  );
}

export default ResultPage;
