import './App.css'
import { ThemeProvider } from '@emotion/react'
import Header from './layouts/header'
import { lightTheme } from './styles/theme'

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      {/* 나머지 컴포넌트 */}
    </ThemeProvider>
  )
}

export default App
