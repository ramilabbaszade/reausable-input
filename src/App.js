import React from 'react'
import Input from './components/Input';
import './App.css';

function App() {
  return (
    <div className="App">
      <Input/>
      <Input error/>
      <Input disabled/>
      <Input value="Text"/>
      <Input value="Small" size="sm"/>
      <Input value="Medium" size="md"/>
      <Input fullWidth/>
      <Input multiline row="4" value="Hello World"/>
      <Input helperText="Some more interesting text"/>
      <Input startIcon="phone"/>
      <Input endIcon="lock"/>
    </div>
  );
}

export default App;
