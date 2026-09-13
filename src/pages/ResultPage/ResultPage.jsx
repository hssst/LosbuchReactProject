import { useState } from "react";

import "./ResultPage.css";

import { planetLabels } from "../../data/planets/planetLabels";

import jupiter from "../../assets/ResultPage/jupiter.png";
import mars from "../../assets/ResultPage/mars.png";
import merkur from "../../assets/ResultPage/merkur.png";
import saturn from "../../assets/ResultPage/saturn.png";
import sonne from "../../assets/ResultPage/sonne.png";
import venus from "../../assets/ResultPage/venus.png";
import mond from "../../assets/ResultPage/mond.png";

import nameKarte from "../../assets/Tarotkarten/nameKarte.png";
import frageKarte from "../../assets/Tarotkarten/frageKarte.png";

import jupiterKarte from "../../assets/PlanetKarten/jupiterKarte.png";
import marsKarte from "../../assets/PlanetKarten/marsKarte.png";
import merkurKarte from "../../assets/PlanetKarten/merkurKarte.png";
import mondKarte from "../../assets/PlanetKarten/mondKarte.png";
import saturnKarte from "../../assets/PlanetKarten/saturnKarte.png";
import sonneKarte from "../../assets/PlanetKarten/sonneKarte.png";
import venusKarte from "../../assets/PlanetKarten/venusKarte.png";

import weiterButton from "../../assets/Buttons/weiterButton.png";
import zurueckButton from "../../assets/Buttons/zurueckButton.png";

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

const planetCardImages = {
  Sun: sonneKarte,
  Moon: mondKarte,
  Mercury: merkurKarte,
  Venus: venusKarte,
  Mars: marsKarte,
  Jupiter: jupiterKarte,
  Saturn: saturnKarte
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

  const planetCardImage =
    planetCardImages[planetKey];

  const questionText =
    losbuchResult?.question?.modernText ?? "";

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
            aria-label="Weiter"
          >
          <img
            src={weiterButton}
            alt="Weiter-Button"
            className="result-next-button__image"
          />
          </button>

        </section>

      )}


      {/* ============================== */}
      {/* STEP 2                         */}
      {/* ============================== */}

      {currentStep === 1 && (

        <section className="result-map-step">

          <div className="result-map-stage">

            {/* MAP */}

            <img
              className="result-map"
              src={map}
              alt="Losbuch Karte"
            />


            {/* KARTEN LINKS */}

            <div className="result-map-cards">

              {/* NAMENSKARTE */}

              <div className="result-name-card">

                <img
                  src={nameKarte}
                  alt=""
                  className="result-name-card__image"
                />

                <span className="result-name-card__name">
                  {name}
                </span>

              </div>


              {/* PLANETENKARTE */}

              {planetCardImage && (

                <img
                  src={planetCardImage}
                  alt={planetLabel}
                  className="result-planet-card"
                />

              )}

            </div>

            {/* FRAGEKARTE */}
            
             <div className="result-question-card">

              <img
                src={frageKarte}
                alt=""
                className="result-question-card__image"
              />

              <span className="result-question-card__text">
                {questionText}
              </span>

            </div>

          </div>


          <button
            type="button"
            className="result-map-back-button"
            onClick={() => setCurrentStep(0)}
            aria-label="Zurück"
          >
            <img
              src={zurueckButton}
              alt="Zurück"
              className="result-map-back-button__image"
            />
          </button>

        </section>

      )}

    </main>
  );
}


export default ResultPage;