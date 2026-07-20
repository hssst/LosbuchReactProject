import "./ResultInterpretation.css";

function ResultInterpretation({ result }) {
  if (!result) {
    return (
      <div className="result-interpretation">
        <p>
          F�r diese Kombination ist noch kein Losspruch eingetragen.
        </p>
      </div>
    );
  }

  return (
    <div className="result-interpretation">
      <p>
        <strong>König:</strong>{" "}
        {result.king}
      </p>

      <p>
        <strong>Historischer Spruch:</strong>{" "}
        {result.historical}
      </p>

      <p>
        <strong>Moderne Deutung:</strong>{" "}
        {result.modern}
      </p>
    </div>
  );
}

export default ResultInterpretation;
