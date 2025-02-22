import React from 'react'


function CounterApp() {

  const [counter, setCounter] = React.useState(0);

  function btnIncrement () {
    setCounter((prevState) => {
      return prevState + 1;
    })
  }

  function btnDecrement () {
    if(counter > 0) {
      setCounter(prevState => prevState - 1);
    } return;
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-3xl
      mt-3 text-blue-600/100 uppercase'>
        Counter App
      </h1>
      <div className='text-center mt-4'>
        <p>{counter}</p>
      </div>
      <div className='flex justify-center gap-5 mt-5 text-xl'>
        <button
          className='px-2 py-1 rounded bg-blue-500 cursor-pointer'
          onClick={btnIncrement}
        >
          Increment
        </button>
        <button
          className='px-2 py-1 rounded bg-red-500 cursor-pointer'
          onClick={btnDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default CounterApp
