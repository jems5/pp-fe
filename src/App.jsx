import "./App.css";
import InputField from "./components/inputField";
import TextArea from "./components/textArea";
import Button from "./components/button";

function App() {
  return (
    <div class="main-container">
      <div className="action-container">
        <div class="top-container">
          <h1>Find Solutions</h1>
          <p>Discover challenges people face & help solve them</p>
        </div>
        <div class="input-container">
          <p>
            Problem Description <span class="red-normal">*</span>
          </p>
          <TextArea className="margin-btm" />
          <p>Related Brands (Optional)</p>
          <InputField />
        </div>
        <Button />
      </div>
    </div>
  );
}

export default App;
