// App.js
import React from "react";
import FetchData from "./FetchData";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
        <FetchData></FetchData>
        <ContactForm></ContactForm>
      </header>
    </div>
  );
}

export default App;
