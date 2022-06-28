import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './assets/scss/style.scss'
import { MainApp } from './pages/MainApp';
import { AppHeader } from './cmps/AppHeader';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProfile } from './pages/UserProfile';
import { loadLoggedinUser } from './store/actions/userActions';
import { loadPosts } from './store/actions/postActions';
import { PostDetails } from './pages/PostDetails';


function App() {
  useEffect(() => {
    dispatch(loadLoggedinUser())
    dispatch(loadPosts())
  }, [])

  const dispatch = useDispatch()
  return (
    <Router>
      <div className="App">
        <AppHeader></AppHeader>
        <Switch>
          <Route path="/post/:postId" component={PostDetails}></Route>
          <Route path="/feed/:userId" component={UserProfile}></Route>
          <Route path="/" component={MainApp}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
