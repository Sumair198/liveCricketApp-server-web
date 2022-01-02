import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import Dashboard from "./components/dashboard/index"
import Scoreboard from "./components/scoreboard/index"

import logo from './live2.gif';

function App() {
  let history = useHistory();

  return (
    <>
      <Navbar  bg="dark" expand="lg">
        <Container>
          <Navbar.Brand id='nav1' href="#home" ><img src={logo} width={100} height={30} />  Live Cricket Update </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id='nav1' onClick={() => { history.push("/") }}>Scoreboard</Nav.Link>
              <Nav.Link id='nav1' onClick={() => { history.push("/admin") }}>Dashboard</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Scoreboard} />
        <Route path="/admin" component={Dashboard} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
