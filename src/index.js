import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CoinTracker from './CoinTracker'
import MovieApp from './MovieApp'
import Todo from './Todo'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Todo /> */}
    {/* <CoinTracker /> */}
    <MovieApp />
  </React.StrictMode>,
  document.getElementById('root')
)
