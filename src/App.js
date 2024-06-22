import "./App.css";
import MultiStepForm from "./Components/MultiStepForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MultiStepForm />
      </BrowserRouter>
    </div>
  );
}

export default App;
