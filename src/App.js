
import './App.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SigninSignup from './components/Login/SigninSignup';
export const userContext = createContext();



function App() {
  const [loggedInUser, setLoggedUser] = useState([])
  return (
    <userContext.Provider value={[loggedInUser, setLoggedUser]}>

      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <PrivateRoute exact path="/destination/:id">
            <Destination />
          </PrivateRoute>
          <PrivateRoute exact path="/destination">
            <Destination />
          </PrivateRoute>
          <Route path="/user">
            <SigninSignup />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>

  );
}

export default App;
