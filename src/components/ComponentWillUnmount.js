import React, { useEffect } from 'react'

const ComponentWillUnmount = () => {

  useEffect(() => {

    //el return del efecto se lanza cuando el componente se desmonta
    return () => {
      alert("El component se está desmontando")
    }
  }, [])

  return (
    <div>
      <p>Yo no pinto nada.</p>
    </div>
  )
}

export default ComponentWillUnmount
