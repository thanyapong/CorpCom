import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid, Typography, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useFormik } from 'formik';
import FormikTextField from '../../_common/components/CustomFormik/FormikTextField';

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
    header: {
        fontSize: 14,
    },
}));

function CorpComBannerEdit() {
    const classes = useStyles();

    const formik = useFormik({
        enableReinitialize: true,
        validate: (values) => {
            const errors = {};

            return errors;
        },
        initialValues: {

            linkURL: '',

        },
        onSubmit: (values) => {
            formik.setSubmitting(false);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={classes.divStyle}>
                <Accordion square defaultExpanded className={classes.accordionStyle}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <Grid container direction="row" justifyContent="center">
                            <Typography className={classes.heading}>Edit Banner's Data :: </Typography>
                        </Grid>
                    </AccordionSummary>
                    <Divider/>
                    <AccordionDetails>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start" style={{ marginTop: 10, marginBottom: 5 }}>
                            <Grid item xs={5} sm={3} md={2} lg={2}>
                                <Typography className={classes.header}>Banner's Image</Typography>
                            </Grid>
                            <Grid item xs={12} sm={9} md={10} lg={10}>
                                {/* <FormikTextField
                                    formik={formik}
                                    name="linkURL"
                                    label="Link URL"
                                    size={"small"}
                                /> */}
                                <img src={''} />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </div>
        </form>
    )
}

export default CorpComBannerEdit