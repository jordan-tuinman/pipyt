import React from 'react'
import styled from 'styled-components'

// Redux:
import { connect } from 'react-redux'

// Components:
import VideoDetails from './VideoDetails'

const SearchResults = ({ videos }) => {
  console.log(videos)
  return (
    <>
      <h1>Results</h1>
      {videos.map((item) => (
        <VideoDetails item={item} />
      ))}
    </>
  )
}

function mapStateToProps(state) {
  return {
    videos: state.videos,
  }
}

export default connect(mapStateToProps)(SearchResults)