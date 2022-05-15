import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import Home from "./PortfolioContainer/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";

 
function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Portfolio</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
    <div>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
