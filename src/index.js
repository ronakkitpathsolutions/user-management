import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import MainProvider from './context/Provider'
import ErrorBoundary from './error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <MainProvider {...{ isAdmin: null }} >
        <App />
      </MainProvider>
    </BrowserRouter>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
