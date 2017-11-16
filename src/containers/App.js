import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactCursorPosition from 'react-cursor-position';
import Home from './Home';



class App extends Component {
  render() {
  return (

  	<ReactCursorPosition className="example">
      <Home/>
        <PositionLabel />
      </ReactCursorPosition>
    
    );
 }
}


const PositionLabel = (props) => {
  const {
    
    elementDimensions: {
      width = 0,
      height = 0
    } = {},
    position: {
      x = 0,
      y = 0
    } = {}
  } = props;

return(
      <div className="example__label">
      {`x: ${x}`}<br />
      {`y: ${y}`}<br />
    </div>
  );
  
    
};




export default App;
