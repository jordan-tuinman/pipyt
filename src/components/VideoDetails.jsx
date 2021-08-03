import React from 'react'
import styled from 'styled-components'

// Redux:
import { connect } from 'react-redux'
import { setSelected } from '../actions'

const VideoDetails = ({ dispatch, item }) => {
  let info = item.snippet
  let date = info.publishedAt
  let vidId = item.id.videoId
  console.log(date)
  function handleClick() {
    dispatch(setSelected(vidId))
  }

  return (
    <>
      <Wrapper onClick={handleClick}>
        <ColumnOne>
          <img src={info.thumbnails.high.url} alt={info.title} />
        </ColumnOne>
        <ColumnTwo>
          <Title>{info.title}</Title>
          <Info>
            {info.channelTitle}
            <Dot> · </Dot>
            {date.slice(0, 10)}
          </Info>
          <Description>{info.description}</Description>
        </ColumnTwo>
      </Wrapper>
    </>
  )
}

export default connect()(VideoDetails)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 0 0.5rem;
  padding: 1rem 0;
  grid-gap: 0.5rem;
  border-top: solid 1px #1a1a1a;
  border-bottom: solid 1px #1a1a1a;

  @media screen and (max-width: 450px) {
    grid-template-columns: 100%;
  }
`

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 0.5rem;
  width: 100%;
`

const Title = styled.h1`
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`

const Info = styled.p`
  font-size: 0.7rem;
`

const Description = styled.p`
  padding-top: 0.5rem;
  font-size: 0.8rem;
`

const Dot = styled.span`
  font-weight: 800;
`
