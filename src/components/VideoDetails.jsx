import React from 'react'

const VideoDetails = ({ item }) => {
  let info = item.snippet
  let vidId = item.id.videoId

  return (
    <>
      <div>
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

export default VideoDetails
