import React, { Component, useState } from 'react';


function Game() {
  const [inputs, setInputs] = useState("-")
  return ( 
    <main>
      <div>
        <input type="button" value="_" />
        <input type="button" value="_" /> 
        <input type="button" value="_" />
      </div>
      <div>
        <input type="button" value="_"/>
        <input type="button" value="_"/>
        <input type="button" value="_"/>
      </div>
      <div>
        <input type="button" value="_"/>
        <input type="button" value="_"/>
        <input type="button" value="_"/>
      </div>
      <input type="button" value="Reiniciar" id="reiniciar" />
    </main>

  );
}

export default Game;