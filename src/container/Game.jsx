import React, { useState, useEffect } from 'react';

function Game() {
  const [inputs, setInputs] = useState([
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_'],
  ]);

  // useEffect(null, [inputs]);

  const handleClick = (i1, i2, value) => {
    let arr = inputs;
    console.log(arr);
    if (arr[i1][i2] === '_') {
      arr[i1][i2] = value;
      setInputs(arr);
    }
  }

  const table = inputs.map((_, i1) => (
  <div>
    {
      inputs[i1].map((value, i2) => (
        <input type="text" value={ value } onClick={ () => handleClick(i1, i2, value) } />
      ))
    }
  </div>
  ));

  return ( 
    <main>
      { table }
      <input type="button" value="Reiniciar" />
    </main>

  );
}

export default Game;
