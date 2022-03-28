import React from 'react';
import visa from '../visa.png';
import MasterCard from '../mastercard.png';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  let style = {
    backgroundColor: bgColor,
    color: color,
  };
  let ccNumber =
    'X'.repeat(4) +
    '    ' +
    'X'.repeat(4) +
    '    ' +
    'X'.repeat(4) +
    '    ' +
    number.slice(-4);

  let image = type === 'Visa' ? visa : MasterCard;
  return (
    <div className="credit-card" style={style}>
      <div className="flex-end">
        <img className="ccLogo" src={image} alt="visa" />
      </div>
      <h2 className="ccNumber">{ccNumber}</h2>
      <div className="ccWords">
        <div className="flex">
          <p>
            Expires:{expirationMonth}/{expirationYear}
          </p>
          <h4>{bank}</h4>
        </div>
        <div>
          <p className="owner">{owner}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
