import { useEffect, useState } from "react";
import usePasswordConfigurationStore from "../../stores/PasswordConfigurationStore.store";
import "./GeneratePassword.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const GeneratePassword = () => {
  const { characterLenght, checkboxInformation, setPasswordOutput } =
    usePasswordConfigurationStore((state) => state);

  const [isButtonDisabled, setButtonFlag] = useState<boolean>(false);

  const { upperCase, lowercase, numbersCheckbox, symbols } =
    checkboxInformation;

  function definedCharactersToBeUsedForPassword() {
    const characters = `${upperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXTZ" : ""}${
      lowercase ? "abcdefghiklmnopqrstuvwxyz" : ""
    }${numbersCheckbox ? "0123456789" : ""}${
      symbols ? "!@#$%^&*()-_=+[]{};:'\"\\|,.<>/?`~" : ""
    }`;

    return characters;
  }
  function randomPasswordGenerator() {
    //define a variable consisting alphabets in small and capital letter
    const passwordFormat = definedCharactersToBeUsedForPassword();

    //specify the length for the new string

    let randomstring = "";

    //loop to select a new character in each iteration
    for (let i = 0; i < characterLenght; i++) {
      const rnum = Math.floor(Math.random() * passwordFormat.length);
      randomstring += passwordFormat.substring(rnum, rnum + 1);
    }

    setPasswordOutput(randomstring);
  }

  useEffect(() => {
    const selectedCheckboxes = [lowercase, numbersCheckbox, symbols, upperCase];
    const countSelected = selectedCheckboxes.filter(
      (checkbox) => checkbox
    ).length;

    // Disable the button if fewer than two checkboxes are selected or less than 5 characters
    setButtonFlag(countSelected < 2 || characterLenght < 5);
  }, [
    characterLenght,
    lowercase,
    numbersCheckbox,
    symbols,
    upperCase,
    isButtonDisabled,
  ]);

  return (
    <>
      <div
        className={`generate-password-container ${
          isButtonDisabled ? "disabled" : ""
        }`}
      >
        <button
          className="generate-button"
          onClick={randomPasswordGenerator}
          disabled={isButtonDisabled}
        >
          <span
            style={{ marginLeft: "auto", marginRight: "auto", display: "flex" }}
          >
            GENERATE
            {
              <ArrowForwardIcon
                sx={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "10px",
                }}
              />
            }
          </span>
        </button>
      </div>
    </>
  );
};

export default GeneratePassword;
