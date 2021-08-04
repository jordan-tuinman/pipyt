import React from 'react'

// React Icons:
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import styled from 'styled-components'
import SearchBar from './SearchBar'

const Menu = () => {
  return (
    <MenuWrapper>
      <Wrapper>
        <BackIcon />
        <AppName>PiPYT</AppName>
      </Wrapper>
      <SearchBar />
    </MenuWrapper>
  )
}

export default Menu

const MenuWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  z-index: 90;
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
  font-size: 1rem;
`

const AppName = styled.p`
  font-weight: 500;
`

const BackIcon = styled(IoArrowBackCircleOutline)`
  font-size: 1.2rem;
`
