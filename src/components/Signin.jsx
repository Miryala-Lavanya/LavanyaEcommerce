import React, { useState } from 'react';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = (e) => {
    e.preventDefault();
    // Here you can connect with your API or authentication logic
    console.log('Signin data:', { email, password });
  };

  return (
    <div style={{ fontFamily:'Times-new-Roman',maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSignin}>
        <div style={{ marginBottom: '15px',fontFamily:'Times-new-Roman' }}>
          <label>Email:</label><br />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #aaa' }}
          />
        </div>
        <div style={{ marginBottom: '15px' ,fontFamily:'Times-new-Roman',}}>
          <label>Password:</label><br />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #aaa' }}
          />
        </div>
        <button type="submit" style={{fontFamily:'Times-new-Roman', padding: '10px 20px', border: 'none', backgroundColor: 'blue', color: 'white', borderRadius: '4px' }}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Signin;
