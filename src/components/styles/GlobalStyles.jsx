import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0c0c0c ;
  color: #fff;
  position: relative;
  min-height: 100vh;
  padding-bottom: 200px;
}

`

export default GlobalStyles
