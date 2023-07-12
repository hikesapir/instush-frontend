import './assets/scss/style.scss'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { MainApp } from './pages/MainApp';
import { HomePage } from './pages/HomePage';
import { useEffect } from 'react';
import { loadLoggedinUser } from './store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { userService } from './services/userService';
import { Loader } from './cmps/Loader';

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.siteModule.isLoading)

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
        {isLoading && <Loader />}
        <Switch>
          <Route path="/homepage" component={HomePage} />
          <PrivateRoute path="/" component={MainApp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
