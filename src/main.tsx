import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux
import { store } from 'store';
import { Provider } from 'react-redux';

// Metamask
import { config } from 'api';
import { DAppProvider } from '@usedapp/core';

// Modal
import { ModalProvider } from 'react-modal-hook';

// styles
import './assets/styles/index.css';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ModalProvider>
    <Provider store={store}>
      <DAppProvider config={config}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </DAppProvider>
    </Provider>
  </ModalProvider>,
);
