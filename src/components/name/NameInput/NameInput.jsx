import "./NameInput.css";

function NameInput({
  name,
  onNameChange,
  errorMessage,
  onInvalidCharacter
}) {
  function handleChange(event) {
    const newValue = event.target.value;
    const allowedPattern = /^[a-zA-ZäöüÄÖÜß\s]*$/;

    if (allowedPattern.test(newValue)) {
      onNameChange(newValue);
      return;
    }

    onInvalidCharacter();
  }

  return (
    <section className="name-input">
      <h2>Name eingeben</h2>

      <input
        type="text"
        placeholder="Dein Name"
        value={name}
        onChange={handleChange}
      />

      {errorMessage && (
        <p className="name-input__error">
          {errorMessage}
        </p>
      )}
    </section>
  );
}

export default NameInput;
