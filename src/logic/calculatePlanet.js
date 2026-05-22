import { planetHours } from "../data/planets/planetHours";

export function calculatePlanet(weekday, dayPhase, hour) {
  return planetHours[weekday][dayPhase][hour - 1];
}
