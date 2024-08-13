import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TokentContext } from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<TokentContext>
<App />
</TokentContext>
</BrowserRouter>
)