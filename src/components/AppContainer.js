import React, { Fragment, useEffect, useContext } from 'react'
import { BrowserRouter } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import AppNavigation from './AppNavigation'
import theme from './theme'


const AppContainer = () => {


  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppNavigation />
        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  )
}

export default AppContainer