import "./PasswordStrength.css";

const PasswordStrength = () => {
  return (
    <>
      <div className="password-strength">
        <p className="strength-text">STRENGTH</p>
        <p className="strength-level">MEDIUM</p>
        <div className="strength-bar-container">
          <div className="first-bar"></div>
          <div className="second-bar"></div>
          <div className="third-bar"></div>
          <div className="fourth-bar"></div>
        </div>
      </div>
    </>
  );
};

export default PasswordStrength;
