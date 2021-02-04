import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const RegisterModal = ({ show, closeModal }) => {
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
        <Form>
          <Form.Row>
            <Form.Group controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>

            <Form.Group controlId='formGridPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder='1234 Main St' />
          </Form.Group>

          <Form.Group controlId='formGridAddress2'>
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder='Apartment, studio, or floor' />
          </Form.Group>

          <Form.Row>
            <Form.Group controlId='formGridCity'>
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group controlId='formGridState'>
              <Form.Label>State</Form.Label>
              <Form.Control as='select' defaultValue='Choose...'>
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='formGridZip'>
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id='formGridCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>

          <Button
            type='button'
            style={{
              background: '#74e893',
              borderRadius: '10px',
              height: '30px',
              padding: '1px',
              margin: '2px',
              marginLeft: '180px',
            }}
          >
            Registrarme
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default RegisterModal
