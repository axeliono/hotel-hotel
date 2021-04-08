import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import Nav from "./components/Nav";
import Shop from "./components/Shop/index.js";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      main: "#F21",
    },
    secondary: {
      main: "#ffa500",
    },
  },
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <Router>
          <div>
            <Header />
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/rooms" component={Rooms} />
              <Route exact path="/error" component={Error} />
              <Route exact path="/shop" component={Shop} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
