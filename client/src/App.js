import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/error">Error</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
      </div>
       </Router>
    </>
  );
}

export default App;


<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>