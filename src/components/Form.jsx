import React from 'react';

// Utility functions
import { generatePassword } from '../utils/form.utils';

export default function Form() {
  console.log(generatePassword());

  return (
    <form className='password_form'>
      <h2>Generate a secure password</h2>
      <div className='password_inputs'>
        <h4 className='password_text'>Lorem ipsum dolor sit.</h4>
        <div className='flex'>
          <label htmlFor='password-length'></label>
          <input
            type='number'
            max={72}
            min={6}
            name='password-length'
            style={{ maxWidth: '8ch' }}
            id=''
          />
        </div>
        <div className='flex'>
          <label htmlFor='numbers'>Include numbers?</label>
          <input type='checkbox' name='numbers' id='' />
        </div>
        <div className='flex'>
          <label htmlFor='symbols'>Include symbols?</label>
          <input type='checkbox' name='symbols' id='' />
        </div>
        <button className='btn'>Generate</button>
      </div>
    </form>
  );
}
