
//Working on making this allow user to serach for specific coin

// import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     useParams,
//   } from "react-router-dom";
//   import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
//   import CryptoList from './CryptoList';
//   import NewsList from './NewsList';

// class NavBar extends React.Component{

//     render(){
//         return(
//             <div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <Router>
//                             <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//                                 <Navbar.Brand href="#home">Crypto Dash</Navbar.Brand>
//                                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                                 <Navbar.Collapse id="basic-navbar-nav">
//                                     <Nav className="mr-auto">
//                                     <Nav.Link href="/">Home</Nav.Link>
//                                     <Nav.Link href="/CryptoList">Crypto List</Nav.Link>
//                                     <Nav.Link href="/News List">News List</Nav.Link>
                                   
//                                     </Nav>
//                                     <Form inline>
//                                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                                     <Button variant="outline-success">Search</Button>
//                                     </Form>
//                                 </Navbar.Collapse>
//                             </Navbar>
//                             <br />
//                             <Switch>
//                                 <Route exact path="/">
//                                     < ModalWrap/>
//                                 </Route>
//                                 <Route path="/CryptoList">
//                                     <CryptoList />
//                                 </Route>
//                                 <Route path="/NewsList">
//                                     <NewsList />
//                                 </Route>
//                             </Switch>
//                         </Router>
//                     </div>
//                 </div>
//             </div>
//         )  
//     }
// }

// export default NavBar; 