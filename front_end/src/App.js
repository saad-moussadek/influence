import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import config from "./config/config";
import Typography from "@material-ui/core/es/Typography/Typography";
import Root from "./components/Root";
import Router from "react-router";
import {HashRouter} from "react-router-dom";
import MyDashboard from "./components/pages/myDashboard";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={config.theme}>
            <HashRouter>
                <Switch>
                    <Route to={"/"} component={Root} />
                </Switch>
            </HashRouter>
        </MuiThemeProvider>
    );
  }
}


export default App;
