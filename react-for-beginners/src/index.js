import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CoinTracker from './CoinTracker'
import Todo from './Todo'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Todo /> */}
    <CoinTracker />
  </React.StrictMode>,
  document.getElementById('root')
)
