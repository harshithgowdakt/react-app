import React from "react";
import FetchData from "./FetchData";
import ContactForm from "./ContactForm";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <div className="App">
      <ContactForm className="ContactForm"></ContactForm>
      <FetchData className="FetchData"></FetchData>
    </div>
  );
}

export default App;
