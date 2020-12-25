import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from './commons/styles/global-style'
import Main from './containers/Main'
import React from 'react'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline></CssBaseline>
      <GlobalStyle></GlobalStyle>
      <Main/>
    </StylesProvider>
  );
}

export default App;
