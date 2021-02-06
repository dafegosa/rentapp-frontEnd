import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

const MyElementsList = () => {
  const myElements = useSelector((state) => state.myElements)
  console.log('MIS ELEMENTOS DONDE SON => ', myElements)
  return (
    <CardColumns
      style={{
        marginTop: '2%',
        width: '80%',
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'flexStart',
      }}
      className='mx-auto'
    >
      {!!myElements &&
        myElements.length > 0 &&
        myElements.map((el, index) => {
          return (
            <React.Fragment key={index}>
              <Card
                className='card border-primary mb-3'
                style={{
                  width: '16rem',
                }}
                onClick={() => {
                  // handleAlbum(el.id, index)
                }}
              >
                <Card.Body>
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Title>{el.model}</Card.Title>
                  <Card.Title>{el.price}</Card.Title>
                  <Card.Text>
                    <small>{el.description}</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </React.Fragment>
          )
        })}
    </CardColumns>
  )
}

export default MyElementsList
