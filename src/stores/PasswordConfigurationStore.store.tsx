import { create } from "zustand";

interface PasswordConfiguration {
  characterLenght: number | number[];
  setCharacterLenght: (amountCharacters: number | number[]) => void;
  checkboxInformation: {
    upperCase: boolean;
    lowercase: boolean;
    numbersCheckbox: boolean;
    symbols: boolean;
  };
  tickCheckbox: (checkboxTicked: boolean, boxToTick: string) => void;
}
const usePasswordConfigurationStore = create<PasswordConfiguration>((set) => ({
  characterLenght: 0,
  checkboxInformation: {
    upperCase: false,
    lowercase: false,
    numbersCheckbox: false,
    symbols: false,
  },
  tickCheckbox: (tickCheckbox: boolean, boxToTick: string) =>
    set((state) => {
      return {
        checkboxInformation: {
          ...state.checkboxInformation,
          [boxToTick]: tickCheckbox,
        },
      };
    }),
  setCharacterLenght: (amountCharacters: number | number[]) =>
    set({ characterLenght: amountCharacters }),
}));

export default usePasswordConfigurationStore;
