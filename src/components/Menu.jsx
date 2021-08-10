import React from 'react'

// Redux:
import { connect } from 'react-redux'
import { setNav } from '../actions'

// React Icons:
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import styled from 'styled-components'
import SearchBar from './SearchBar'

const Menu = ({ dispatch, nav }) => {
  function handleClick() {
    dispatch(setNav(nav === 'home' ? 'home' : 'results'))
  }

  return (
    <MenuWrapper>
      <BackIcon onClick={handleClick}>
        <IoArrowBackCircleOutline />
      </BackIcon>
      <Wrapper>
        <AppName>PiPYT</AppName>
      </Wrapper>
      <SearchBar />
    </MenuWrapper>
  )
}

function mapStateToProps(state) {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps)(Menu)

const MenuWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 1rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`

const Wrapper = styled.div`
  -webkit-app-region: drag;
  -webkit-user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 1rem;
  width: 100%;
  font-size: 0.9rem;
`

const AppName = styled.p`
  font-weight: 400;
`

const BackIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  margin-right: 1rem;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: #3b3b3b;
  }
`
