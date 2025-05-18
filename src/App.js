import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="App">
      <h1>{isRegistered ? "Welcome back!" : "Create an account"}</h1>

      <Form isRegistered={isRegistered} />

      <p style={{ marginTop: 12 }}>
        {isRegistered ? "Need an account?" : "Already registered?"}{" "}
        <button type="button" onClick={() => setIsRegistered((p) => !p)}>
          {isRegistered ? "Register" : "Login"} instead
        </button>
      </p>
    </div>
  );
}

export default App;