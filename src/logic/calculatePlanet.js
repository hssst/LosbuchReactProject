import { planetHours } from "../data/planetHours";

export function calculatePlanet(weekday, dayPhase, hour) {
  return planetHours[weekday][dayPhase][hour - 1];
}
