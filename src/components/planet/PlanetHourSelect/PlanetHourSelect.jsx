import "./PlanetHourSelect.css";

function PlanetHourSelect({
  weekday,
  dayPhase,
  hour,
  onWeekdayChange,
  onDayPhaseChange,
  onHourChange
}) {
  return (
    <section className="planet-hour-select">

      <h2 className="planet-hour-select__title">
        Planetenstunde bestimmen
      </h2>


      {/* WOCHENTAG */}

      <div className="planet-hour-select__field">

        <label htmlFor="weekday">
          Wochentag
        </label>

        <div className="planet-hour-select__select-wrapper">

          <select
            id="weekday"
            value={weekday}
            onChange={(event) =>
              onWeekdayChange(event.target.value)
            }
          >
            <option>Sonntag</option>
            <option>Montag</option>
            <option>Dienstag</option>
            <option>Mittwoch</option>
            <option>Donnerstag</option>
            <option>Freitag</option>
            <option>Samstag</option>
          </select>

        </div>

      </div>


      {/* TAGESZEIT */}

      <div className="planet-hour-select__field">

        <label htmlFor="dayPhase">
          Tageszeit
        </label>

        <div className="planet-hour-select__select-wrapper">

          <select
            id="dayPhase"
            value={dayPhase}
            onChange={(event) =>
              onDayPhaseChange(event.target.value)
            }
          >
            <option>Tag</option>
            <option>Nacht</option>
          </select>

        </div>

      </div>


      {/* STUNDE */}

      <div className="planet-hour-select__field">

        <label htmlFor="hour">
          Stunde
        </label>

        <div className="planet-hour-select__select-wrapper">

          <select
            id="hour"
            value={hour}
            onChange={(event) =>
              onHourChange(Number(event.target.value))
            }
          >
            <option value={1}>1. Stunde</option>
            <option value={2}>2. Stunde</option>
            <option value={3}>3. Stunde</option>
            <option value={4}>4. Stunde</option>
            <option value={5}>5. Stunde</option>
            <option value={6}>6. Stunde</option>
            <option value={7}>7. Stunde</option>
            <option value={8}>8. Stunde</option>
            <option value={9}>9. Stunde</option>
            <option value={10}>10. Stunde</option>
            <option value={11}>11. Stunde</option>
            <option value={12}>12. Stunde</option>
          </select>

        </div>

      </div>

    </section>
  );
}

export default PlanetHourSelect;