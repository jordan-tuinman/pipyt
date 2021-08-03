import React from 'react'

// Redux:
import { connect } from 'react-redux'
import { setSelected } from '../actions'

const VideoDetails = ({ dispatch, item }) => {
  let info = item.snippet
  let vidId = item.id.videoId

  function handleClick() {
    dispatch(setSelected(vidId))
  }

  return (
    <>
      <div onClick={handleClick}>
        <img src={info.thumbnails.high.url} alt={info.title} />
        <p>Title: {info.title}</p>
        <p>
          Published: {info.publishedAt} | Channel: {info.channelTitle}
        </p>
        <p>Description: {info.description}</p>
      </div>
    </>
  )
}

export default connect()(VideoDetails)
