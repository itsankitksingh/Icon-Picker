import React from 'react';
import IconPicker from './components/IconPicker';
import './index.css'
function App() {
  return (
    <div className="App">
      <h1>Icon Picker</h1>
      <IconPicker 
        rowsInOnePage={5} 
        columnsInOnePage={8} 
        iconHeight={50} 
        iconWidth={50} 
      />
    </div>
  );
}

export default App;
