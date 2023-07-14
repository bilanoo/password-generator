import { CopyAll } from "@mui/icons-material";
import "./OutputPassword.css";
// import CopyAllIcon from '@mui/icons-material/CopyAll';
const OutputPassword = () => {
  return (
    <>
      <div className="password-output-container">
        <p className="generated-password" id="generated-password">
          PTx1f5DaFX
        </p>

        <button id="copy-password" className="copy-password">
          <CopyAll sx={{ position: "relative", fill: "#a3ffae;" }} />
        </button>
      </div>
    </>
  );
};

export default OutputPassword;
