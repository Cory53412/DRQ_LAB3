import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';//must import to use bootstrap features
import { Navbar, Nav } from 'react-bootstrap';//imports Naviagtion bar and navigation so we can use features in webpage
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';//switch statement helps switch between different components



class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">

         /* //Navigation bar added to webpage */
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Lab 3</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>//Link and title on navigation bar
              <Nav.Link href="/read">read</Nav.Link>
              <Nav.Link href="/create">create</Nav.Link>
            </Nav>
          </Navbar>
          <br />   //break to add space between component and nav bar
          <Switch>
            <Route path='/' component={Content} exact /> // shows only content on home page
            <Route path='/create' component={Header} exact /> //shows only header on create page
            <Route path='/read' component={Footer} exact /> //shows only Footer on read page
          </Switch>

        </div>
      </Router>

    );

  }
}



export default App;
