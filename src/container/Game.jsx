import React, { useState } from 'react';

function Game() {
  const array = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]
  const [inputs, setInputs] = useState(array);
  const [player, setPlayer] = useState('P1');

  const handleClick = (i1, i2, value) => {
    let arr = inputs;
    if (arr[i1][i2] === ' ') {
      arr[i1][i2] = value;
      setInputs(arr);
    }
  }

  const click = () => {
    const players = {
      P1: 'X',
      P2: 'O'
    };

    const val = players[player];
    setPlayer(player === 'P1' ? 'P2' : 'P1');
    return val;
  }

  const restart = () => setInputs(array);

  const table = inputs.map((_, i1) => (
  <div key={ i1 }>
    {
      inputs[i1].map((value, i2) => (
        <input key={ i2 } type="button" value={ value } onClick={ () => handleClick(i1, i2, click()) } />
      ))
    }
  </div>
  ));

  return ( 
    <main>
      { table }
      <input type="button" id="reiniciar" value="Reiniciar" onClick={ restart } />
    </main>
  );
}

export default Game;
