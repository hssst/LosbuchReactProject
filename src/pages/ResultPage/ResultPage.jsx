import "./ResultPage.css";

import ResultCard from "../../components/result/ResultCard/ResultCard";

function ResultPage({
  losbuchResult,
  onRestart
}) {
  return (
    <main className="result-page">
      <ResultCard
        losbuchResult={losbuchResult}
        onRestart={onRestart}
      />
    </main>
  );
}

export default ResultPage;
