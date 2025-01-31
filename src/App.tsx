import './App.css'
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from './styles/theme'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
