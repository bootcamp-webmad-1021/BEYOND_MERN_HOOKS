import React, { useState, useEffect } from 'react'

const ComponentDidUpdate = () => {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => setCounter(counter + 1)

  //se ejecuta la función tras cada cambio en counter
  useEffect(() => {

    console.log("Detecto un cambio en counter")

  }, [counter])

  return (
    <div>
      <p>{counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  )
}

export default ComponentDidUpdate
