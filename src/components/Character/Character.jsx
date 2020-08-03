import React from 'react'
import PropTypes from 'prop-types'

const Character = ({ name, affiliation, photoUrl }) => {
  return (
    <>
    <figure>
      <img src={photoUrl}>
    </figure>
    </>
  )
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
}

export default Character


