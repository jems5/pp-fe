import "./App.css";
import InputField from "./components/inputField";
import TextArea from "./components/textArea";

function App() {
  return (
    <>
      <p>
        Problem Description<span>*</span>
      </p>
      <TextArea />
      <p>Related Brands (Optional)</p>
      <InputField />
    </>
  );
}

export default App;
