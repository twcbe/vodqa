export const getOrdinalNum = (n) =>
  n > 0
    ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
    : "";

export const padZeros = (number, maxLength) =>
  String(number).padStart(maxLength, "0");
