import React, { useState, useEffect } from 'react'

const ComponentDidMount = () => {
  const [isMounted, setIsMounted] = useState(false)

  //el array vacío hace que se comporte como un componentDidMount
  useEffect(() => {

    // setTimeout(() => {
    //   setIsMounted(true)
    // }, 5000);

  }, [])

  useEffect(() => {

    console.log("yo también soy el componentDidMount")

  }, [])

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])


  return (
    <div>
      <p>5 segundos después del montaje aparecera un texto abajo</p>
      {isMounted && <p>Ya han pasado 5 segundos</p>}
    </div>
  )
}

export default ComponentDidMount
