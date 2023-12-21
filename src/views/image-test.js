import React from 'react'

import { Helmet } from 'react-helmet'

import './image-test.css'

const ImageTest = (props) => {
  return (
    <div className="image-test-container">
      <Helmet>
        <title>
          image-test - Easy to use phoot editor – Zoner Photo Studio X
        </title>
        <meta
          property="og:title"
          content="image-test - Easy to use phoot editor – Zoner Photo Studio X"
        />
      </Helmet>
      <img
        alt="image"
        src="/explore-hero5-400h.jpg"
        className="image-test-image"
      />
      <img
        alt="image"
        src="/dall%C3%A2%C2%B7e%202023-12-13%2008.37.09%20-%20a%20joyful%20man%20almost%20entirely%20covered%20by%20a%20massive%20heap%20of%20books%20in%20the%20same%20cozy%20library%20setting.%20the%20man%2C%20in%20his%20mid-30s%20with%20short%20brown%20hair%20and%20we-1000h.png"
        className="image-test-image1"
      />
    </div>
  )
}

export default ImageTest
