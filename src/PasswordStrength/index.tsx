import { useEffect } from "react";
import usePasswordConfigurationStore from "../stores/PasswordConfigurationStore.store";
import GeneratePassword from "./GeneratePassword";
import "./PasswordStrength.css";

const PasswordStrength = () => {
  const { characterLenght, checkboxInformation } =
    usePasswordConfigurationStore((state) => state);
  const { lowercase, numbersCheckbox, symbols, upperCase } =
    checkboxInformation;

  function displayStrengthLevel() {
    const selectedCheckboxes = [lowercase, numbersCheckbox, symbols, upperCase];
    const countSelected = selectedCheckboxes.filter(
      (checkbox) => checkbox
    ).length;

    if (characterLenght === 0) {
      return "";
    }
    if (countSelected <= 2) {
      return "WEAK";
    }

    if (countSelected === 3) {
      return "MEDIUM";
    }

    if (countSelected === 4) {
      return "STRONG";
    }
  }

  function provideClassNameBasedOnStrengthLevel(): string {
    const strengthLevel = displayStrengthLevel();

    if (strengthLevel === "WEAK") {
      return "weak-level";
    }

    if (strengthLevel === "MEDIUM") {
      return "medium-level";
    }

    if (strengthLevel === "STRONG") {
      return "strong-level";
    }

    return "";
  }

  useEffect(() => {
    displayStrengthLevel();
    provideClassNameBasedOnStrengthLevel();
  }, [lowercase, numbersCheckbox, symbols, upperCase, characterLenght]);

  const displayStrength = displayStrengthLevel();
  return (
    <>
      <div className="password-strength">
        <p className="strength-text">STRENGTH</p>
        <p className="strength-level">{displayStrengthLevel()}</p>
        <div className="strength-bar-container">
          <div
            className={`first-bar ${provideClassNameBasedOnStrengthLevel()}`}
          ></div>
          <div
            className={`second-bar ${provideClassNameBasedOnStrengthLevel()}`}
          ></div>
          <div
            className={`third-bar ${
              displayStrength === "MEDIUM" || displayStrength === "STRONG"
                ? provideClassNameBasedOnStrengthLevel()
                : ""
            }`}
          ></div>
          <div
            className={`fourth-bar ${
              displayStrength === "STRONG"
                ? provideClassNameBasedOnStrengthLevel()
                : ""
            }`}
          ></div>
        </div>
      </div>
      <GeneratePassword />
    </>
  );
};

export default PasswordStrength;
