import React, { useRef, useState } from 'react';
import { generatePassword } from '../utils/form.utils';
import './Form.css';

export default function Form() {
  const numberRef = useRef();
  const symbolRef = useRef();

  const lengthRef = useRef();

  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPassword = generatePassword(
      numberRef.current.checked,
      symbolRef.current.checked,
      lengthRef.current.value || 6
    );

    setPassword(newPassword);
  };

  return (
    <form className='password_form' onSubmit={handleSubmit}>
      <h2>Gerar uma senha segura</h2>
      <div className='password_inputs'>
        <div className='flex'>
          <label htmlFor='password-length'>Quantidade de caracteres</label>
          <input
            type='number'
            max={72}
            min={6}
            name='password-length'
            style={{ maxWidth: '8ch' }}
            ref={lengthRef}
          />
        </div>
        <div className='flex'>
          <label htmlFor='numbers'>Incluir números?</label>
          <input type='checkbox' name='numbers' ref={numberRef} />
        </div>
        <div className='flex'>
          <label htmlFor='symbols'>Incluir símbolos?</label>{' '}
          <input type='checkbox' name='symbols' ref={symbolRef} />
        </div>
        <button className='btn'>Generate</button>
        <h4 className='password_text'>Sua senha: {password}</h4>
      </div>
    </form>
  );
}
