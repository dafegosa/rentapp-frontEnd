import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useDispatch, useSelector } from 'react-redux'
import { createElement } from '../../actions/results'

const FormCreateElement = () => {
  const dispatch = useDispatch()
  const [category, setCategory] = useState('')
  const [nameElement, setNameElement] = useState('')
  const [modelElement, setModelElement] = useState('')
  const [priceElement, setPriceElement] = useState('')
  const [descriptionElement, setDescriptionElement] = useState('')
  const [subCategoryElement, setSubCategoryElement] = useState('')
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const userId = useSelector((state) => state.user.id)
  const events = ['Seleccionar', 'Menaje', 'Decoración', 'Sonido', 'Logística']
  const both = ['Seleccionar', 'Arte y decoración', 'Sonido', 'Logística']

  const audiovsual = [
    'Seleccionar',
    'Arte',
    'Fotografía e iluminación',
    'Sonido',
    'Post-producción',
    'Logística',
  ]
  const validate = (e) => {
    e.preventDefault()
    handleCreateElement(
      nameElement,
      modelElement,
      priceElement,
      descriptionElement,
      category,
      subCategoryElement,
      userId,
      img1,
      img2,
      img3
    )
  }
  const handleCreateElement = (
    nameElement,
    modelElement,
    priceElement,
    descriptionElement,
    category,
    subCategoryElement,
    userId,
    img1,
    img2,
    img3
  ) => {
    try {
      dispatch(
        createElement(
          nameElement,
          modelElement,
          priceElement,
          descriptionElement,
          category,
          subCategoryElement,
          userId,
          img1,
          img2,
          img3
        )
      )
    } catch (err) {}
  }

  const upLoadImage = async (el, photoNumber) => {
    const formData = new FormData()
    formData.append('file', el)
    formData.append('upload_preset', 'kzp2h5um')
    try {
      const response = await fetch(
        'http://api.cloudinary.com/v1_1/dafegosa/upload',
        {
          method: 'POST',
          body: formData,
        }
      )
      const data = await response.json()
      switch (photoNumber) {
        case 1:
          setImg1(data.url)
          break
        case 2:
          setImg2(data.url)
          break
        case 3:
          setImg3(data.url)
          break
        default:
          break
      }
    } catch (err) {}
  }
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
      <Form onSubmit={validate}>
        <Form.Group as={Row} controlId='formHorizontalName'>
          <Form.Label column sm={3}>
            Nombre del elemento:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              value={nameElement}
              type='text'
              placeholder='Nombre'
              required
              onChange={(e) => setNameElement(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='formHorizontalModel'>
          <Form.Label column sm={3}>
            Modelo:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type='text'
              placeholder='Modelo'
              required
              value={modelElement}
              onChange={(e) => setModelElement(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='formHorizontalPrice'>
          <Form.Label column sm={3}>
            Costo día de alquiler
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type='text'
              placeholder='Precio día'
              required
              value={priceElement}
              onChange={(e) => setPriceElement(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='formHorizontalDescription'>
          <Form.Label column sm={3}>
            Descripción, características y recomendaciones:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='...'
              required
              value={descriptionElement}
              onChange={(e) => setDescriptionElement(e.target.value)}
            />
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
                required
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
            Sub categoría
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as='select'
              defaultValue='Choose...'
              style={{ maxWidth: '16.5rem', margin: '0 2%' }}
              onChange={(e) => setSubCategoryElement(e.target.value)}
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
        <Form.Group>
          <Form.File
            id='exampleFormControlFile1'
            label='Example file input'
            onChange={(e) => upLoadImage(e.target.files[0], 1)}
          />
        </Form.Group>
        <Form.Group>
          <Form.File
            id='exampleFormControlFile1'
            label='Example file input'
            onChange={(e) => upLoadImage(e.target.files[0], 2)}
          />
        </Form.Group>
        <Form.Group>
          <Form.File
            id='exampleFormControlFile1'
            label='Example file input'
            onChange={(e) => upLoadImage(e.target.files[0], 3)}
          />
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
