import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App2 />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
