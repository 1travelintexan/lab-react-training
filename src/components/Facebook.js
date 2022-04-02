import React from 'react';
import { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
  //make an array of all countries that are unique. Meaning no duplicates
  let allCountries = [];
  profiles.forEach((elem) => {
    if (allCountries.indexOf(elem.country) === -1) {
      allCountries.push(elem.country);
    }
  });

  const [people, setPeople] = useState(profiles);

  function handleCountry(countryName) {
    for (let i = 0; i < people.length; i++) {
      let currentPerson = people[i];
      if (currentPerson.country === countryName) {
        currentPerson.style = 'aqua';
        let newPeople = [...people];
        setPeople(newPeople);
      }
    }
  }

  return (
    <>
      <div>
        {allCountries.map((elem, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                handleCountry(elem);
              }}
            >
              {elem}
            </button>
          );
        })}
      </div>
      {people.map((elem, i) => {
        return (
          <div key={i} className="boxes" style={{ background: elem.style }}>
            <div>
              <img src={elem.img} alt="selfie" style={{ height: '100px' }} />
            </div>
            <div>
              <div className="fbContainer">
                <h4>First Name:</h4>
                <h6>{elem.firstName}</h6>
              </div>
              <div className="fbContainer">
                <h4>Last Name:</h4>
                <h6>{elem.lastName}</h6>
              </div>
              <div className="fbContainer">
                <h4>Country:</h4>
                <h6>{elem.country}</h6>
              </div>
              <div className="fbContainer">
                <h4>Type:</h4>
                {elem.isStudent ? <h6>Student</h6> : <h6>Teacher</h6>}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Facebook;
