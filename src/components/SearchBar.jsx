import React from 'react'
import styled from 'styled-components'

// React Icons:
import { IoSearchCircleOutline } from 'react-icons/io5'

const SearchBar = () => {
  return (
    <>
      <form action="/" method="get" id="search-form">
        <input type="text" placeholder="Search" />
        <button type="submit" form="search-form" value="Submit">
          <IoSearchCircleOutline />
        </button>
      </form>
    </>
  )
}

export default SearchBar
