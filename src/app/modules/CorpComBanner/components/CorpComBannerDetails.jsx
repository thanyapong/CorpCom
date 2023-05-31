import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Button, Divider, Grid, Typography, makeStyles } from "@material-ui/core";
import CorpComBannerDetailsList from "./CorpComBannerDetailsList";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CorpComBannerDetailsNewBanner from "./CorpComBannerDetailsNewBanner";
import CorpComBannerEdit from "./CorpComBannerEdit";

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

function CorpComBannerDetails() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState(false);
    const [filePreview, setFilePreview] = React.useState(null);

    return (
        <div className={classes.divStyle}>
            <Accordion square defaultExpanded className={classes.accordionStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Grid container direction="row" justifyContent="center">
                        <Typography className={classes.heading}>Position :: </Typography>
                    </Grid>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop: 8 }}>
                        <CorpComBannerDetailsList />
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <CorpComBannerDetailsNewBanner isOpen = { isOpen } setIsOpen = { setIsOpen } filePreview = { filePreview } setFilePreview = { setFilePreview } />
            <CorpComBannerEdit/>
        </div>
    );
}

export default CorpComBannerDetails;
