import React from 'react';
import { useState } from 'react';
import blank from '../img/dice-empty.png';
import one from '../img/dice1.png';
import two from '../img/dice2.png';
import three from '../img/dice3.png';
import four from '../img/dice4.png';
import five from '../img/dice5.png';
import six from '../img/dice6.png';

function Dice() {
  const [currentDice, setCurrentDice] = useState(blank);
  const allDice = [one, two, three, four, five, six];
  let randomDiceIndex = Math.floor(Math.random() * allDice.length);

  const rollDice = () => {
    setCurrentDice(blank);
    setTimeout(() => {
      setCurrentDice(allDice[randomDiceIndex]);
    }, 1000);
  };
  return (
    <div>
      <img
        onClick={() => {
          rollDice();
        }}
        style={{ height: '100px' }}
        src={currentDice}
        alt="dice"
      />
    </div>
  );
}

export default Dice;
