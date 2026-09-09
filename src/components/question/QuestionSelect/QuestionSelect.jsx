import "./QuestionSelect.css";

import { questions } from "../../../data/questions/questions";


function QuestionSelect({
  selectedQuestionId,
  onSelectQuestion
}) {

  const middle = Math.ceil(questions.length / 2);

  const leftQuestions =
    questions.slice(0, middle);

  const rightQuestions =
    questions.slice(middle);


  function renderQuestion(question) {

    const isActive =
      selectedQuestionId === question.id;

    return (
      <button
        key={question.id}
        type="button"
        className={
          isActive
            ? "question-select__button question-select__button--active"
            : "question-select__button"
        }
        onClick={() =>
          onSelectQuestion(question.id)
        }
      >
        {question.modernText}
      </button>
    );
  }


  return (
    <section className="question-select">

      <h2 className="question-select__title">
        Wähle deine Frage
      </h2>


      <div className="question-select__pages">

        <div
          className="
            question-select__page
            question-select__page--left
          "
        >
          {leftQuestions.map(renderQuestion)}
        </div>


        <div
          className="
            question-select__page
            question-select__page--right
          "
        >
          {rightQuestions.map(renderQuestion)}
        </div>

      </div>

    </section>
  );
}


export default QuestionSelect;