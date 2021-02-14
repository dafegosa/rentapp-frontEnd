import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setShoppingCart } from '../../actions/results'
import Login from './Login'
const DetailModal = ({ show, closeModal, elementInfo }) => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items)
  const token = localStorage.getItem('token')
  const element = elementInfo[0]
  const [bigPhotoNum, setBigPhotoNum] = useState(element.img1)
  const [smallPhotoA, setSmallPhotoA] = useState(element.img2)
  const [smallPhotoB, setSmallPhotoB] = useState(element.img3)
  const [inCar, setInCar] = useState(false)
  const [log, setLog] = useState(false)
  const login = () => {
    setLog(!log)
  }
  useEffect(() => {
    const carElement = items.filter((el) => el._id === element._id)
    console.log(carElement)
    if (carElement.length > 0) setInCar(true)
  }, [])
  const handleShoppingCard = () => {
    dispatch(setShoppingCart(element))
    closeModal()
  }
  return (
    <Modal
      show={show}
      onHide={() => closeModal()}
      dialogClassName='modal-90w'
      aria-labelledby='example-custom-modal-styling-title'
      style={{ background: '#74e893' }}
    >
      <Modal.Header closeButton>
        <Modal.Title id='example-custom-modal-styling-title'>
          {element.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={bigPhotoNum} style={{ maxWidth: '95%' }} className='center' />
        <img
          src={smallPhotoA}
          style={{ maxWidth: '20%' }}
          className='center'
          onClick={() => {
            if (bigPhotoNum === element.img1 && smallPhotoB === element.img3) {
              setBigPhotoNum(element.img2)
              setSmallPhotoA(element.img1)
            }
            if (bigPhotoNum === element.img1 && smallPhotoB === element.img2) {
              setBigPhotoNum(element.img3)
              setSmallPhotoA(element.img1)
            }
            if (bigPhotoNum === element.img2 && smallPhotoB === element.img3) {
              setBigPhotoNum(element.img1)
              setSmallPhotoA(element.img2)
            }
            if (bigPhotoNum === element.img2 && smallPhotoB === element.img1) {
              setBigPhotoNum(element.img3)
              setSmallPhotoA(element.img2)
            }
            if (bigPhotoNum === element.img3 && smallPhotoB === element.img2) {
              setBigPhotoNum(element.img1)
              setSmallPhotoA(element.img3)
            }
            if (bigPhotoNum === element.img3 && smallPhotoB === element.img1) {
              setBigPhotoNum(element.img2)
              setSmallPhotoA(element.img3)
            }
          }}
        />
        <img
          src={smallPhotoB}
          style={{ maxWidth: '20%' }}
          className='center'
          onClick={() => {
            if (bigPhotoNum === element.img1 && smallPhotoA === element.img3) {
              setBigPhotoNum(element.img2)
              setSmallPhotoB(element.img1)
            }
            if (bigPhotoNum === element.img1 && smallPhotoA === element.img2) {
              setBigPhotoNum(element.img3)
              setSmallPhotoB(element.img1)
            }
            if (bigPhotoNum === element.img2 && smallPhotoA === element.img3) {
              setBigPhotoNum(element.img1)
              setSmallPhotoB(element.img2)
            }
            if (bigPhotoNum === element.img2 && smallPhotoA === element.img1) {
              setBigPhotoNum(element.img3)
              setSmallPhotoB(element.img2)
            }
            if (bigPhotoNum === element.img3 && smallPhotoA === element.img2) {
              setBigPhotoNum(element.img1)
              setSmallPhotoB(element.img3)
            }
            if (bigPhotoNum === element.img3 && smallPhotoA === element.img1) {
              setBigPhotoNum(element.img2)
              setSmallPhotoB(element.img3)
            }
          }}
        />
        <p>
          <strong>Costo alquiler día: </strong>${element.price}
        </p>
        <p>{element.description}</p>
      </Modal.Body>
      <Modal.Footer>
        {inCar ? (
          <p>Item en carrito de compras</p>
        ) : (
          <Button
            type='button'
            className='btn btn-secondary'
            onClick={token ? () => handleShoppingCard() : () => login()}
          >
            {token ? 'Agregar al carrito' : 'Me interesa'}
          </Button>
        )}
        {log ? <Login login={login} /> : null}
      </Modal.Footer>
    </Modal>
  )
}

export default DetailModal
