import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
const HomeModal = ({ show, closeModal, option }) => {
  const [message, setMessage] = useState('')
  useEffect(() => {
    switch (option) {
      case 'earn':
        setMessage(
          'Muchas personas están necesitando algo que tú tienes. Gana dinero rentando objetos que tienes sin usar. '
        )
        break
      case 'find':
        setMessage(
          'Encuentra lo que necesitas para tu proyecto audiovisual. Escribe una palabra clave en el bucador o da click en "Ver mas" y descubre todos los elementos que hay a tu disposición'
        )
        break
      case 'tellUs':
        setMessage(
          'Déjanos un mensaje diciendonos qué estás buscando para tu proyecto audiovisual y nosotros internamente lo buscaremos por tí. Te enviaremos un correo contantode si tuvimos éxito en la búsqueda. También puedes contarnos qué te gustaría ver en esta aplciación, y trabajaremos para mejorar tu experiencia'
        )
        break
      default:
        break
    }
  }, [])

  return (
    <Modal
      show={show}
      onHide={() => closeModal()}
      dialogClassName='modal-90w'
      aria-labelledby='example-custom-modal-styling-title'
    >
      <Modal.Header closeButton>
        <Modal.Title id='example-custom-modal-styling-title'>
          Custom Modal Styling
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
    </Modal>
  )
}

export default HomeModal
