import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import ListBallInput from './ListBallInput.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <ListBallInput />
  </React.StrictMode>,
)
