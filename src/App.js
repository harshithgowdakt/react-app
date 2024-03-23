// App.js
import React from "react";
import FetchData from "./FetchData";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FetchData></FetchData>
        <ContactForm></ContactForm>
      </header>
    </div>
  );
}

export default App;
