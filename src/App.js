import React, { Component } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import Register from "./components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import "./App.css";
import { withCookies } from "react-cookie";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {this.props.cookies.get("auth-token") ? (
              <Route>
                <div className="app">
                  <Header />
                  <div className="app__body">
                    <Route exact path="/main">
                      <Sidebar />
                      <Feed />
                      <Widgets />
                    </Route>
                    <Route
                      exact
                      path="/profile"
                      component={() => <Profile />}
                    />
                  </div>
                </div>
              </Route>
            ) : (
              <Route exact path="/" component={() => <Home />} />
            )}

            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} />}
            />
            <Route exact path="/join_now" component={() => <Register />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withCookies(App);