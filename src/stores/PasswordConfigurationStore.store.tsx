import { create } from "zustand";

interface PasswordConfiguration {
  passwordOutput: string;
  setPasswordOutput: (outputToDisplay: string) => void;
  characterLenght: number;
  setCharacterLenght: (amountCharacters: number) => void;
  checkboxInformation: {
    upperCase: boolean;
    lowercase: boolean;
    numbersCheckbox: boolean;
    symbols: boolean;
  };
  tickCheckbox: (checkboxTicked: boolean, boxToTick: string) => void;
}
const usePasswordConfigurationStore = create<PasswordConfiguration>((set) => ({
  passwordOutput: "",
  characterLenght: 0,
  checkboxInformation: {
    upperCase: false,
    lowercase: false,
    numbersCheckbox: false,
    symbols: false,
  },
  setPasswordOutput: (outputToDisplay: string) =>
    set({ passwordOutput: outputToDisplay }),
  tickCheckbox: (tickCheckbox: boolean, boxToTick: string) =>
    set((state) => {
      return {
        checkboxInformation: {
          ...state.checkboxInformation,
          [boxToTick]: tickCheckbox,
        },
      };
    }),
  setCharacterLenght: (amountCharacters: number) =>
    set({ characterLenght: amountCharacters }),
}));

export default usePasswordConfigurationStore;
