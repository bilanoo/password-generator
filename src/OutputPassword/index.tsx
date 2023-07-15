import { CopyAll } from "@mui/icons-material";
import "./OutputPassword.css";
import usePasswordConfigurationStore from "../stores/PasswordConfigurationStore.store";
// import CopyAllIcon from '@mui/icons-material/CopyAll';
const OutputPassword = () => {
  const { passwordOutput } = usePasswordConfigurationStore((state) => state);
  function handleCopy(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    void navigator.clipboard.writeText(passwordOutput);
  }

  return (
    <>
      <div className="password-output-container">
        <p className="generated-password" id="generated-password">
          {passwordOutput}
        </p>

        <button
          id="copy-password"
          className="copy-password"
          onClick={handleCopy}
          disabled={passwordOutput ? false : true}
        >
          <CopyAll sx={{ position: "relative", fill: "#a3ffae;" }} />
        </button>
      </div>
    </>
  );
};

export default OutputPassword;
