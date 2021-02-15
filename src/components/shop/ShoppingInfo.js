import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const PayButton = styled.button`
  background: #74e893;
  color: white;
  :hover {
    background: #4ef279;
    color: #545955;
  }
`

const ShoppingInfo = () => {
  const items = useSelector((state) => state.items)
  const [days, setDays] = useState(1)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  })
  useEffect(() => {
    if (days < 1) setDays(1)
    if (days > 30) setDays(30)
  }, [days])

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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 className='mx-auto'>Resumen de tu alquiler:</h1>
          </div>
          <p>Deseas rentar: {items.length} elementos:</p>
          <ul>
            {items.map((el) => {
              return <li>{el.name} </li>
            })}
          </ul>
          <p>
            <strong>
              Total:{' $'}
              {formatter.format(
                items.reduce((sum, value) => sum + parseInt(value.price), 0) *
                  days
              )}
            </strong>
          </p>
          <div style={{ display: 'flex' }}>
            <p style={{ paddingTop: '0.5rem' }}>Días de renta: </p>
            <div
              style={{
                padding: '0',
                margin: '0',
                paddingLeft: '2px',
                display: 'flex',
              }}
            >
              <button
                type='button'
                style={{
                  padding: '0',
                  margin: '0rem 1rem ',
                  paddingLeft: '2px',
                }}
                className='btn btn-link'
                onClick={() => setDays(days - 1)}
              >
                <h1 style={{ padding: '0', margin: '0', paddingLeft: '2px' }}>
                  {' '}
                  -{' '}
                </h1>
              </button>

              <h2
                style={{
                  padding: '0',
                  margin: '0rem 1rem ',
                  paddingLeft: '2px',
                }}
              >
                {' '}
                {days}
              </h2>
              <button
                type='button'
                style={{
                  padding: '0',
                  margin: '0rem 1rem ',
                  paddingLeft: '2px',
                  paddingButton: '1rem',
                }}
                className='btn btn-link'
                onClick={() => setDays(days + 1)}
              >
                <h2
                  style={{
                    padding: '0',
                    margin: '0rem',
                    paddingLeft: '2px',
                  }}
                >
                  {' '}
                  +{' '}
                </h2>
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p className='text-warning mx-auto'>
              Los elementos los recibirás un día después de hecha la solicitud
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PayButton className='btn mx-auto'> Pagar </PayButton>
          </div>
        </div>
      ) : (
        <p>No hay elelemntos en el carrito</p>
      )}
    </div>
  )
}

export default ShoppingInfo
