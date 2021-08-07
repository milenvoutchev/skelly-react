import { Avatar } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.light,
    },
}));

export default function Hero() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Avatar className={classes.avatar}>
                <AccountCircle/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Portfolio Allocation Model
            </Typography>
            <Typography align="center">
                Every portfolio is different. Our allocation tool offers model portfolios based on various risk tolerances to help understand different ways a portfolio can be
                constructed.
            </Typography>
        </React.Fragment>
    )
}
