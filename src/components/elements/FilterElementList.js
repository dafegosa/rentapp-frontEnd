import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import DetailModal from '../home/DetailModal'

const FilterElementList = ({ elements }) => {
  const [show, setShow] = useState(false)
  const [elementInfo, setElementInfo] = useState([])
  const closeModal = () => {
    setShow(false)
  }
  const handleDetail = (el) => {
    setElementInfo(elements.filter((element) => element._id === el))
    setShow(true)
  }
  return (
    <CardColumns
      style={{
        marginTop: '2%',
        width: '80%',
        height: 'auto',
        minHeight: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'flexStart',
      }}
      className='mx-auto'
    >
      {!!elements &&
        elements.length > 0 &&
        elements.map((el, index) => {
          return (
            <React.Fragment key={index}>
              {show ? (
                <DetailModal
                  show={show}
                  closeModal={closeModal}
                  elementInfo={elementInfo}
                />
              ) : null}
              <Card
                className='card border-primary mb-3'
                style={{
                  width: '18rem',
                  maxHeight: '20rem',
                }}
                onClick={() => {
                  handleDetail(el._id, index)
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

export default FilterElementList
