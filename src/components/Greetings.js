import React from 'react';

function Greetings(props) {
  let greeting = '';
  props.lang === 'de'
    ? (greeting = 'Hallo')
    : props.lang === 'es'
    ? (greeting = 'Hola')
    : props.lang === 'fr'
    ? (greeting = 'Bonjour')
    : (greeting = 'Hello');
  return (
    <div className="card">
      <h1>
        {greeting} {props.children}
      </h1>
    </div>
  );
}

export default Greetings;
