import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from "@material-ui/core/es/colors/blue";
import indigo from "@material-ui/core/es/colors/indigo";
import IncreaseIcon from '@material-ui/icons/ArrowDropUp'
import DecreaseIcon from '@material-ui/icons/ArrowDropDown'

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: blue,
    },
});

export default {
    appTitle: "Influence", //Just a code name for now, will change in the future
    theme: theme,
}

