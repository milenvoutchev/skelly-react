import React, { useEffect, useState } from "react";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import ProjectionChart from "../components/ProjectionChart";
import Portfolio from "../service/Portfolio";

export default function Dashboard({name, income, risk}) {
    const [performance, setPerformance] = useState([]);
    const [periodStart, setPeriodStart] = useState();
    const [periodEnd, setPeriodEnd] = useState();
    const [portfolioAmount, setPortfolioAmount] = useState();
    const [returns, setReturns] = useState();
    const [contributions, setContributions] = useState();
    const portfolio = new Portfolio(risk, income);

    useEffect(() => {
        portfolio.getProjection()
            .then(projection => {
                setPerformance(projection.performance);
                setPeriodStart(new Date(projection.meta.periodStart).toDateString());
                setPeriodEnd(new Date(projection.meta.periodEnd).toDateString());
                setPortfolioAmount(projection.meta.portfolioAmount);
                setReturns(projection.meta.returns);
                setContributions(projection.meta.contributions);
            });
    }, []);

    return (
        <React.Fragment>
            {performance.length ?
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Hello {name}!
                        </Typography>
                        <Typography variant="body1">
                            At risk level of <b>{risk}</b>, your portfolio has developed between <b>{periodStart}</b> and <b>{periodEnd}</b>.
                        </Typography>
                        <Typography variant="body1">
                            By that point, the total portfolio amount is at <b>${portfolioAmount}</b>.
                        </Typography>
                        <Typography variant="body1">
                            Of that total, contributions account for <b>${contributions}</b> while <b>${returns}</b> is earned returns.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectionChart data={performance}/>
                    </Grid>
                </Grid>
                :
                <LinearProgress/>
            }
        </React.Fragment>
    )
}
