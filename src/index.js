import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseContext from './Contexts/UseContext';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div className='max-w-7xl mx-auto'>
  <div className=''>
    <UseContext>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <App />
      </QueryClientProvider>
    </UseContext>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
