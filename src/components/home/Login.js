import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import RegisterModal from './RegisterModal'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../actions/results'
import { withRouter } from 'react-router-dom'

const Login = ({ login, history }) => {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const closeModal = () => {
    setShow(false)
  }

  const signin = (email, password, history, login) => {
    try {
      dispatch(loginUser(email, password, history, login))
    } catch (err) {}
  }
  return (
    <Form>
      {show ? (
        <RegisterModal show={show} closeModal={closeModal} login={login} />
      ) : null}

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
        onChange={(e) => {
          setEmail(e.target.value)
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
        onChange={(e) => setPassword(e.target.value)}
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
        onClick={() => signin(email, password, history, login)}
      >
        Ingresar
      </Button>
    </Form>
  )
}

export default withRouter(Login)
