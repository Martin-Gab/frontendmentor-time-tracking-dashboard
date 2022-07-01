
// ====================
// === Local Import ===
// ====================
import './styles/index.scss';

// ========================
// === Packages Imports ===
// ========================
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// ====================
// === Store Import ===
// ====================
import store from './store';

// ========================
// === Component Import ===
// ========================
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
