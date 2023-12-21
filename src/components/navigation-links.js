import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.discover}</span>
      <span className="navigation-links-text1">{props.features}</span>
      <span className="navigation-links-text2">{props.pricing}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  discover: 'Discover',
  features: 'Features',
  rootClassName: '',
  pricing: 'Pricing',
}

NavigationLinks.propTypes = {
  discover: PropTypes.string,
  features: PropTypes.string,
  rootClassName: PropTypes.string,
  pricing: PropTypes.string,
}

export default NavigationLinks
