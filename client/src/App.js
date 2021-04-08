import './index.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F21"
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
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/rooms" component={Rooms}/>         
        <Route exact path="/error" component={Error}/>
        <Route exact path="/shop" component={Shop}/>
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
