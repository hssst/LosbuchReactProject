import "./PlanetHourSelect.css";

import sonne from "../../../assets/ResultPage/sonne.png";
import mond from "../../../assets/ResultPage/mond.png";

import { playSound } from "../../../sounds";

const weekdays = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

function PlanetHourSelect({
  weekday,
  dayPhase,
  hour,
  onWeekdayChange,
  onDayPhaseChange,
  onHourChange,
}) {
  return (
    <section className="planet-hour-select">
      <h2 className="planet-hour-select__title">Planetenstunde bestimmen</h2>

      {/* WOCHENTAG */}

      <div className="planet-hour-select__field">
        <span className="planet-hour-select__label">Wochentag</span>

        <div className="weekday-grid">
          {weekdays.map((day) => (
            <button
              key={day}
              type="button"
              className={
                weekday === day
                  ? "weekday-grid__button weekday-grid__button--active"
                  : "weekday-grid__button"
              }
              onClick={() => {
                playSound("wood", { volume: 0.3 });
                onWeekdayChange(day);
              }}
            >
              {day.slice(0, 2)}
            </button>
          ))}
        </div>
      </div>

      {/* TAGESZEIT */}

      <div className="planet-hour-select__field">
        <span className="planet-hour-select__label">Tageszeit</span>

        <div className="dayphase-select">
          <button
            type="button"
            className={
              dayPhase === "Tag"
                ? "dayphase-select__option dayphase-select__option--active"
                : "dayphase-select__option"
            }
            onClick={() => {
              playSound("wood", { volume: 0.3 });
              onDayPhaseChange("Tag");
            }}
          >
            <img src={sonne} alt="" />
            <span>Tag</span>
          </button>

          <button
            type="button"
            className={
              dayPhase === "Nacht"
                ? "dayphase-select__option dayphase-select__option--active"
                : "dayphase-select__option"
            }
            onClick={() => {
              playSound("wood", { volume: 0.3 });
              onDayPhaseChange("Nacht");
            }}
          >
            <img src={mond} alt="" />
            <span>Nacht</span>
          </button>
        </div>
      </div>

      {/* STUNDE */}

      <div className="planet-hour-select__field">
        <span className="planet-hour-select__label">
          Stunde <strong>{hour}</strong>
        </span>

        <input
          type="range"
          className="hour-slider"
          min={1}
          max={12}
          step={1}
          value={hour}
          onChange={(event) => {
            playSound("wood", { volume: 0.2 });
            onHourChange(Number(event.target.value));
          }}
        />

        <div className="hour-slider__scale">
          <span>1</span>
          <span>12</span>
        </div>
      </div>
    </section>
  );
}

export default PlanetHourSelect;