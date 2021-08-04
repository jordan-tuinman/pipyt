import { connect } from 'react-redux'

// Components:
import GlobalStyles from './components/styles/GlobalStyles'
import Menu from './components/Menu'
import Main from './components/Main'

const App = ({ nav }) => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      {nav === 'home' ? <p>text will go here</p> : <Main />}
    </>
  )
}

function mapStateToProps(state) {
  return {
    nav: state.nav,
  }
}

export default connect(mapStateToProps)(App)
