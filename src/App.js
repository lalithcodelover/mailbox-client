import "./App.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
      </Switch>
      </Fragment>
  );
}

export default App;
