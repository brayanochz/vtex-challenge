import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ListView from './views/ListView';
import DetailView from './views/DetailView';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/" exact={true} component={ListView}></Route>
          <Route path="/detail/:id" exact={true} component={DetailView}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
