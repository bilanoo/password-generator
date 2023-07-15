/* eslint-disable @typescript-eslint/no-unused-vars */
import { Slider, styled } from "@mui/material";
import "./CharacterLenght.css";
import usePasswordConfigurationStore from "../../stores/PasswordConfigurationStore.store";

const CustomSlider = styled(Slider)({
  marginLeft: "10px",
  width: "90%",
  color: "#a3ffae",
  "& .MuiSlider-thumb": {
    backgroundColor: "white",
  },
});

const CharacterLength = () => {
  const { characterLenght, setCharacterLenght } = usePasswordConfigurationStore(
    (state) => state
  );
  function handleChange(
    _event: Event,
    value: number | number[],
    _activeThumb: number
  ): void {
    if (typeof value === "number") {
      setCharacterLenght(value);
    } else if (Array.isArray(value) && value.length > 0) {
      setCharacterLenght(value[0]);
    }
  }

  return (
    <>
      <div className="character-lenght-main-container">
        <div className="character-lenght-text-container">
          <p className="character-lenght-text">
            Character Lenght
            <span className="amount-characters-chosen">{characterLenght}</span>
          </p>
        </div>
        <CustomSlider max={20} onChange={handleChange} min={5} />
      </div>
    </>
  );
};

export default CharacterLength;
