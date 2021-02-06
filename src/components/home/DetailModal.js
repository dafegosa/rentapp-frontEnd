import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
const DetailModal = ({ show, closeModal, elementInfo }) => {
  const element = elementInfo[0]
  console.log(element)
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
        <p>{element.price}</p>
        <p>{element.description}</p>
      </Modal.Body>
    </Modal>
  )
}

export default DetailModal
