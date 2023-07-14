import "./GeneratePassword.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const GeneratePassword = () => {
  return (
    <>
      <div className="generate-password-container">
        <button className="generate-button">
          GENERATE
          {
            <ArrowForwardIcon
              sx={{
                marginTop: "auto",
                marginBottom: "auto",
                alignItems: "center",
              }}
            />
          }
        </button>
      </div>
    </>
  );
};

export default GeneratePassword;
