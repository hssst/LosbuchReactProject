export function normalizeName(name) {
  return name
    .toUpperCase()
    .replaceAll("�", "A")
    .replaceAll("�", "O")
    .replaceAll("�", "U")
    .replaceAll("�", "S")
    .replace(/[^A-Z]/g, "");
}
