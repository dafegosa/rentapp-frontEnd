import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { deleteItem } from '../../actions/results'
export const ShoppingList = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items)

  const handleDeleteItem = (idx) => {
    const newItems = items.filter((el, indx) => indx !== idx)
    dispatch(deleteItem(newItems))
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
      {!!items &&
        items.length > 0 &&
        items.map((item, idx) => (
          <ListGroup
            className='mx-auto'
            horizontal='lg'
            style={{ width: '90%' }}
            key={idx}
          >
            <ListGroup.Item
              className='mx-auto'
              style={{
                padding: '0',
                margin: '1rem',
                border: '1px',
                maxWidth: '250px',
              }}
            >
              <img src={item.img1} style={{ maxWidth: '4rem' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                width: '250px',
              }}
            >
              {item.name}
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                width: '250px',
              }}
            >
              {item.owner}
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                width: '250px',
              }}
            >
              and above!
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                Width: '250px',
              }}
            >
              <Button
                type='button'
                className='btn-sm btn-danger mx-auto'
                onClick={(e) => handleDeleteItem(idx)}
              >
                x
              </Button>
            </ListGroup.Item>
          </ListGroup>
        ))}
    </div>
  )
}
