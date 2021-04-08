import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import Nav from "./components/Nav";
import Shop from "./components/Shop/index.js";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
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

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/error" component={Error} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </Provider>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
