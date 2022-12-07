import { Button } from "react-bootstrap";
import React, { Fragment } from "react";
import { Navbar, Nav, NavbarBrand, NavItem, Col } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import "./Mailbox.css";
const Mailbox = () => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.clear();
    history.replace("/login");
  };
  return (
    <Fragment>
      <Nav className="bg-light d-md sidebar navbar">
        <NavbarBrand>MailBox</NavbarBrand>
        <Button variant="warning" onClick={logoutHandler}>
          Logout
        </Button>
      </Nav>
      <Col className=" bg-dark">
        <Navbar className="navbar d-md bg-dark list">
          <NavItem>
            <NavLink to="/compose">Compose</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/inbox">Inbox</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/sentmail">SentBox</NavLink>
          </NavItem>
        </Navbar>
      </Col>
    </Fragment>
  );
};

export default Mailbox;
