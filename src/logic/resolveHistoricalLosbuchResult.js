import { pathways } from "../data/pathways/pathways";
import { routeVerses } from "../data/pathways/routeVerses";
import { kings } from "../data/kings/kings";
import { kingResponses } from "../data/kings/kingResponses";

export function resolveHistoricalLosbuchResult(question, resultNumber) {
  const pathway =
    pathways[question.letterPair]?.[resultNumber];

  if (!pathway) {
    return null;
  }

  const route =
    routeVerses[pathway.section]?.[pathway.verse];

  if (!route) {
    return null;
  }

  const king =
    kings.find((item) => item.id === route.kingId);

  const response =
    kingResponses[route.kingId]?.find(
      (item) => item.number === resultNumber
    );

  if (!king || !response) {
    return null;
  }

  return {
    king: king.modernName,
    historicalKing: king.originalName,
    historical: response.historical,
    modern: response.modern,
    route: {
      letterPair: question.letterPair,
      section: pathway.section,
      verse: pathway.verse,
      kingId: route.kingId
    }
  };
}
