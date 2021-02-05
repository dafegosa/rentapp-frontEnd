import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const FormCreateElement = () => {
  const [category, setCategory] = useState('')
  const audiovsual = [
    'Arte',
    'Fotografía e iluminación',
    'Sonido',
    'Post-producción',
    'Logística',
  ]
  const events = ['Menaje', 'Decoración', 'Sonido', 'Logística']
  const both = ['Arte y decoración', 'Sonido', 'Logística']
  return (
    <div
      className='card border-info mb-3 mx-auto'
      style={{
        maxWidth: '60%',
        minWidth: '18rem',
        border: 'solid black 1px',
        marginTop: '3%',
        padding: '1%',
      }}
    >
      <Form>
        <Form.Group as={Row} controlId='formHorizontalName'>
          <Form.Label column sm={3}>
            Nombre del elemento:
          </Form.Label>
          <Col sm={9}>
            <Form.Control type='text' placeholder='Nombre' />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='formHorizontalModel'>
          <Form.Label column sm={3}>
            Modelo:
          </Form.Label>
          <Col sm={9}>
            <Form.Control type='text' placeholder='Modelo' />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='formHorizontalPrice'>
          <Form.Label column sm={3}>
            Costo día de alquiler
          </Form.Label>
          <Col sm={9}>
            <Form.Control type='text' placeholder='Precio día' />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='formHorizontalDescription'>
          <Form.Label column sm={3}>
            Descripción, características y recomendaciones:
          </Form.Label>
          <Col sm={9}>
            <Form.Control as='textarea' rows={3} placeholder='...' />
          </Col>
        </Form.Group>
        <Form.Label column sm={12}>
          <p
            id='CategoryHelpBlock'
            style={{ marginBottom: '2%' }}
            className='text-info text-center'
          >
            Los siguientes campos serán muy importantes de especificar para que
            tus elementos sean más facíles de entontrar.
          </p>
        </Form.Label>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as='legend' column sm={3}>
              Catergoría
            </Form.Label>
            <Col sm={9}>
              <Form.Check
                type='radio'
                label='Audiovisual'
                name='category'
                id='Audiovisual'
                onClick={(e) => {
                  setCategory(e.target.id)
                }}
              />
              <Form.Check
                type='radio'
                label='Eventos'
                name='category'
                id='Eventos'
                onClick={(e) => {
                  setCategory(e.target.id)
                }}
              />
              <Form.Check
                type='radio'
                label='Audiovisual y Eventos'
                name='category'
                id='Audiovisual y Eventos'
                onClick={(e) => {
                  setCategory(e.target.id)
                }}
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} controlId='formGridState'>
          <Form.Label column sm={3}>
            State
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as='select'
              defaultValue='Choose...'
              style={{ maxWidth: '16.5rem', margin: '0 2%' }}
            >
              {category === 'Audiovisual' ? (
                audiovsual.map((el) => {
                  return <option>{el}</option>
                })
              ) : category === 'Eventos' ? (
                events.map((el) => {
                  return <option>{el}</option>
                })
              ) : category === 'Audiovisual y Eventos' ? (
                both.map((el) => {
                  return <option>{el}</option>
                })
              ) : (
                <option>...</option>
              )}
            </Form.Control>
          </Col>
        </Form.Group>

        {/* <Form.Group as={Row} controlId='formHorizontalCheck'>
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label='Remember me' />
          </Col>
        </Form.Group> */}

        <Form.Group as={Row}>
          <Col className='pl-auto pr-1'>
            <Button
              type='submit'
              style={{
                background: '#74e893',
                borderRadius: '10px',
              }}
            >
              Crear
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default FormCreateElement
