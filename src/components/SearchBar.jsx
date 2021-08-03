import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Redux:
import { setVideos } from '../actions'

// React Icons:
import { IoSearchCircleOutline } from 'react-icons/io5'

const SearchBar = ({ dispatch }) => {
  const [query, setQuery] = useState('')

  function handleChange(evt) {
    setQuery(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    dispatch(setVideos(query))
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="search-form">
        <input onChange={handleChange} type="text" placeholder="Search" />
        <button type="submit" form="search-form" value="Submit">
          <IoSearchCircleOutline />
        </button>
      </form>
    </>
  )
}

export default connect()(SearchBar)
