import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';



function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAccountCreated) {
      const timer = setTimeout(() => {
        navigate('/signin');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAccountCreated, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      setErrorMessage('An account with this username already exists.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const user = { username, password };
    localStorage.setItem(username, JSON.stringify(user));
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('Account created successfully!');
    setIsAccountCreated(true);
  };

  return (
    <UserForm 
    formType="Sign Up" 
    onSubmit={handleSignUp} 
    error={errorMessage}
  />
  );
}

export default SignUp;
