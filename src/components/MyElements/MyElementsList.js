import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

const MyElementsList = () => {
  const myElements = useSelector((state) => state.myElements)
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
                  <Card.Img variant='top' src={el.img1} alt='' />
                  <Card.Title style={{ textAlign: 'center' }}>
                    {el.name}
                  </Card.Title>
                  <Card.Title style={{ textAlign: 'center' }}>
                    {el.model}
                  </Card.Title>
                </Card.Body>
              </Card>
            </React.Fragment>
          )
        })}
    </CardColumns>
  )
}

export default MyElementsList
