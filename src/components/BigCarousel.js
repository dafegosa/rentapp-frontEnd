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
      style={{ height: '50vh', marginTop: '1px' }}
      className='content'
    >
      <Carousel.Item>
        <img
          className='d-block mx-auto'
          src='https://pixabay.com/get/g969d0c3248aaf4862b5f15b829b44395ff7c2e62b962f17180ddb634b832c22b3701ffe2911ef33d02431608525c1c28_1920.jpg'
          alt='First slide'
          style={{ height: '50vh' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block mx-auto'
          src='https://pixabay.com/get/gdca6233fee24540134bd7b50fc9d4ab12633192d605ca3abd4ead3f31fbd14ff6c7bf96b3ac93edcf51677e1b925c66075cb74cd87896ac857f2027361918130_1920.jpg'
          alt='Second slide'
          style={{ height: '50vh' }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block mx-auto'
          src='https://pixabay.com/get/g05690fe6e1161ac52dd82520d998dc88142a349974b9f57c3b52e1dbeb26bf2197bd8a170b04e1fc0e14e9f0c62e5265823252c125e10f97459d676787c001e9_1920.jpg'
          alt='Third slide'
          style={{ height: '50vh' }}
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
