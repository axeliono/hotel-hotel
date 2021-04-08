<<<<<<< HEAD
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
=======
import "./index.css";
import Home from "./pages/Home";
import Shop from "./components/Shop";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import Nav from "./components/Nav";
import Reservations from "./components/Reservations";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85

const theme = createMuiTheme({
  palette: {
    primary: {
<<<<<<< HEAD
      main: "#ca361a"
=======
      main: "#F21",
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
    },
    secondary: {
      main: "#ffa500",
    },
  },
});

function App() {
  return (
<<<<<<< HEAD
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
=======
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/rooms" component={Rooms} />
              <Route exact path="/error" component={Error} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/reservations" component={Reservations} />
            </Switch>
            <Footer />
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
>>>>>>> 3370822790e8b11077b3689763d2e13ebc440d85
  );
}

export default App;
