import React, { useState } from 'react'
import { useParams, useLocation, useHistory } from 'react-router'

const Params = () => {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()

  console.log("Los params", params)
  console.log("La location", location)
  console.log("La history", history)

  return (
    <div>
      <p>El parametro es {params.name}, prueba a cambiarlo en la URL</p>
      <p>Mira en la consola para ver los params, location y history</p>
    </div>
  )
}


export default Params
