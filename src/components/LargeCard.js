import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const LargeCard = () => {
  return (
    <div class='card-group' style={{ margin: '2% 15%' }}>
      <div class='card' style={{ margin: '1%', height: '200px' }}>
        <div class='card-body'>
          <h5 class='card-title'>Card title</h5>
          <p class='card-text'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class='card-text'>
            <small class='text-muted'>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class='card' style={{ margin: '1%', height: '200px' }}>
        <div class='card-body'>
          <h5 class='card-title'>Card title</h5>
          <p class='card-text'>
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p class='card-text'>
            <small class='text-muted'>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class='card' style={{ margin: '1%', height: '200px' }}>
        <div class='card-body'>
          <h5 class='card-title'>Card title</h5>
          <p class='card-text'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p class='card-text'>
            <small class='text-muted'>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LargeCard
