import React, { useState } from 'react';

import test from './helpersApp';

const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = async () => {
    try {
      const texto = await test();
      console.log(texto);
    } catch (error) {
      // console.error(error);
    }

    setCounter(counter + 1);
  };

  return (
    <div>
      <button
        onClick={increment}
        type="button"
      >
        Click Me
      </button>
      <p>
        You pressed the button
        {' '}
        {counter}
        {' '}
        times.
      </p>
    </div>
  );
};

export default Hello;
