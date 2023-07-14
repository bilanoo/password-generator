import usePasswordConfigurationStore from "../../../stores/PasswordConfigurationStore.store";
import "./GenericCheckbox.css";

interface GenericCheckboxProps {
  textContent: string;
  checked: boolean;
  name: string;
}
const GenericCheckbox = ({
  textContent,
  checked,
  name,
}: GenericCheckboxProps) => {
  const { tickCheckbox } = usePasswordConfigurationStore((state) => state);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, checked } = event.currentTarget;
    tickCheckbox(checked, name);
  }

  return (
    <>
      <label style={{ fontSize: "19px" }}>
        <input
          type="checkbox"
          className="password-checkbox"
          checked={checked}
          onChange={handleChange}
          name={name}
        />
        {textContent}
      </label>
    </>
  );
};

export default GenericCheckbox;
