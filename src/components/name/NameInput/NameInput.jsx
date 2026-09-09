import "./NameInput.css";

function NameInput({
  name,
  onNameChange,
  errorMessage,
  onInvalidCharacter
}) {

  function handleChange(event) {

    const newValue = event.target.value;

    const allowedPattern =
      /^[a-zA-ZäöüÄÖÜß\s]*$/;

    if (allowedPattern.test(newValue)) {
      onNameChange(newValue);
      return;
    }

    onInvalidCharacter();
  }


  return (
    <section className="name-input">

      <h2 className="name-input__title">
        Wie lautet dein Name?
      </h2>

      <div className="name-input__field-wrapper">

        <input
          className="name-input__field"
          type="text"
          placeholder="Dein Name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
        />

      </div>


      {errorMessage && (
        <p className="name-input__error">
          {errorMessage}
        </p>
      )}

    </section>
  );
}

export default NameInput;