import "./App.css";
import OutputPassword from "./OutputPassword";
import PasswordConfiguration from "./PasswordConfiguration";

function App() {
  return (
    <>
      <p style={{ fontSize: "19px" }}>Password Generator</p>

      <OutputPassword />
      <PasswordConfiguration />
    </>
  );
}

export default App;
