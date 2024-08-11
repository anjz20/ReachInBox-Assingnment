import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <GoogleOAuthProvider clientId="838235592767-hnvv654b4rptli4eq7fpge42dt3iqjqk.apps.googleusercontent.com">
     
  <BrowserRouter>
  
  <App />
  </BrowserRouter>
  </GoogleOAuthProvider>;
  
  </React.StrictMode>,
)
