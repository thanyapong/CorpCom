import React from "react";
import { Divider, Grid, makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CorpComBannerPositionTable from "./CorpComBannerPositionTable";

const useStyles = makeStyles((theme) => ({
    divStyle: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
    },
    accordionStyle: {
        boxShadow: theme.shadows[1],
    },
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        textAlign: "center",
    },
}));

function CorpComBannerPosition() {
    const classes = useStyles();

    return (
        <div className={classes.divStyle}>
            <Accordion square defaultExpanded className={classes.accordionStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Grid container direction="row" justifyContent="center" >
                        <Typography className={classes.heading}>Banner's Position</Typography>
                    </Grid>
                </AccordionSummary>
                <Divider/>
                <AccordionDetails>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop: 8 }}>
                        <CorpComBannerPositionTable />
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CorpComBannerPosition;
