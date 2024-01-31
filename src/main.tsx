import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './helpers/translation/i18.ts';
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <GoogleOAuthProvider clientId={googleClientId as string}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </GoogleOAuthProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
