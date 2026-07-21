import { useRef, useState } from "react";

import "./LosbuchPage.css";

import QuestionSelect from "../../components/question/QuestionSelect/QuestionSelect";
import NameInput from "../../components/name/NameInput/NameInput";
import PlanetHourSelect from "../../components/planet/PlanetHourSelect/PlanetHourSelect";
import book from "../../assets/LosbuchSeite/book.png";
import paper from "../../assets/LosbuchSeite/paper.png";

import { getLosbuchResult } from "../../logic/getLosbuchResult";

function LosbuchPage({ onFinish, onGoHome }) {
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
  
      <div className="losbuch-page__book">
        <img className="book" src={book} alt="Losbuch"/>
  
        <div className="losbuch-page__left">
          <QuestionSelect
            selectedQuestionId={selectedQuestionId}
            onSelectQuestion={setSelectedQuestionId}
          />
  
        </div>
  
  
        <div className="losbuch-page__right">

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
            className="losbuch-page__button"
          >
            Ergebnis anzeigen
          </button>
  
        </div>
  
      </div>
      
      {/*<img className="paper" src={paper} alt="Papier"/>*/}
      
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
