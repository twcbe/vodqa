export const getOrdinalNum = (n) =>
  n > 0
    ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
    : "";

export const padZeros = (number, maxLength) =>
  String(number).padStart(maxLength, "0");

export const getLocalTime = (date) =>
  date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

export const getFormattedDate = (date) =>
  date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
