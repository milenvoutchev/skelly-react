import { Slider } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    rangeLabel: {
        display: "flex",
        justifyContent: "space-between",
        "& .MuiTypography-subtitle2": {
            color: theme.palette.text.hint,
            fontWeight: theme.typography.fontWeightRegular,
        }
    },
}));

export default function RiskSlider({onChange, ...props}) {
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        onChange(newValue);
    };
    return (
        <React.Fragment>
            <Slider
                {...props}
                min={0}
                step={1}
                max={10}
                valueLabelDisplay="auto"
                marks={false}
                track={false}
                onChange={handleChange}
            />
            <div className={classes.rangeLabel}>
                <div>
                    <Typography variant="subtitle2">Cautious</Typography>
                </div>
                <div>
                    <Typography variant="subtitle2">Bold</Typography>
                </div>
            </div>

        </React.Fragment>
    )
}
