// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';

const generatePassword = (length = 9) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*().';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
};

const App = () => {
    const [password, setPassword] = useState('');

    useEffect(() => {
        const updatePassword = () => {
            setPassword(generatePassword());
        };
        
        updatePassword(); 
        const intervalId = setInterval(updatePassword, 5000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', background:'black',color: 'white' }}>
            <h1>Random Passcode Generator</h1>
            <p style={{ fontSize: '24px', fontFamily: 'monospace' }}>{password}</p>
        </div>
    );
};

export default App;
