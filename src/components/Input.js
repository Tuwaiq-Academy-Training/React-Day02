import React from 'react';

const Input = ({ value, updateValue, name, type }) => {
  return (
    <div className='mb-3'>
      <label className='form-label'>{name}</label>
      <input
        onChange={(e) => updateValue(e.target.value)}
        value={value}
        type={type}
        className='form-control'
      />
    </div>
  );
};

export default Input;
