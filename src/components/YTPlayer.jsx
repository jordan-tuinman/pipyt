import React from 'react'
import styled from 'styled-components'

// Redux:
import { connect } from 'react-redux'

const YTPlayer = ({ selected }) => {
  let vidId = selected

  return (
    <>
      <Player
        title="YTPlayer"
        src={`https://www.youtube.com/embed/${vidId}`}
        width="100%"
        height="100%"
      ></Player>
    </>
  )
}

function mapStateToProps(state) {
  return {
    selected: state.selected,
  }
}

export default connect(mapStateToProps)(YTPlayer)

const Player = styled.iframe`
  border: none;
  padding: none;
  margin: none;
  height: 90vh;
`
