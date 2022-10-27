// import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
// import SwitchState from "./components/SwitchState";

function App() {
  return (
    <div className="d-flex align-content-center justify-content-center">
      <div className="meme-container">
        <Header />
        <div>
          <Form />
        </div>
      </div>
      {/* <SwitchState /> */}
    </div>
  );
}

export default App;
