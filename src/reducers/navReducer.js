const navReducer = (state = 'home', action) => {
  switch (action.type) {
    case 'SET_NAV':
      return action.page

    default:
      return state
  }
}

export default navReducer
