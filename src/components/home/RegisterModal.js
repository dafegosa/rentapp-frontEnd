import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { createUser } from '../../actions/results'

const RegisterModal = ({ show, closeModal }) => {
  const [email, setEmail] = useState('')
  const [control, setControl] = useState(true)
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleCreateUser = (email, password) => {
    console.log('hola')
    try {
      dispatch(createUser(email, password))
    } catch (err) {}
  }

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
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group controlId='formGridPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
            onClick={() => handleCreateUser(email, password)}
          >
            Registrarme
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default RegisterModal
