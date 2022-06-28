import './assets/scss/style.scss'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { MainApp } from './pages/MainApp';
import { HomePage } from './pages/HomePage';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/homepage" component={HomePage} ></Route>
          <Route path="/" component={MainApp} ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
