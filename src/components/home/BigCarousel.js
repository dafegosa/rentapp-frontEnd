import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const BigCarousel = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ height: '60vh', marginTop: '1px' }}
      className='content'
    >
      <Carousel.Item>
        <img
          className='d-block mx-auto'
          src='https://res.cloudinary.com/dafegosa/image/upload/v1612382524/banner1_hgaon0.jpg'
          alt='First slide'
          style={{ height: '60vh' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block mx-auto'
          src='https://res.cloudinary.com/dafegosa/image/upload/v1612382531/banner3_lsldkk.jpg'
          alt='Second slide'
          style={{ height: '60vh' }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block mx-auto'
          src='https://res.cloudinary.com/dafegosa/image/upload/v1612382531/banner2_e0hs5i.jpg'
          alt='Third slide'
          style={{ height: '60vh' }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BigCarousel
