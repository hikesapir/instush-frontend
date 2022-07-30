import './assets/scss/style.scss'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { MainApp } from './pages/MainApp';
import { HomePage } from './pages/HomePage';
import { useEffect } from 'react';
import { loadLoggedinUser } from './store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  // const dispatch = useDispatch()
  
  // useEffect(async () => {
  //   await dispatch(loadLoggedinUser())
  // }, [])
  
  // const { loggedinUser } = useSelector(state => state.userModule)


  // const PrivateRoute = (props) => {
  //   return loggedinUser ? <Route {...props} /> : <Redirect to='/homepage' />
  // }


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/feed" component={MainApp} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
