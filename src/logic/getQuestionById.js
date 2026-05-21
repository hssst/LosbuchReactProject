import { questions } from "../data/questions/questions";

export function getQuestionById(questionId) {
  return questions.find(
    (question) => question.id === questionId
  );
}
