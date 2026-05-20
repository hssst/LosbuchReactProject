export function normalizeName(name) {
  return name
    .toUpperCase()
    .replaceAll("Ä", "A")
    .replaceAll("Ö", "O")
    .replaceAll("Ü", "U")
    .replaceAll("ß", "S")
    .replace(/[^A-Z]/g, "");
}
