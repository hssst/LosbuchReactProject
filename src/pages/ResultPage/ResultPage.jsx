import { useEffect, useState } from "react";

import "./ResultPage.css";

import ResultCard from "../../components/result/ResultCard/ResultCard";
import PageTurnAnimation from "../../components/PageTurnAnimation/PageTurnAnimation";
import { preloadPageTurnImages } from "../../utils/preloadPageTurnImages";
import book from "../../assets/LosbuchSeite/book.png";

function ResultPage({
  losbuchResult,
  onRestart
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTurning, setIsTurning] = useState(false);


  useEffect(() => {
    preloadPageTurnImages();
  }, []);

  function handleAnimationFinished() {
    setCurrentStep((previousStep) => previousStep + 1);
    setIsTurning(false);
  }

  return (
    <main className="result-page">

    <div className="result-page__book">
    {isTurning ? (
      <PageTurnAnimation onFinished={handleAnimationFinished} />
    ) : (
      <img className="result-page__book-image" src={book} alt="Losbuch"/>
    )}

      <ResultCard
        losbuchResult={losbuchResult}
        onRestart={onRestart}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isTurning={isTurning}
        setIsTurning={setIsTurning}
      />
    </div>
      
    <button className="result-back-button"
      type="button"
      onClick={onRestart}
    >
      Zurück zum Losbuch
    </button>

    </main>
  );
}

export default ResultPage;