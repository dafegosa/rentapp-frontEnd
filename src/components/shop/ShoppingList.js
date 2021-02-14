import React from 'react'
import { useSelector } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
export const ShoppingList = () => {
  const items = useSelector((state) => state.items)
  return (
    !!items &&
    items.length > 0 &&
    items.map((item, idx) => (
      <ListGroup
        horizontal='md'
        className='my-2 mx-auto space-around'
        style={{ width: '90%' }}
        key={idx}
      >
        <ListGroup.Item>
          <img src={item.img1} style={{ maxWidth: '5rem' }} />
        </ListGroup.Item>
        <ListGroup.Item>{item.name}</ListGroup.Item>
        <ListGroup.Item>{item.owner}</ListGroup.Item>
        <ListGroup.Item>and above!</ListGroup.Item>
      </ListGroup>
    ))
  )
}
