import React, { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Connect with your API to register user
    console.log('Signup data:', { name, email, password });
  };

  return (
    <div style={{fontFamily:'Times-new-Roman', maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div style={{ marginBottom: '15px',fontFamily:'Times-new-Roman', }}>
          <label>Name:</label><br />
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ fwidth: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #aaa' }}
          />
        </div>
        <div style={{ marginBottom: '15px',fontFamily:'Times-new-Roman',}}>
          <label>Email:</label><br />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100', padding: '8px', borderRadius: '4px', border: '1px solid #aaa' }}
          />
        </div>
        <div style={{ marginBottom: '15px',fontFamily:'Times-new-Roman', }}>
          <label>Password:</label><br />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #aaa' }}
          />
        </div>
        <button type="submit" style={{ fontFamily:'Times-new-Roman',padding: '10px 20px', border: 'none', backgroundColor: 'green', color: 'white', borderRadius: '4px' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;

