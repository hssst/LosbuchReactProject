import { useRef, useState } from "react";

import "./LosbuchPage.css";

import QuestionSelect from "../../components/question/QuestionSelect/QuestionSelect";
import NameInput from "../../components/name/NameInput/NameInput";
import PlanetHourSelect from "../../components/planet/PlanetHourSelect/PlanetHourSelect";

import { getLosbuchResult } from "../../logic/getLosbuchResult";

function LosbuchPage({ onFinish }) {
  const [selectedQuestionId, setSelectedQuestionId] = useState("thoughts");
  const [name, setName] = useState("");
  const [weekday, setWeekday] = useState("Sonntag");
  const [dayPhase, setDayPhase] = useState("Tag");
  const [hour, setHour] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const errorMessageRef = useRef(null);

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
    setErrorMessage("Bitte verwende nur Buchstaben und Leerzeichen.");
    scrollToErrorMessage();
  }

  function handleShowResult() {
    if (name.trim() === "") {
      setErrorMessage("Bitte gib zuerst deinen Namen ein.");
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
      <div className="losbuch-page__content">
        <h1>Losbuch-Seite</h1>

        <QuestionSelect
          selectedQuestionId={selectedQuestionId}
          onSelectQuestion={setSelectedQuestionId}
        />

        <div ref={errorMessageRef}>
          <NameInput
            name={name}
            onNameChange={handleNameChange}
            errorMessage={errorMessage}
            onInvalidCharacter={handleInvalidCharacter}
          />
        </div>

        <PlanetHourSelect
          weekday={weekday}
          dayPhase={dayPhase}
          hour={hour}
          onWeekdayChange={setWeekday}
          onDayPhaseChange={setDayPhase}
          onHourChange={setHour}
        />

        <div className="losbuch-page__actions">
          <button type="button" onClick={handleShowResult}>
            Ergebnis anzeigen
          </button>
        </div>
      </div>
    </main>
  );
}

export default LosbuchPage;
