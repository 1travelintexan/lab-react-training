import React from 'react';

function NumbersTable({ limit }) {
  const boxArray = [];
  for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
      boxArray.push(
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
            border: '2px solid black',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
          }}
        >
          {i}
        </div>
      );
    } else {
      boxArray.push(
        <div
          style={{
            width: '100px',
            height: '100px',
            border: '2px solid black',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
          }}
        >
          {i}
        </div>
      );
    }
  }
  return (
    <div className="boxes">
      {boxArray.map((elem, i) => {
        <h6 key={i}>elem</h6>;
      })}
    </div>
  );
}

export default NumbersTable;
