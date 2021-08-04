// Components:
import GlobalStyles from './components/styles/GlobalStyles'
import Menu from './components/Menu'
import SearchResults from './components/SearchResults'
import YTPlayer from './components/YTPlayer'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <SearchResults />
      <YTPlayer />
    </>
  )
}

export default App
