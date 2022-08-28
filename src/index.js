import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Constants } from './constans/Constans';
import { GlobalStyles } from './GlobalStyle.styled';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={Constants}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
