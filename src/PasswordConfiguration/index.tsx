import PasswordStrength from "../PasswordStrength";
import CharacterLength from "./CharacterLength";
import CheckboxPasswordIntensity from "./CheckboxPasswordIntensity";
import "./PasswordConfiguration.css";

const PasswordConfiguration = () => {
  return (
    <>
      <div className="password-configuration-container">
        <CharacterLength />
        <CheckboxPasswordIntensity />
        <PasswordStrength />
      </div>
    </>
  );
};

export default PasswordConfiguration;
