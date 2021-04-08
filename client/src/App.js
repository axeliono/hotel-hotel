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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ca361a"
    },
    secondary: {
      main: "#ffa500",
    },
  },
});

function App() {
  return (
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
  );
}

export default App;
