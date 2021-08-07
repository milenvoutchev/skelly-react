import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import RiskSlider from "../components/RiskSlider";
import CurrencyInput from "../components/CurrencyInput";

const useStyles = makeStyles((theme) => ({
    labeledInput: {
        marginBottom: theme.spacing(2),
    }
}));

export default function InvestmentParameters({income, onChangeIncome, risk, onChangeRisk}) {
    const classes = useStyles();

    return (
        <form>
            <div className={classes.labeledInput}>
                <Typography id="income-label">
                    How much do you earn? ($/month)
                </Typography>

                <CurrencyInput
                    defaultValue={income}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="income"
                    aria-labelledby="income-label"
                    onValueChange={onChangeIncome}
                />
            </div>

            <div className={classes.labeledInput}>
                <Typography id="risk-slider-label">
                    What is your risk tolerance level?
                </Typography>
                <RiskSlider
                    value={risk}
                    name="risk-slider"
                    aria-labelledby="risk-slider-label"
                    onChange={onChangeRisk}/>
            </div>
        </form>
    )
}
