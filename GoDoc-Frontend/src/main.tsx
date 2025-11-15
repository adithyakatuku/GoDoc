import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { chakraTheme } from './styles/chakra-theme'
import './index.css'
import './styles/global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={chakraTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
