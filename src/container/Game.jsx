import React, { useState } from "react";

function Game() {
  const array = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  const macros = [
    [ [0, 0], [0, 1], [0, 2] ],
    [ [1, 0], [2, 1], [1, 2] ],
    [ [2, 0], [2, 1], [2, 2] ],
    [ [0, 0], [1, 1], [2, 2] ],
    [ [0, 2], [1, 1], [2, 0] ]
  ];

  const [inputs, setInputs] = useState(array);
  const [winner, setWinner] = useState(false);
  const [first, setFirst] = useState(true);

  const allEqual = (arr) => (
    arr.every((val) => arr[0] === val)
  );

  const getChar = () => (
    (first) ? 'X' : 'O'
  )

  function checkWinner(arr = inputs) {
    const result = macros
      .some(([[i0, i1], [i2, i3], [i4, i5]]) => (
        allEqual(
          [arr[i0][i1], arr[i2][i3], arr[i4][i5]]
        )
      ));
    
    const char = getChar();
    setWinner(result && char);
  }

  function handleClick(i0, i1, value) {
    let arr = inputs;
    if (!winner && arr[i0][i1] === " ") {
      arr[i0][i1] = value;
      setInputs(arr);
      checkWinner();
    }
  }

  function click() {
    const val = getChar() ;
    setFirst(!first);
    return val;
  }

  const restart = () => setInputs(array);

  const table = inputs.map((_, i1) => (
    <div key={ i1 }>
      {inputs[i1].map((value, i2) => (
        <input
          key={ i2 }
          type="button"
          value={ value }
          onClick={ () => handleClick(i1, i2, click()) }
        />
      ))}
    </div>
  ));

  if (winner) return (
    <div>
      <h1>{ `${winner} é o vencedor` }</h1>
    </div>
  );

  return (
    <div>
      { table }
      <input type="button" id="reiniciar" value="Reiniciar" onClick={restart} />
    </div>
  );
}

export default Game;
