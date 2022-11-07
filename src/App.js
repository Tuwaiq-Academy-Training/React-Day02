import './App.css';
import { useState } from 'react';
import Input from './components/Input';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    if (username.length < 6) {
      alert('Username must be at least 6 characters');
      return;
    }
    if (password !== password2) {
      alert('Passwords do not match');
      return;
    }
    alert('Form submitted successfully');
  };

  console.log('Hey from مطبخ');

  return (
    <div className='container '>
      <h1>Register Form</h1>
      <form onSubmit={submitForm} className='mt-5'>
        <Input
          value={username}
          updateValue={setUsername}
          type='text'
          name={'Username'}
        />
        <Input
          value={password}
          updateValue={setPassword}
          type='password'
          name={'Password'}
        />
        <Input
          value={password2}
          updateValue={setPassword2}
          type='password'
          name={'Confirm Password'}
        />
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
