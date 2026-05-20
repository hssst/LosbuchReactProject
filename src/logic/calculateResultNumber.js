export function calculateResultNumber(nameValue, planetValue) {
  const sum = nameValue + planetValue;
  const remainder = sum % 9;

  if (remainder === 0) {
    return 9;
  }

  return remainder;
}
