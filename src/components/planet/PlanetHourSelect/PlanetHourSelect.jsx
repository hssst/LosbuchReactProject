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
      <h2>Planetenstunde bestimmen</h2>

      <label>
        Wochentag
        <select
          value={weekday}
          onChange={(event) => onWeekdayChange(event.target.value)}
        >
          <option>Sonntag</option>
          <option>Montag</option>
          <option>Dienstag</option>
          <option>Mittwoch</option>
          <option>Donnerstag</option>
          <option>Freitag</option>
          <option>Samstag</option>
        </select>
      </label>

      <label>
        Tageszeit
        <select
          value={dayPhase}
          onChange={(event) => onDayPhaseChange(event.target.value)}
        >
          <option>Tag</option>
          <option>Nacht</option>
        </select>
      </label>

      <label>
        Stunde
        <select
          value={hour}
          onChange={(event) => onHourChange(Number(event.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
        </select>
      </label>
    </section>
  );
}

export default PlanetHourSelect;
