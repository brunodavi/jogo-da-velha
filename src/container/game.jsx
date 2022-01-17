import React, { Component, useState, useEffect } from 'react';


function Game() {
  const [jogador, setJogador] = useState(true)
  const [tabuleiro, setTabuleiro] = useState([['-','-','-'],['-','-','-'],['-','-','-']])

  const restart = () => {
    setJogador(true)
    window.location.reload()
  }

  const suavez = ({target}) => {
    let casa = document.getElementById(target.id).innerText
    if (casa === '-') {
      jogador ? casa = "X" 
      : casa = "O"
      let newTabuleiro = tabuleiro
      newTabuleiro[Number(target.id[0])][Number(target.id[3])] = casa
      setTabuleiro(newTabuleiro)
      setJogador(!jogador)   
    }
  }


  return ( 
    <main>
    {      
      tabuleiro.map((linha, indexL) => (
        <div key={indexL}>
          {linha.map((coluna, indexC) =>(
            <button key={`${indexL}, ${indexC}`} id={`${indexL}, ${indexC}`} type="button" onClick={suavez}>
              {coluna}
            </button>
          ))}
        </div>
      ))   
    }
      <button type="button" id="reiniciar" onClick={restart}>
        Reiniciar
      </button>
    </main>

  );
}

export default Game;