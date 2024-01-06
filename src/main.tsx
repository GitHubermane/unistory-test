import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux
import { store } from 'store';
import { Provider } from 'react-redux';

// Metamask
import { config } from 'api';
import { DAppProvider } from '@usedapp/core';

// styles
import './assets/styles/index.css';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <DAppProvider config={config}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DAppProvider>
  </Provider>,
);
