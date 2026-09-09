import { useState } from "react";

import "./ResultPage.css";

import ResultCard from "../../components/result/ResultCard/ResultCard";

import { planetLabels } from "../../data/planets/planetLabels";

import jupiter from "../../assets/ResultPage/jupiter.png";
import mars from "../../assets/ResultPage/mars.png";
import merkur from "../../assets/ResultPage/merkur.png";
import saturn from "../../assets/ResultPage/saturn.png";
import sonne from "../../assets/ResultPage/sonne.png";
import venus from "../../assets/ResultPage/venus.png";
import mond from "../../assets/ResultPage/mond.png";


const planetImages = {
  Sun: sonne,
  Moon: mond,
  Mercury: merkur,
  Venus: venus,
  Mars: mars,
  Jupiter: jupiter,
  Saturn: saturn
};


function ResultPage({
  losbuchResult,
  onRestart
}) {

  const [currentStep, setCurrentStep] = useState(0);


  /*
    Werte aus getLosbuchResult()
  */

  const name =
    losbuchResult?.name ?? "";

  const planetKey =
    losbuchResult?.planet ?? "";

  const planetLabel =
    planetLabels[planetKey] ?? planetKey;

  const resultNumber =
    losbuchResult?.resultNumber ?? "";

  const planetImage =
    planetImages[planetKey];


  return (
    <main className="result-page">

      {/* ================================= */}
      {/* STEP 1                            */}
      {/* NAME / PLANET / ERGEBNISZAHL      */}
      {/* ================================= */}

      {currentStep === 0 && (

        <section className="result-overview">


          {/* ============================= */}
          {/* NAME                          */}
          {/* ============================= */}

          <div className="result-panel result-panel--name">

            <span className="result-panel__title">
              Dein Name
            </span>

            <div className="result-panel__content">

              <span className="result-name">
                {name}
              </span>

            </div>

          </div>


          {/* ============================= */}
          {/* PLANET                        */}
          {/* ============================= */}

          <div className="result-panel result-panel--planet">

            <span className="result-panel__title">
              Dein Planet
            </span>

            <div className="result-panel__content">

              {planetImage && (
                <img
                  className="result-planet"
                  src={planetImage}
                  alt={planetLabel}
                />
              )}

            </div>

            <span className="result-planet__name">
              {planetLabel}
            </span>

          </div>


          {/* ============================= */}
          {/* BERECHNETER WERT              */}
          {/* ============================= */}

          <div className="result-panel result-panel--hour">

            <span className="result-panel__title">
              Deine Ergebniszahl
            </span>

            <div className="result-panel__content">

              <span className="result-hour">
                {resultNumber}
              </span>

            </div>

          </div>


          {/* ============================= */}
          {/* WEITER                        */}
          {/* ============================= */}

          <button
            type="button"
            className="result-next-button"
            onClick={() => setCurrentStep(1)}
          >
            Weiter →
          </button>

        </section>

      )}


      {/* ================================= */}
      {/* WEITERE RESULT-STEPS              */}
      {/* ================================= */}

      {currentStep > 0 && (

        <ResultCard
          losbuchResult={losbuchResult}
          onRestart={onRestart}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

      )}


      {/* ================================= */}
      {/* ZURÜCK                            */}
      {/* ================================= */}

      <button
        className="result-back-button"
        type="button"
        onClick={onRestart}
      >
        ← Zurück zum Losbuch
      </button>

    </main>
  );
}


export default ResultPage;