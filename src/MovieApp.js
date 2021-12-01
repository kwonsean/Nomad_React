import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Detail from './routes/Detail'
import Home from './routes/Home'
function MovieApp() {
  return (
    <Router>
      <Switch>
        {/* <Route path='/:id'>
          <h1>NOT FOUND</h1>
        </Route> */}
        <Route path='/movie/:id'>
          <Detail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default MovieApp
