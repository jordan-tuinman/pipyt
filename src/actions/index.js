import { getVideos } from '../apis'

export const setResults = (videos) => {
  return {
    type: 'SET_VIDEOS',
    videos,
  }
}

export const setVideos = (query) => {
  return (dispatch) => {
    getVideos(query)
      .then((res) => {
        dispatch(setResults(res))
        return null
      })
      .catch((err) => console.log(err.message))
  }
}