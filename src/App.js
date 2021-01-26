import React, {Component} from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from 'react-toastify';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {history} from "./shared/history";
import HomeView from "./views/home";
import ContactView from "./views/contact";
import AboutMe from "./views/about-me";

class App extends Component {
  render() {
    return (
        <>
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route
                  path="/contact"
                  component={ContactView}
              />
              <Route
                  path="/about-me"
                  component={AboutMe}
              />
                <Route
                    path="/portfolio"
                    component={HomeView}
                />
              <Redirect to="/" />
            </Switch>
          </Router>
        </>
    );
  }
}

export default App;
