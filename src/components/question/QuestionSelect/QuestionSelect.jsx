import "./QuestionSelect.css";

import { questions } from "../../../data/questions/questions";

function QuestionSelect({ selectedQuestionId, onSelectQuestion }) {
  return (
    <section className="question-select">
      <h2>Frage ausw�hlen</h2>

      {questions.map((question) => (
        <button
          key={question.id}
          type="button"
          className={
            selectedQuestionId === question.id
              ? "question-select__button question-select__button--active"
              : "question-select__button"
          }
          onClick={() => onSelectQuestion(question.id)}
        >
          {question.modernText}
        </button>
      ))}
    </section>
  );
}

export default QuestionSelect;
