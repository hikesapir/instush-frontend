import './assets/scss/style.scss'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { MainApp } from './pages/MainApp';
import { HomePage } from './pages/HomePage';
import { useEffect } from 'react';
import { loadLoggedinUser } from './store/actions/userActions';
import { useDispatch } from 'react-redux';
import { userService } from './services/userService';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadLoggedinUser())
  }, [])

  const PrivateRoute = (props) => {
    const loggedinUser = userService.getLoggedinUser()
    return loggedinUser ? <Route {...props} /> : <Redirect to='/homepage' />
  }


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/homepage" component={HomePage} />
          <PrivateRoute path="/" component={MainApp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
