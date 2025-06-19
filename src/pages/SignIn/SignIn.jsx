import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = ({setUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Sign in successful:', data);
        alert('Sign in successful');

        //เก็บ user info ไว้ localStorage (หรือ context)
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
        navigate('/'); 
      } else {
        alert(data.message || 'Sign in failed');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      alert('Error connecting to server');
    }
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="/signUp">Sign Up</a></p>
    </div>
  );
};

export default SignIn;
