export const getScoreColor = (score: number) => {
  if (score < 10) return 'bg-score-veryLow';
  if (score < 20) return 'bg-score-low';
  if (score < 40) return 'bg-score-mediumLow';
  if (score < 60) return 'bg-score-medium';
  if (score < 80) return 'bg-score-mediumHigh';
  return 'bg-score-high';
};
