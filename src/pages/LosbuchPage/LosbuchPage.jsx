import { useRef, useState } from "react";

import "./LosbuchPage.css";

import QuestionSelect
  from "../../components/question/QuestionSelect/QuestionSelect";
import NameInput
  from "../../components/name/NameInput/NameInput";
import PlanetHourSelect
  from "../../components/planet/PlanetHourSelect/PlanetHourSelect";
import PageTurnAnimation
  from "../../components/PageTurnAnimation/PageTurnAnimation";

import weiterButton
  from "../../assets/Buttons/weiterButton.png";
import zurueckButton
  from "../../assets/Buttons/zurueckButton.png";
import planetenstundeBestimmenButton
  from "../../assets/Buttons/planetenstundeBestimmenButton.png";

import book
  from "../../assets/LosbuchSeite/book.png";

import { getLosbuchResult }
  from "../../logic/getLosbuchResult";


function LosbuchPage({
  onFinish,
  onGoHome,
  initialStep = "question"
}) {

  const [selectedQuestionId, setSelectedQuestionId] =
    useState("thoughts");
  const [name, setName] =
    useState("");
  const [weekday, setWeekday] =
    useState("Sonntag");
  const [dayPhase, setDayPhase] =
    useState("Tag");
  const [hour, setHour] =
    useState(1);
  const [errorMessage, setErrorMessage] =
    useState("");
  const [step, setStep] =
    useState(initialStep);
  const [isTurningPage, setIsTurningPage] =
    useState(false);
  const errorMessageRef =
    useRef(null);

  function scrollToErrorMessage() {
    setTimeout(() => {
      errorMessageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 0);
  }

  function handleNameChange(newName) {
    setName(newName);
    if (newName.trim() !== "") {
      setErrorMessage("");
    }
  }

  function handleInvalidCharacter() {
    setErrorMessage(
      "Bitte verwende nur Buchstaben und Leerzeichen."
    );
    scrollToErrorMessage();
  }

  function handleNextPage() {
    if (isTurningPage) {
      return;
    }
    setIsTurningPage(true);
  }

  function handlePageTurnFinished() {
    setStep("details");
    setIsTurningPage(false);
  }

  function handlePreviousPage() {
    setStep("question");
  }

  function handleShowResult() {
    if (name.trim() === "") {
      setErrorMessage(
        "Bitte gib zuerst deinen Namen ein."
      );
      scrollToErrorMessage();
      return;
    }

    setErrorMessage("");

    const result = getLosbuchResult({
      questionId: selectedQuestionId,
      name,
      weekday,
      dayPhase,
      hour
    });

    onFinish(result);
  }

  return (
    <main className="losbuch-page">

      {/* Atmosphärischer Rauch */}

      <div className="losbuch-page__smoke">
        <div className="smoke smoke--1"></div>
        <div className="smoke smoke--2"></div>
        <div className="smoke smoke--3"></div>
      </div>

      {/* Rußpartikel */}

      <div className="losbuch-page__particles">

        <span className="soot soot--1"></span>
        <span className="soot soot--2"></span>
        <span className="soot soot--3"></span>
        <span className="soot soot--4"></span>
        <span className="soot soot--5"></span>
        <span className="soot soot--6"></span>
        <span className="soot soot--7"></span>
        <span className="soot soot--8"></span>
        <span className="soot soot--9"></span>
        <span className="soot soot--10"></span>

      </div>

      <div className="losbuch-page__book">

        <img
          className="book"
          src={book}
          alt="Losbuch"
        />

        <div className="losbuch-page__candle-light" />

        {/* FRAGENAUSWAHL */}

        {step === "question" && (

          <div
            className={
              `losbuch-page__questions ${
                isTurningPage
                  ? "losbuch-page__content--turning"
                  : ""
              }`
            }
          >

            <QuestionSelect
              selectedQuestionId={selectedQuestionId}
              onSelectQuestion={setSelectedQuestionId}
            />

            <button
              type="button"
              className="losbuch-page__next-button"
              onClick={handleNextPage}
              aria-label="Weiterblättern"
            >

              <img
                src={weiterButton}
                alt="Weiter-Button"
                className="losbuch-page__next-button-image"
              />

            </button>

          </div>

        )}

        {/* NAME + PLANETENSTUNDE */}

        {step === "details" && (

          <div className="losbuch-page__details">

            <div className="losbuch-page__details-left">

              <div className="losbuch-page__detail-intro">

                <h2>
                  Deine Weissagung
                </h2>

                <p>
                  Die Frage ist gewählt.
                  Nun fehlen nur noch dein Name
                  und die Stunde des Planeten.
                </p>

              </div>

            </div>

            <div className="losbuch-page__details-right">

              <NameInput
                name={name}
                onNameChange={handleNameChange}
                errorMessage={errorMessage}
                onInvalidCharacter={handleInvalidCharacter}
              />

              <PlanetHourSelect
                weekday={weekday}
                dayPhase={dayPhase}
                hour={hour}
                onWeekdayChange={setWeekday}
                onDayPhaseChange={setDayPhase}
                onHourChange={setHour}
              />

              <button
                type="button"
                onClick={handleShowResult}
                className="losbuch-page__result-button"
                aria-label="Planetenstunde bestimmen"
              >

                <img
                  src={planetenstundeBestimmenButton}
                  alt="Planetenstunde bestimmen"
                  className="losbuch-page__result-button-image"
                />

              </button>

            </div>

            <button
              type="button"
              className="losbuch-page__previous-button"
              onClick={handlePreviousPage}
              aria-label="Zurück"
            >

              <img
                src={zurueckButton}
                alt="Zurück"
                className="losbuch-page__previous-button-image"
              />

            </button>

          </div>

        )}

        {/* UMBLÄTTER-ANIMATION */}

        {isTurningPage && (

          <PageTurnAnimation
            onFinished={handlePageTurnFinished}
          />
        )}

      </div>

      <button
        className="home-button"
        onClick={onGoHome}
      >
        ← Zur Startseite
      </button>

    </main>
  );
}

export default LosbuchPage;