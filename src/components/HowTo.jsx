import React from 'react'
import styled from 'styled-components'

const HowTo = () => {
  return (
    <Wrapper>
      <Title>PiPYT is a picture-in-picture YouTube player</Title>
      <Info>
        Watch YouTube in a picture-in-picture screen that stays on top of your
        other windows - ad free!
      </Info>
      <Info>
        Search for any video, and choose from the top 25 results. PiPYT plays
        videos only; no playlists, no ads.
      </Info>
    </Wrapper>
  )
}

export default HowTo

const Wrapper = styled.div`
  -webkit-user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  grid-gap: 1rem;
  height: 100vh;
  margin-top: -28.79px;
`

const Title = styled.p`
  text-align: center;
  color: #aaaaaa;
  padding-top: 1.5rem;
`

const Info = styled.p`
  text-align: center;
  color: #aaaaaa;
  font-size: 0.7rem;
`
