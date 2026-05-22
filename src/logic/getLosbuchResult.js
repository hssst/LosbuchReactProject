import { calculateNameValue } from "./calculateNameValue";
import { calculatePlanet } from "./calculatePlanet";
import { calculateResultNumber } from "./calculateResultNumber";
import { getQuestionById } from "./getQuestionById";
import { resolveHistoricalLosbuchResult } from "./resolveHistoricalLosbuchResult";

import { planetValues } from "../data/planets/planetValues";

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

  const result = resolveHistoricalLosbuchResult(
    question,
    resultNumber
  );

  return {
    question,
    name,
    weekday,
    dayPhase,
    hour,
    planet,
    nameValue,
    planetValue,
    resultNumber,
    result
  };
}
