import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './index.css';
import './reset.css';

import '@services/i18n/i18n.config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
