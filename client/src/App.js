import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import Nav from "./components/Nav";
import Shop from "./components/Shop/index.js";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './utils/store.js'

function App() {
  return (
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
  );
}

export default App;
