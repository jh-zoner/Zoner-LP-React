import React from 'react'

import PropTypes from 'prop-types'

import './parallax-header-2.css'

const ParallaxHeader2 = (props) => {
  return (
    <div
      data-component="parallaxText"
      className={`parallax-header-2-container ${props.rootClassName} `}
    >
      <h2 className="">{props.text}</h2>
    </div>
  )
}

ParallaxHeader2.defaultProps = {
  rootClassName: '',
  text: 'Parallax Header',
}

ParallaxHeader2.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default ParallaxHeader2
