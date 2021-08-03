const selectedReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SELECTED':
      return action.selected

    default:
      return state
  }
}

export default selectedReducer
