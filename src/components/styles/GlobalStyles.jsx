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
  color: #fcfcfc;
  position: relative;
  min-height: 100vh;
}

body::-webkit-scrollbar {
  display: none;
}



`

export default GlobalStyles
