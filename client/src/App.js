import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import Nav from './components/Nav';
import Reservations from './components/Reservations';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ca361a"
    },
    secondary: {
      main: "#ffa500"
    }
  }
});

function App() {
  return (
    <Router>
    <div>
     <Header />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/rooms" component={Rooms}/>         
        <Route exact path="/error" component={Error}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/reservations" component ={Reservations}/>
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
