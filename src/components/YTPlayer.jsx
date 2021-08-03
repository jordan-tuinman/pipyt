import React from 'react'

// Redux:
import { connect } from 'react-redux'

const YTPlayer = ({ selected }) => {
  let vidId = selected

  return (
    <>
      <iframe
        title="YTPlayer"
        src={`https://www.youtube.com/embed/${vidId}`}
        width="100%"
        height="100%"
      ></iframe>
    </>
  )
}

function mapStateToProps(state) {
  return {
    selected: state.selected,
  }
}

export default connect(mapStateToProps)(YTPlayer)
