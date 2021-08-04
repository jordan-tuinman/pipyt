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
    <Form onSubmit={handleSubmit} id="search-form">
      <SearchInput
        onChange={handleChange}
        type="text"
        placeholder="Search"
        autoFocus="true"
      />
      <SearchButton type="submit" form="search-form" value="Submit">
        <IoSearchCircleOutline
          type="submit"
          form="search-form"
          value="Submit"
        />
      </SearchButton>
    </Form>
  )
}

export default connect()(SearchBar)

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const SearchInput = styled.input`
  border: none;
  padding: 0.1rem 0.2rem;
  outline-color: #3ea6ff;
  width: 150px;
`

const SearchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #fcfcfc;
  border: none;
  font-size: 1.2rem;
  padding: 0;
  padding-left: 0.2rem;

  &:hover {
    cursor: pointer;
  }
`
