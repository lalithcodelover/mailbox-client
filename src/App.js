import "./App.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./pages/Login";
import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import Welcome from "./pages/Welcome";
import ComposeMail from "./pages/ComposeMail";
import Mailbox from "./pages/Mailbox";
import SentMail from "./pages/SentMail";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/compose">
          <ComposeMail />
        </Route>
        <Route path="/mailbox">
          <Mailbox />
        </Route>
        <Route path="/sentmail">
          <SentMail />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
