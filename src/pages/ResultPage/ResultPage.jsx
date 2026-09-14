import { useEffect, useState } from "react";

import "./ResultPage.css";

import { planetLabels } from "../../data/planets/planetLabels";
import { kings } from "../../data/kings/kings";

import jupiter from "../../assets/ResultPage/jupiter.png";
import mars from "../../assets/ResultPage/mars.png";
import merkur from "../../assets/ResultPage/merkur.png";
import saturn from "../../assets/ResultPage/saturn.png";
import sonne from "../../assets/ResultPage/sonne.png";
import venus from "../../assets/ResultPage/venus.png";
import mond from "../../assets/ResultPage/mond.png";

import nameKarte from "../../assets/Tarotkarten/nameKarte.png";
import frageKarte from "../../assets/Tarotkarten/frageKarte.png";
import planetenStundeKarte
  from "../../assets/Tarotkarten/planetenStundeKarte.png";

import jupiterKarte from "../../assets/PlanetKarten/jupiterKarte.png";
import marsKarte from "../../assets/PlanetKarten/marsKarte.png";
import merkurKarte from "../../assets/PlanetKarten/merkurKarte.png";
import mondKarte from "../../assets/PlanetKarten/mondKarte.png";
import saturnKarte from "../../assets/PlanetKarten/saturnKarte.png";
import sonneKarte from "../../assets/PlanetKarten/sonneKarte.png";
import venusKarte from "../../assets/PlanetKarten/venusKarte.png";

import armenienKing from "../../assets/KoenigKarten/armenienKing.png";
import babylonKing from "../../assets/KoenigKarten/babylonKing.png";
import deutschlandKing from "../../assets/KoenigKarten/deutschlandKing.png";
import englandKing from "../../assets/KoenigKarten/englandKing.png";
import frankreichKing from "../../assets/KoenigKarten/frankreichKing.png";
import indienKing from "../../assets/KoenigKarten/indienKing.png";
import kappadokienKing from "../../assets/KoenigKarten/kappadokienKing.png";
import libyenKing from "../../assets/KoenigKarten/libyenKing.png";
import nubienKing from "../../assets/KoenigKarten/nubienKing.png";
import polenKing from "../../assets/KoenigKarten/polenKing.png";
import schottlandKing from "../../assets/KoenigKarten/schottlandKing.png";
import schwedenKing from "../../assets/KoenigKarten/schwedenKing.png";
import sizilienKing from "../../assets/KoenigKarten/sizilienKing.png";
import tatarenKing from "../../assets/KoenigKarten/tatarenKing.png";
import tuerkeiKing from "../../assets/KoenigKarten/tuerkeiKing.png";
import zypernKing from "../../assets/KoenigKarten/zypernKing.png";

import zurueckButton from "../../assets/Buttons/zurueckButton.png";
import rechenwegButton from "../../assets/Buttons/rechenwegButton.png";
import nextQuestionButton from "../../assets/Buttons/nextQuestionButton.png";

import PlanetReveal from "../../components/reveal/PlanetReveal/PlanetReveal";
import JourneyReveal from "../../components/reveal/JourneyReveal/JourneyReveal";
import KingReveal from "../../components/reveal/KingReveal/KingReveal";

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

const kingCardImages = {
  turkish: tuerkeiKing,
  polish: polenKing,
  india: indienKing,
  england: englandKing,
  scotland: schottlandKing,
  armenia: armenienKing,
  nubia: nubienKing,
  cyprus: zypernKing,
  babylon: babylonKing,
  libya: libyenKing,
  france: frankreichKing,
  tartars: tatarenKing,
  sicily: sizilienKing,
  cappadocia: kappadokienKing,
  german: deutschlandKing,
  sweden: schwedenKing
};

const planetKeys = [
  "Sun",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn"
];

function ResultPage({
  losbuchResult,
  onRestart,
  onBackToInput
}) {

  const [currentStep, setCurrentStep] = useState(0);
  const [displayedHour, setDisplayedHour] = useState(0);
  const [showCalculation, setShowCalculation] = useState(false);
  const [planetAnimationFinished, setPlanetAnimationFinished] = useState(false);

  const resultNumber =
    losbuchResult?.resultNumber ?? "";

  const name =
    losbuchResult?.name ?? "";

  const planetKey =
    losbuchResult?.planet ?? "";

  const planetLabel =
    planetLabels[planetKey] ??
    planetKey;

  const planetCardImage =
    planetCardImages[planetKey];

  const questionText =
    losbuchResult?.question
      ?.modernText ?? "";

  const kingId =
    losbuchResult?.result
      ?.route?.kingId ?? "";

  const assignedKing =
    kings.find(
      (king) =>
        king.id === kingId
    );

  const kingCardImage =
    assignedKing
      ? kingCardImages[
          assignedKing.id
        ]
      : null;

  const historicalText =
    losbuchResult?.result
      ?.historical ?? "";

  const modernText =
    losbuchResult?.result
      ?.modern ?? "";

  const animatedPlanetSequence = planetKey
    ? [
        ...planetKeys,
        ...planetKeys,
        planetKey
      ]
    : [];

  const PLANET_ITEM_WIDTH = 150;
  const PLANET_GAP = 70;
  const PLANET_STRIDE =
    PLANET_ITEM_WIDTH +
    PLANET_GAP;

  const planetFinalIndex =
    Math.max(
      animatedPlanetSequence.length - 1,
      0
    );

  const planetFinalCenter =
    planetFinalIndex *
      PLANET_STRIDE +
    PLANET_ITEM_WIDTH / 2;

  /* PLANETEN VORBEIZIEHEN */

  useEffect(() => {

    if (
      currentStep !== 0 ||
      !planetKey
    ) {
      return;
    }

    setPlanetAnimationFinished(false);

    const timeout =
      window.setTimeout(() => {
        setPlanetAnimationFinished(true);
      }, 4200);

    return () => {
      window.clearTimeout(timeout);
    };

  }, [
    currentStep,
    planetKey
  ]);

  /* PLANETENSTUNDE HOCHZÄHLEN */

  useEffect(() => {

    if (
      currentStep !== 0 ||
      !planetAnimationFinished
    ) {
      setDisplayedHour(0);
      return;
    }

    const target =
      Number(resultNumber);

    if (!Number.isFinite(target)) {
      setDisplayedHour(resultNumber);
      return;
    }

    if (target <= 0) {
      setDisplayedHour(target);
      return;
    }

    setDisplayedHour(0);

    let interval;

    const timeout =
      window.setTimeout(() => {

        let current = 0;

        interval =
          window.setInterval(() => {

            current += 1;

            setDisplayedHour(
              Math.min(current, target)
            );

            if (current >= target) {
              window.clearInterval(interval);
            }

          }, 250);

      }, 300);

    return () => {

      window.clearTimeout(timeout);

      if (interval) {
        window.clearInterval(interval);
      }

    };

  }, [
    currentStep,
    resultNumber,
    planetAnimationFinished
  ]);

  return (
    <main
      className={`result-page ${
        currentStep === 1
          ? "result-page--map"
          : ""
      }`}
    >

      {/* STEP 1 */}

      {currentStep === 0 && (

        <section className="result-overview">

          {/* NAME */}

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

          {/* PLANET */}

          <div className="result-panel result-panel--planet">

            <span className="result-panel__title">
              Dein Planet
            </span>

            <div className="result-panel__content result-planet-window">

              <div
                className={`result-planet-track ${
                  planetAnimationFinished
                    ? "result-planet-track--finished"
                    : ""
                }`}
                style={{
                  "--planet-final-center": `${planetFinalCenter}px`
                }}
              >

                {animatedPlanetSequence.map((planet, index) => (
                  <div
                    className={`result-planet-track__item ${
                      index === animatedPlanetSequence.length - 1
                        ? "result-planet-track__item--final"
                        : ""
                    }`}
                    key={`${planet}-${index}`}
                  >

                    <img
                      src={planetImages[planet]}
                      alt={
                        index === animatedPlanetSequence.length - 1
                          ? planetLabel
                          : ""
                      }
                      className="result-planet-track__image"
                    />

                  </div>
                ))}

              </div>

            </div>

            <span
              className={`result-planet__name ${
                planetAnimationFinished
                  ? "result-planet__name--visible"
                  : ""
              }`}
            >
              {planetAnimationFinished
                ? planetLabel
                : ""}
            </span>

          </div>

          {/* PLANETENSTUNDE */}

          <div className="result-panel result-panel--hour">

            <span className="result-panel__title">
              Deine Planetenstunde
            </span>

            <div className="result-panel__content">

              <span className="result-hour">
                {displayedHour}
              </span>

            </div>

          </div>

          {/* ZURÜCK ZUR NAMENSEINGABE */}

          <button
            type="button"
            className="result-step-one-back-button"
            onClick={onBackToInput}
          >
            Zurück
          </button>

          {/* WEITER */}

          <button
            type="button"
            className="result-next-button"
            onClick={() => setCurrentStep(1)}
          >
            Weiter
          </button>

        </section>

      )}

      {/* STEP 2 - MAP */}

      {currentStep === 1 && (

        <section className="result-map-step">

          <div className="result-map-stage">

            <img
              className="result-map"
              src={map}
              alt="Losbuch Karte"
            />

            <div className="result-map-cards">

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

              {planetCardImage && (

                <img
                  src={planetCardImage}
                  alt={planetLabel}
                  className="result-planet-card"
                />

              )}

            </div>

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

            <div className="result-planet-hour-card">

              <img
                src={planetenStundeKarte}
                alt=""
                className="result-planet-hour-card__image"
              />

              <span className="result-planet-hour-card__value">
                {resultNumber}
              </span>

            </div>

            {kingCardImage && (

              <div className="result-king-card">

                <img
                  src={kingCardImage}
                  alt={
                    assignedKing?.modernName ??
                    "König"
                  }
                  className="result-king-card__image"
                />

              </div>

            )}

            <svg
              className="result-route"
              viewBox="0 0 1000 560"
              aria-hidden="true"
            >

              <defs>

                <mask id="routeMask1">

                  <path
                    className="
                      result-route__reveal
                      result-route__reveal--1
                    "
                    pathLength="100"
                    d="
                      M 155 305
                      C 175 315,
                        205 315,
                        250 296
                      C 300 280,
                        335 250,
                        395 220
                      C 430 212,
                        455 215,
                        475 215
                    "
                  />

                </mask>

                <mask id="routeMask2">

                  <path
                    className="
                      result-route__reveal
                      result-route__reveal--2
                    "
                    pathLength="100"
                    d="
                      M 535 215
                      C 565 215,
                        615 235,
                        665 270
                      C 710 305,
                        730 330,
                        785 338
                      C 825 344,
                        865 340,
                        895 295
                    "
                  />

                </mask>

              </defs>

              <path
                className="result-route__dots"
                mask="url(#routeMask1)"
                d="
                  M 155 305
                  C 175 315,
                    205 315,
                    250 296
                  C 300 280,
                    335 250,
                    395 220
                  C 430 212,
                    455 215,
                    475 215
                "
              />

              <path
                className="result-route__dots"
                mask="url(#routeMask2)"
                d="
                  M 500 215
                  C 565 215,
                    615 235,
                    665 270
                  C 710 305,
                    730 330,
                    785 338
                  C 825 344,
                    865 340,
                    895 325
                "
              />

            </svg>

          </div>

          {/* WEITER */}

          <button
            type="button"
            className="result-map-next-button"
            onClick={() => setCurrentStep(2)}
          >
            Weiter
          </button>

          {/* ZURÜCK */}

          <button
            type="button"
            className="result-map-back-button"
            onClick={() => setCurrentStep(0)}
          >
            Zurück
          </button>

        </section>

      )}

      {/* STEP 3 - ZUSAMMENFASSUNG */}

      {currentStep === 2 && (

        <section className="result-summary">

          <div className="result-summary__king">

            {kingCardImage && (

              <img
                src={kingCardImage}
                alt={
                  assignedKing?.modernName ??
                  "König"
                }
                className="result-summary__king-image"
              />

            )}

          </div>

          <div className="result-summary__texts">

            <div className="result-summary__text-box">

              <span className="result-summary__label">
                Dein historischer Lossspruch
              </span>

              <p className="result-summary__historical">
                {historicalText}
              </p>

            </div>

            <div className="result-summary__text-box">

              <span className="result-summary__label">
                Deine moderne Deutung
              </span>

              <p className="result-summary__modern">
                {modernText}
              </p>

            </div>

          </div>

          <div className="result-summary__cards">

            <div className="result-summary__small-card">

              <img
                src={frageKarte}
                alt="Frage"
              />

              <span className="result-summary__question-text">
                {questionText}
              </span>

            </div>

            <div className="result-summary__small-card">

              <img
                src={planetenStundeKarte}
                alt="Planetenstunde"
              />

              <span className="result-summary__hour-value">
                {resultNumber}
              </span>

            </div>

            {planetCardImage && (

              <img
                src={planetCardImage}
                alt={planetLabel}
                className="result-summary__planet-card"
              />

            )}

          </div>

          {/* RECHENWEG */}

          <button
            type="button"
            className="result-summary__calculation-button"
            onClick={() =>
              setShowCalculation((current) => !current)
            }
            aria-label="Rechenweg anzeigen"
          >
            <img
              src={rechenwegButton}
              alt="Rechenweg anzeigen"
              className="result-summary__calculation-button-image"
            />
          </button>

          {/* RECHENWEG-OVERLAY */}

          {showCalculation && (
            <div className="result-summary__calculation-overlay">

              <div className="result-summary__calculation">

                <button
                  type="button"
                  className="result-summary__calculation-close"
                  onClick={() => setShowCalculation(false)}
                  aria-label="Rechenweg schließen"
                >
                  ×
                </button>

                <h2 className="result-summary__calculation-title">
                  Dein Weg durch das Losbuch
                </h2>

                <div className="result-summary__calculation-content">

                  <PlanetReveal
                    losbuchResult={losbuchResult}
                  />

                  <JourneyReveal
                    losbuchResult={losbuchResult}
                  />

                  <KingReveal
                    losbuchResult={losbuchResult}
                  />

                </div>

              </div>

            </div>
          )}

          {/* NEUE FRAGE */}

          <button
            type="button"
            className="result-summary__restart"
            onClick={onRestart}
            aria-label="Stelle eine neue Frage"
          >

            <img
              src={nextQuestionButton}
              alt="Stelle eine neue Frage"
              className="result-summary__restart-image"
            />

          </button>

          {/* ZURÜCK */}

          <button
            type="button"
            className="result-summary__back"
            onClick={() =>
              setCurrentStep(1)
            }
            aria-label="Zurück"
          >

            <img
              src={zurueckButton}
              alt="Zurück"
            />

          </button>

        </section>

      )}

    </main>
  );
}


export default ResultPage;