import React, { useState } from 'react'

//useState normal
const UseState = () => {
  //isRed define un state, setIsRed es una función que actualiza isRed
  //false es su valor inicial.
  //equivalente a : this.state = {isRed: false}
  const [isRed, setIsRed] = useState(false)
  const [text, setText] = useState("No he sido clickado")

  const handleClick = () => {
    setIsRed(!isRed)
    setText("He sido clickado")
  }

  return (
    <button onClick={handleClick} style={{ backgroundColor: isRed ? "red" : "green" }}>{text}</button>
  )
}

//useState usando el valor previo
const UseStatePrev = () => {
  const [isRed, setIsRed] = useState(false)

  //setIsRed puede recibir una función cuyo argumento es el 
  //valor anterior del estado. Se usado cuando el nuevo estado 
  //depende del previo
  const changeColor = () => setIsRed((prevState) => !prevState)

  return (
    <button onClick={changeColor} style={{ backgroundColor: isRed ? "red" : "green" }}>Un botón</button>
  )
}

export default UseState
