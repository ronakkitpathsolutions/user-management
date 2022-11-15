import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { ErrorBoundary } from 'react-error-boundary'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import MainProvider from './context/Provider'
import ErrorHandler from './error/ErrorHandler'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary FallbackComponent={ErrorHandler} >
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
