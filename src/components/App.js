import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import AboutPage from './about';
import HomePage from './home';
import ContactPage from './contact';
import * as routes from '../constants/routes';
import { firebase } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
        authUser ? this.setState(() => ({authUser})) : this.setState (() => ({authUser: null}));
    });
  }

  render() {
    return(
      
      <div>
        <Header/>
        <Switch>
        <Route
          exact path={routes.HOME}
          component={() => <HomePage />}
        />
        <Route
          exact path={routes.ABOUT}
          component={() => <AboutPage />}
        />
        <Route
          exact path={routes.CONTACT}
          component={() => <ContactPage />}
        />
        <Route path="/" exact component={HomePage} />
        </Switch>
        
      </div>
    );
  }
}


    
export default App;
