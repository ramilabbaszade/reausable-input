import React from "react";
import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Input />
      <Input error />
      <Input disabled />
      <Input helperText="Some more interesting text" />
      <Input startIcon="phone" />
      <Input endIcon="lock" />
      <Input value="Text" />
      <div style={{display:'flex',gap:'3rem'}}>
        <Input value="Small" size="sm" />
        <Input value="Medium" size="md" />
      </div>
      <Input fullWidth />
      <Input multiline row="4" value="Hello World" />
    </div>
  );
}

export default App;
