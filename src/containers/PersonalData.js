import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    labeledInput: {
        marginBottom: theme.spacing(2),
    }
}));

export default function PersonalData({name, onChangeName}) {
    const classes = useStyles();

    const handleName = event => onChangeName(event.target.value);

    return (
        <form>
            <div className={classes.labeledInput}>
                <Typography id="name-label">
                    What is your name?
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="name"
                    autoFocus
                    aria-labelledby="name-label"
                    value={name}
                    onChange={handleName}
                />
            </div>
        </form>
    )
}
