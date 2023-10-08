 
import React, { useState } from 'react';
import './passwordgenerator.css'; // Replace with the actual path to your CSS file


const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let validChars = lowercaseChars;

    if (includeUppercase) {
      validChars += uppercaseChars;
    }

    if (includeNumbers) {
      validChars += numberChars;
    }

    if (includeSymbols) {
      validChars += symbolChars;
    }

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars.charAt(randomIndex);
    }

    setPassword(newPassword);
  };

  return (
    <> <div className="head"><h1>Password Generator</h1></div>
    <div className="whole"> 
    <div> 
      <div>
        <label>Password Length:</label>
        <input className='len'
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Include Uppercase:</label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </div>
      <div className='num'>
        <label>Include Numbers:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </div>
      <div className='sym'>
        <label>Include Symbols:</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
      </div>
      <button className='generate' onClick={generatePassword}>Generate Password</button>
      <div className='pass'>
        <label>Password:</label>
        <input className='pas' type="text" value={password} readOnly />
      </div>
    </div>
    </div>
    </>
  );
};

export default PasswordGenerator;
 