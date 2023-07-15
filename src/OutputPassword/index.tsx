import { CopyAll } from "@mui/icons-material";
import "./OutputPassword.css";
import usePasswordConfigurationStore from "../stores/PasswordConfigurationStore.store";
// import CopyAllIcon from '@mui/icons-material/CopyAll';
const OutputPassword = () => {
  const { passwordOutput } = usePasswordConfigurationStore((state) => state);
  return (
    <>
      <div className="password-output-container">
        <p className="generated-password" id="generated-password">
          {passwordOutput}
        </p>

        <button id="copy-password" className="copy-password">
          <CopyAll sx={{ position: "relative", fill: "#a3ffae;" }} />
        </button>
      </div>
    </>
  );
};

export default OutputPassword;
