import React, { useState } from 'react'
import styled from 'styled-components'

import { getVideos } from '../apis'

// React Icons:
import { IoSearchCircleOutline } from 'react-icons/io5'

const SearchBar = () => {
  const [query, setQuery] = useState('')

  function handleChange(evt) {
    setQuery(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    console.log(query)
    getVideos(query)
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

export default SearchBar
