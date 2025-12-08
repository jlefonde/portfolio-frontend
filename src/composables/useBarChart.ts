import type { Bar } from "../types";

export function useBarChart(bar: Bar) {
  const getBarColor = () => {
    const { mediumThreshold = 33, highThreshold = 66 } = bar;

    if (bar.percentage >= highThreshold) return "green";
    if (bar.percentage >= mediumThreshold) return "orange";
    return "red";
  };

  return { getBarColor };
}
