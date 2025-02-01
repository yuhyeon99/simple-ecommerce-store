import './App.css'
import { Global, ThemeProvider } from '@emotion/react'
import { lightTheme } from './styles/theme'
import AppRouter from './routes/AppRouter'
import globalStyle from './styles/global.style'

function App() {

  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={lightTheme}>
        <AppRouter />
      </ThemeProvider>
    </>
  )
}

export default App
