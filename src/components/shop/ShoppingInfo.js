import React from 'react'
import { useSelector } from 'react-redux'

const ShoppingInfo = () => {
  const items = useSelector((state) => state.items)
  return (
    <div
      className='card border-info mb-3 mx-auto'
      style={{
        maxWidth: '60%',
        minWidth: '18rem',
        border: 'solid black 1px',
        marginTop: '3%',
        padding: '1%',
      }}
    >
      {!!items && items.length > 0 ? (
        <div>
          <h1>Resumen de tu alquiler:</h1>
          <p>Deseas rentar: {items.length} elementos:</p>
          <ul>
            {items.map((el) => {
              return <li>{el.name} </li>
            })}
          </ul>
          <p>
            Total:{' $'}
            {items.reduce((sum, value) => sum + parseInt(value.price), 0)}
          </p>
        </div>
      ) : (
        <p>No hay elelemntos en el carrito</p>
      )}
    </div>
  )
}

export default ShoppingInfo
