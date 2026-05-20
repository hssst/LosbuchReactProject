import { calculateNameValue } from "./calculateNameValue";
import { calculatePlanet } from "./calculatePlanet";
import { calculateResultNumber } from "./calculateResultNumber";

import { planetValues } from "../data/planetValues";
import { losbuchResults } from "../data/losbuchResults";

import { getQuestionById } from "./getQuestionById";

export function getLosbuchResult({
  questionId,
  name,
  weekday,
  dayPhase,
  hour
}) {
  const question = getQuestionById(questionId);

  const nameValue = calculateNameValue(name);

  const planet = calculatePlanet(
    weekday,
    dayPhase,
    hour
  );

  const planetValue = planetValues[planet];

  const resultNumber = calculateResultNumber(
    nameValue,
    planetValue
  );

  const result =
    losbuchResults[questionId]?.[resultNumber];

  return {
    question,
    name,
    planet,
    nameValue,
    planetValue,
    resultNumber,
    result
  };
}
