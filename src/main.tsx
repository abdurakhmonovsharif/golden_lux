import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { I18nextProvider } from 'react-i18next'
import i18n from './helpers/i18.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
