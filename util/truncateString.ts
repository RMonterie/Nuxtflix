// Add docs why 18
export const truncateString = (
  stringToTruncate: string,
  maxLength: number = 18
) => {
  if (stringToTruncate.length > maxLength) {
    return `${stringToTruncate.substring(0, maxLength)}...`;
  }

  return stringToTruncate;
};
