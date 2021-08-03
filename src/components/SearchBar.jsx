import React, { useState } from 'react'
import styled from 'styled-components'

// Redux:
import { connect } from 'react-redux'
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
        <SearchInput onChange={handleChange} type="text" placeholder="Search" />
        <SearchButton type="submit" form="search-form" value="Submit">
          <IoSearchCircleOutline />
        </SearchButton>
      </form>
    </>
  )
}

export default connect()(SearchBar)

const SearchInput = styled.input`
  border: none;
  border-radius: 10px;
  text-align: center;
  outline: none;
`

const SearchButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 10px;
`
