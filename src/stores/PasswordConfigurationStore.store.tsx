import { create } from "zustand";

interface PasswordConfiguration {
  characterLenght: number | number[];
  setCharacterLenght: (amountCharacters: number | number[]) => void;
}
const usePasswordConfigurationStore = create<PasswordConfiguration>((set) => ({
  characterLenght: 0,
  setCharacterLenght: (amountCharacters: number | number[]) =>
    set({ characterLenght: amountCharacters }),
}));

export default usePasswordConfigurationStore;
