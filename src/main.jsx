import React from 'react'
// import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f5f6f8',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

