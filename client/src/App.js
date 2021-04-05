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
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route exact path="/login" >
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