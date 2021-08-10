import React from 'react'
import styled from 'styled-components'

// Redux:
import { connect } from 'react-redux'

// Components:
import VideoDetails from './VideoDetails'

const SearchResults = ({ videos, selected }) => {
  return (
    <ResultsWrapper>
      {videos.map((item, i) => (
        <VideoDetails item={item} key={i}/>
      ))}
    </ResultsWrapper>
  )
}

function mapStateToProps(state) {
  return {
    videos: state.videos,
    selected: state.selected,
  }
}

export default connect(mapStateToProps)(SearchResults)

const ResultsWrapper = styled.div`
  padding: 0 1rem;
`
