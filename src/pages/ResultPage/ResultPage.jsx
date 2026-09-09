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

import map from "../../assets/ResultPage/map.svg";


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
    <main
      className={`result-page ${
        currentStep === 1
          ? "result-page--map"
          : ""
      }`}
    >

      {/* ============================== */}
      {/* STEP 1                         */}
      {/* ============================== */}

      {currentStep === 0 && (

        <section className="result-overview">

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


          <div className="result-panel result-panel--hour">

            <span className="result-panel__title">
              Deine Planetenstunde
            </span>

            <div className="result-panel__content">

              <span className="result-hour">
                {resultNumber}
              </span>

            </div>

          </div>


          <button
            type="button"
            className="result-next-button"
            onClick={() => setCurrentStep(1)}
          >
            Weiter →
          </button>

        </section>

      )}


      {/* ============================== */}
      {/* STEP 2                         */}
      {/* ============================== */}

      {currentStep === 1 && (

        <section className="result-map-step">

          <img
            className="result-map"
            src={map}
            alt="Losbuch Karte"
          />


          <button
            type="button"
            className="result-map-back-button"
            onClick={() => setCurrentStep(0)}
          >
            ← Zurück
          </button>

        </section>

      )}


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