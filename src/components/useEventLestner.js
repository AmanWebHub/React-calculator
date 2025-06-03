import { useState, useEffect, useCallback } from "react";
import {
  createDisplayData,
  createCalculate,
  createBackSpace,
  createClearDisplay,
} from "./calculatorUtils";

const useEventListener = () => {
  const [displayedValue, setDisplayedValue] = useState("");


  const displayData = useCallback(createDisplayData(setDisplayedValue), []);
  const calculate = useCallback(
    createCalculate(displayedValue, setDisplayedValue),
    [displayedValue]
  );


  const backSpace = useCallback(createBackSpace(setDisplayedValue), []);
  const clearDisplay = useCallback(createClearDisplay(setDisplayedValue), []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      switch (key) {
        case "Backspace":
          backSpace();
          break;
        case "Escape":
        case "Delete":
          clearDisplay();
          break;
        case "Enter":
        case "=":
          calculate();
          break;
        default:
          displayData(key);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [displayData, calculate, backSpace, clearDisplay]);

  useEffect(() => {
    const handleClick = (e) => {
      const { value } = e.target;
      if (!value) return;

      switch (value) {
        case "AC":
          clearDisplay();
          break;
        case "C":
          backSpace();
          break;
        case "=":
          calculate();
          break;
        default:
          displayData(value);
      }

      e.target.disabled = true;
      e.target.disabled = false;
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [displayData, calculate, backSpace, clearDisplay]);

  return { displayedValue, setDisplayedValue };
};

export default useEventListener;
