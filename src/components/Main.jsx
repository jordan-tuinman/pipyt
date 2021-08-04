import React from 'react'
import { connect } from 'react-redux'

// Components:
import SearchResults from './SearchResults'
import YTPlayer from './YTPlayer'

const Main = ({ nav }) => {
  return (
    <>
      {nav !== 'results' && nav !== 'home' ? <YTPlayer /> : <SearchResults />}
    </>
  )
}

function mapStateToProps(state) {
  return {
    nav: state.nav,
  }
}

export default connect(mapStateToProps)(Main)
