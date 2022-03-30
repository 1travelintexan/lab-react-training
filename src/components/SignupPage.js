import React from 'react';
import { useState } from 'react';

function SignupPage() {
  const [state, setState] = useState({
    email: '',
    password: '',
    lang: 'English',
  });
  const [greeting, setGreeting] = useState([]);

  function handleChange(event) {
    const currentValue = event.target.value;
    setState({
      ...state,
      [event.target.name]: currentValue,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let language = event.target.lang.value;
    let emailAddress = event.target.email.value;
    let greetingLanguage = '';
    let emailGreeting = `Your email address is: ${emailAddress} `;
    let emailCorrectGreeting = 'Your email is correct';

    language === 'English'
      ? (greetingLanguage = 'Hello')
      : language === 'German'
      ? (greetingLanguage = 'Hallo')
      : (greetingLanguage = 'Bonjour');
    setGreeting([greetingLanguage, emailGreeting, emailCorrectGreeting]);
  }
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h3>Email</h3>
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <h3>Password</h3>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <h3>Nationality</h3>
        <select name="lang" value={state.lang} onChange={handleChange}>
          <option>English</option>
          <option>German</option>
          <option>France</option>
        </select>
        <button>Submit</button>
      </form>
      {greeting
        ? greeting.map((elem, i) => {
            return (
              <div key={elem + i}>
                <p>{elem}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default SignupPage;
