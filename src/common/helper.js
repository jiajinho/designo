/**
 * https://stats.stackexchange.com/questions/70801/how-to-normalize-data-to-0-1-range
 * @returns {number} 0.0 to 1.0
 */
export const normalizeValue = (val, max, min) => {
  return (val - min) / (max - min);
}