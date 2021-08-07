import React, { useState } from 'react';
import HorizontalStepper from "./HorizontalStepper";
import PersonalData from "./PersonalData";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Hero from "../components/Hero";
import InvestmentParameters from "./InvestmentParameters";
import Dashboard from "./Dashboard";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(4),
        margin: theme.spacing(1),
        minWidth: 300,
    },
}));
export default function App() {
    const classes = useStyles();
    const [name, setName] = useState('Milen');
    const [income, setIncome] = useState(2000);
    const [risk, setRisk] = useState(5);

    const labels = ['Personal Data', 'Investment Parameters', 'Portfolio Projection'];
    const components = [
        <PersonalData
            name={name}
            onChangeName={setName}/>,
        <InvestmentParameters
            income={income}
            onChangeIncome={setIncome}
            risk={risk}
            onChangeRisk={setRisk}/>,
        <Dashboard
            name={name}
            income={income}
            risk={risk}
        />,
    ];

    return (
        <Container maxWidth="md">
            <Paper variant="elevation" className={classes.paper}>
                <Hero/>
            </Paper>
            <Paper variant="elevation" className={classes.paper}>
                <HorizontalStepper labels={labels} components={components}/>
            </Paper>
        </Container>
    )
}
