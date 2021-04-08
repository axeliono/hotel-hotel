
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Reservations from './components/Reservations';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
     { <Nav/> }
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/rooms" component={Rooms}/>         
        <Route exact path="/error" component={Error}/>
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/reserve" component={Reservations} />
      </Switch>
      </div>
       </Router> 
  );
}

export default App;