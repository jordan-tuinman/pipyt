const videoReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_VIDEOS':
      return action.videos

    default:
      return state
  }
}

export default videoReducer
