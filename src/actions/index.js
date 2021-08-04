import { getVideos } from '../apis'

export const setNav = (page) => {
  return {
    type: 'SET_NAV',
    page,
  }
}

export const setSelected = (selected) => {
  return {
    type: 'SET_SELECTED',
    selected,
  }
}

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
      .then(() => {
        dispatch(setNav('results'))
        return null
      })
      .catch((err) => console.log(err.message))
  }
}

export const setPlayerVideo = (video) => {
  return (dispatch) => {
    dispatch(setSelected(video))
    dispatch(setNav('player'))
    return null
  }
}
