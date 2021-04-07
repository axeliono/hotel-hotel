
import './index.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import Nav from './components/Nav';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/rooms" component={Rooms}/>         
        <Route exact path="/error" component={Error}/>
        <Route exact path="/shop" component={Shop}/>
      </Switch>
      </div>
       </Router> 
  );
}

export default App;