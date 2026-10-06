import React from 'react'

const DisplayPost = ({ image, description }) => {
  return (
    <>
      <img src={image} alt='' />
      <figcaption>{description}</figcaption>
    </>
  )
}

export default DisplayPost
