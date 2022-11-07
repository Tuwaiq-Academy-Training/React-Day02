import './App.css';

import { useState } from 'react';

// const user = {
//   name: 'John',
//   age: 30,
//   address: {
//     city: 'New York',
//     state: 'NY',
//   },
// };

// const { name, age, address } = user;

// const { city, state } = address;

// console.log(state);

// const colors = ['red', 'green', 'blue'];

// const [firstColor, secondColor] = colors;

// console.log(colors[0]);
// console.log(colors[1]);

// console.log(firstColor);

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onClick = (e) => {
    setCounter(counter + 1);
  };

  console.log('Hey from مطبخ');

  return (
    <div className='container text-center'>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={onClick} type='button' className='btn btn-secondary'>
        Click me to increase the counter
      </button>
    </div>
  );
};

export default Counter;
