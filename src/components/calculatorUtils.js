import { evaluate } from "mathjs";

export const createDisplayData = (setDisplayedValue) => (key) => {
  const filteredData = key.replace(/[^0-9\.\+\-\*\/%]/g, "");
  setDisplayedValue((prev) => prev + filteredData);
};

export const createCalculate = (displayedValue, setDisplayedValue) => () => {
  try {
    const result = evaluate(displayedValue);
    setDisplayedValue(result.toString());
  } catch (error) {
    setDisplayedValue("Error");
  }
};

export const createBackSpace = (setDisplayedValue) => () => {
  setDisplayedValue((prev) => prev.slice(0, -1));
};

export const createClearDisplay = (setDisplayedValue) => () => {
  setDisplayedValue("");
};