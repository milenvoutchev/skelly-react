import React from 'react';
import { render } from "react-dom";
import App from "./containers/App";
import AppTheme from "./theme/AppTheme";
import { ThemeProvider } from "@material-ui/core";

render(<ThemeProvider theme={AppTheme}><App /></ThemeProvider>, document.getElementById("app"));

