import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import RegisterModal from './RegisterModal'

const Login = () => {
  const [show, setShow] = useState(false)

  const closeModal = () => {
    setShow(false)
  }
  return (
    <Form>
      {show ? <RegisterModal show={show} closeModal={closeModal} /> : null}

      <button
        type='button'
        class='btn btn-link '
        style={{ marginLeft: '80px' }}
        onClick={() => setShow(true)}
      >
        Crear una cuenta
      </button>
      <Form.Control
        type='email'
        placeholder='   Email'
        style={{
          background: 'white',
          width: '300px',
          borderRadius: '10px',
          height: '30px',
          margin: '2px',
        }}
      />
      <Form.Text className='text-muted'>
        We'll never share your email with anyone else.
      </Form.Text>
      <Form.Control
        type='Password'
        placeholder='   Password'
        style={{
          background: 'white',
          width: '300px',
          borderRadius: '10px',
          height: '30px',
          margin: '2px',
        }}
      />
      {/* <Form.Check type='checkbox' label='Check me out' /> */}
      <Button
        type='button'
        style={{
          background: '#74e893',
          borderRadius: '10px',
          height: '30px',
          padding: '1px',
          margin: '2px',
          marginLeft: '230px',
        }}
      >
        Ingresar
      </Button>
    </Form>
  )
}

export default Login
