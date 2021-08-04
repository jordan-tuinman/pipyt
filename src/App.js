import { connect } from 'react-redux'

// Components:
import GlobalStyles from './components/styles/GlobalStyles'
import Menu from './components/Menu'
import Main from './components/Main'
import HowTo from './components/HowTo'

const App = ({ nav }) => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      {nav === 'home' ? <HowTo /> : <Main />}
    </>
  )
}

function mapStateToProps(state) {
  return {
    nav: state.nav,
  }
}

export default connect(mapStateToProps)(App)
