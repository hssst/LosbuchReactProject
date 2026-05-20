import { questions } from "../data/questions";

export function getQuestionById(questionId) {
  return questions.find(
    (question) => question.id === questionId
  );
}
