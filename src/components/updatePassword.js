
import React, { useState, useEffect } from 'react';
import { generatePassword } from './random';

const PasswordGenerator = () => {
  const [password, setPassword] = useState(generatePassword());

  useEffect(() => {
    const interval = setInterval(() => {
      setPassword(generatePassword());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div style={styles.container}>
      <h1>Random Password Generator</h1>
      <div style={styles.passwordBox}>
        <p style={styles.password}>{password}</p>
      </div>
      <p>The password will change every 30 seconds</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif'
  },
  passwordBox: {
    padding: '10px',
    border: '2px solid #000',
    borderRadius: '5px',
    backgroundColor: '#fff'
  },
  password: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333'
  }
};

export default PasswordGenerator;
