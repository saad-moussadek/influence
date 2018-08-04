import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";
import Router from "react-router";
import generalData from "../../testData/generalData";
import mediaData from "../../testData/mediaData";
import addRegression from "../diagrams/RegressionTools"
import BasicChart from "../diagrams/BasicChart";
import regressionData from "../../testData/regressionData";
import config from "../../config/config";

class SaadTest extends Component {
    render() {
        addRegression(generalData, "like_count", config.prediction);
        return (
            <div>
                <BasicChart data={generalData} graph={"like_count"}/>
            </div>
        );
    }
}


export default SaadTest;
