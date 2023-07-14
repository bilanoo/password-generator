import usePasswordConfigurationStore from "../../stores/PasswordConfigurationStore.store";
import "./CheckboxPasswordIntensity.css";
import GenericCheckbox from "./GenericCheckbox";

const CheckboxPasswordIntensity = () => {
  const { checkboxInformation } = usePasswordConfigurationStore(
    (state) => state
  );

  return (
    <>
      <div className="checkbox-container">
        <form className="form-container">
          <GenericCheckbox
            textContent="Include Uppercase Letters"
            checked={checkboxInformation?.upperCase}
            name="upperCase"
          />
          <GenericCheckbox
            textContent="Include Lowercase Letters"
            checked={checkboxInformation.lowercase}
            name={"lowercase"}
          />
          <GenericCheckbox
            textContent="Include Numbers"
            checked={checkboxInformation.numbersCheckbox}
            name="numbersCheckbox"
          />
          <GenericCheckbox
            textContent="Include Symbols"
            checked={checkboxInformation.symbols}
            name="symbols"
          />
        </form>
      </div>
    </>
  );
};

export default CheckboxPasswordIntensity;

// const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
