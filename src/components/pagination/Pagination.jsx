import React from 'react'
import PropTypes from 'prop-types'
import { usePagination } from '../../hooks/appContext'

const Pagination = ({ page, nextPage, prevPage }) => (
  <>
    <button onClick={prevPage}>&lt;</button>
    <span>{page}</span>
    <button onClick={nextPage}>&gt;</button>
  </>
)

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired
}

export default Pagination

