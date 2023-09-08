import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/scss/main.scss';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={true} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

