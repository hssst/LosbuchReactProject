import PlanetReveal from "../../reveal/PlanetReveal/PlanetReveal";
import CalculationView from "../../calculation/CalculationView/CalculationView";
import JourneyReveal from "../../reveal/JourneyReveal/JourneyReveal";
import KingReveal from "../../reveal/KingReveal/KingReveal";
import ResultInterpretation from "../ResultInterpretation/ResultInterpretation";
import ResultSummary from "../ResultSummary/ResultSummary";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";

import "./ResultFlow.css";

function ResultFlow({
  losbuchResult,
  onRestart,
  currentStep,
  setCurrentStep,
  isTurning,
  setIsTurning
}) {

  const steps = [
    {
      title: "Planet",
      nextButtonLabel: "Weiter zur Berechnung",
      content: (
        <PlanetReveal losbuchResult={losbuchResult} />
      )
    },
    {
      title: "Berechnung",
      nextButtonLabel: "Dem Weg des Losbuchs folgen",
      content: (
        <CalculationView losbuchResult={losbuchResult} />
      )
    },
    {
      title: "Weg",
      nextButtonLabel: "Weiter zum König",
      content: (
        <JourneyReveal losbuchResult={losbuchResult} />
      )
    },
    {
      title: "König",
      nextButtonLabel: "Losspruch anzeigen",
      content: (
        <KingReveal losbuchResult={losbuchResult} />
      )
    },
    {
      title: "Losspruch",
      nextButtonLabel: "Zusammenfassung ansehen",
      content: (
        <ResultInterpretation result={losbuchResult.result} />
      )
    },
    {
      title: "Zusammenfassung",
      nextButtonLabel: null,
      content: (
        <ResultSummary losbuchResult={losbuchResult} />
      )
    }
  ];

  const isLastStep = currentStep === steps.length - 1;
  const currentStepData = steps[currentStep];

  function handleNextStep() {
    if (!isLastStep) {
      setIsTurning(true);
    }
  }

  function handlePreviousStep() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <>
      {!isTurning && (
        <div className="result-flow">
          <ProgressIndicator
            steps={steps}
            currentStep={currentStep}
          />
          <p className="result-flow__progress">
            Schritt {currentStep + 1} von {steps.length}
          </p>

          <h3 className="result-flow__title">
            {currentStepData.title}
          </h3>
          
          <div className="result-flow__content">
            {currentStepData.content}
          </div>
  
          <div className="result-flow__actions">
  
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePreviousStep}
              >
                Zurück
              </button>
            )}
  
            {!isLastStep && (
              <button
                type="button"
                onClick={handleNextStep}
              >
                {currentStepData.nextButtonLabel}
              </button>
            )}
  
            {isLastStep && (
              <button
                type="button"
                onClick={onRestart}
              >
                Neue Frage stellen
              </button>
            )}

          </div>

        </div>

      )}
    </>
  );
}

export default ResultFlow;