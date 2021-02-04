import React, { Component } from "react";
import Layout from "./Container/Layout/Layout.js";
import { Redirect, Route, Switch } from "react-router-dom";
import { StyleRoot } from "radium";
// import Auth from "./Components/Auth/Form.js";
import Login from "./Container/Login/Login.js";
import Dashboard from "./Container/Dashboard/Dashboard.js";
import Station1 from "./Components/Stations/Station 1/Station1.js";
import Station2 from "./Components/Stations/Station 2/Station2.js";
import Station3 from "./Components/Stations/Station 3/Station3.js";
import fire from "./config/fire.js";
import { connect } from "react-redux";
import * as nameAction from "./Store/actions/index.js";

import classes from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        let naming = null;
        if (this.state.user.uid === "sHpjtDB9MDYFaeqGcHkoENAkhIC2") {
          if (this.props.test === "1") {
            this.props.onTest("0");
          }
          naming = "Ricky";
          this.props.onNaming(naming);
        } else if (this.state.user.uid === "NV8izScyuTS7KVfWWz68ILsdcFx2") {
          if (this.props.test === "1") {
            this.props.onTest("0");
          }
          naming = "Cedric";
          this.props.onNaming(naming);
        } else if (this.state.user.uid === "cJ5i7R0l5ybGrKVuKPgvP8G6XRF3") {
          this.props.onTest("1");
          naming = "Test";
          this.props.onNaming(naming);
        }
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    // let naming = null;

    // if (this.state.user.uid === "sHpjtDB9MDYFaeqGcHkoENAkhIC2") {
    // 	naming = "Ricky";
    // 	this.props.onNaming(naming);
    // }

    let authenticated = null;
    if (this.state.user) {
      authenticated = (
        <StyleRoot>
          <div className={classes.App}>
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/" exact>
                <Redirect to="/login" />
              </Route>
              <Route
                path="/dashboard"
                exact
                render={() => (
                  <Layout>
                    <Dashboard />
                  </Layout>
                )}
              />
              <Route
                path="/station1"
                exact
                render={() => (
                  <Layout>
                    <Station1 />
                  </Layout>
                )}
              />
              <Route
                path="/station2"
                exact
                render={() => (
                  <Layout>
                    <Station2 />
                  </Layout>
                )}
              />
              <Route
                path="/station3"
                exact
                render={() => (
                  <Layout>
                    <Station3 />
                  </Layout>
                )}
              />
            </Switch>
          </div>
        </StyleRoot>
      );
    } else {
      authenticated = (
        <StyleRoot>
          <div className={classes.App}>
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
          </div>
        </StyleRoot>
      );
    }
    return authenticated;
    // <StyleRoot>
    // 	<div className={classes.App}>
    // 		<Switch>
    // 			<Route path="/login" exact component={Login} />
    // 			<Route path="/" exact>
    // 				<Redirect to="/login" />
    // 			</Route>
    // 			<Route
    // 				path="/dashboard"
    // 				exact
    // 				render={() => (
    // 					<Layout>
    // 						<Dashboard />
    // 					</Layout>
    // 				)}
    // 			/>
    // 			<Route
    // 				path="/station1"
    // 				exact
    // 				render={() => (
    // 					<Layout>
    // 						<Station1 />
    // 					</Layout>
    // 				)}
    // 			/>
    // 			<Route
    // 				path="/station2"
    // 				exact
    // 				render={() => (
    // 					<Layout>
    // 						<Station2 />
    // 					</Layout>
    // 				)}
    // 			/>
    // 			<Route
    // 				path="/station3"
    // 				exact
    // 				render={() => (
    // 					<Layout>
    // 						<Station3 />
    // 					</Layout>
    // 				)}
    // 			/>
    // 		</Switch>
    // 	</div>
    // </StyleRoot>
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.test,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNaming: (naming) => dispatch(nameAction.naming(naming)),
    onTest: (num) => dispatch(nameAction.testHandler(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
