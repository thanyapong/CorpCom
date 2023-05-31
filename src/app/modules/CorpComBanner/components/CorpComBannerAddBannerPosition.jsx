import React from "react";
import { Button, Divider, Grid, makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useFormik } from "formik";
import FormikTextField from "../../_common/components/CustomFormik/FormikTextField";
import { blue } from "@material-ui/core/colors";
import * as corpComBannerApi from "../corpComBannerApi"; 

const useStyles = makeStyles((theme) => ({
    divStyle: {
        marginTop: theme.spacing(4),
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
        fontSize: 14
    },
    heightStyle: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
            textAlign: 'left'
        },
        fontSize: 14,
        textAlign: 'center'
    },
    addPositionButton: {
        color: "#FFFFFF",
        fontFamily: "sarabun",
        backgroundColor: "#1DB0E6",
        height: "39px",
        "&:hover": {
            backgroundColor: blue[300],
        },
    },
}));

function CorpComBannerAddBannerPosition() {
    const classes = useStyles();

    const formik = useFormik({
        enableReinitialize: true,
        validate: (values) => {
            const errors = {};



            return errors;
        },
        initialValues: {
            positionName: '',
            description: '',
            width: '',
            height: ''
        },
        onSubmit: (values) => {
            formik.setSubmitting(false);


        },
    });

    const positionData = corpComBannerApi.useGetPosition();

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={classes.divStyle}>
                <Accordion square defaultExpanded className={classes.accordionStyle}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <Grid container direction="row" justifyContent="center">
                            <Typography className={classes.heading}>Add Banner's Position</Typography>
                        </Grid>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start" spacing={3} style={{ marginTop: 8 }}>
                            <Grid item xs={5} sm={3} md={2} lg={2}>
                                <Typography className={classes.header}>
                                    Position Name
                                </Typography>   
                            </Grid>
                            <Grid item xs={12} sm={9} md={10} lg={10}>
                                <FormikTextField
                                    formik={formik}
                                    name="positionName"
                                    label="Position Name"
                                    size={'small'}
                                />
                            </Grid>
                            <Grid item xs={5} sm={3} md={2} lg={2}>
                                <Typography className={classes.header}>
                                    Description
                                </Typography>   
                            </Grid>
                            <Grid item xs={12} sm={9} md={10} lg={10}>
                                <FormikTextField
                                    formik={formik}
                                    name="description"
                                    label="Description"
                                    size={'small'}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={2} lg={2}>
                                <Typography className={classes.header}>
                                    Dimension
                                </Typography>   
                            </Grid>
                            <Grid item xs={12} sm={3} md={1} lg={1}>
                                <Typography className={classes.header}>
                                    Width
                                </Typography>  
                            </Grid>
                            <Grid item xs={12} sm={9} md={4} lg={4}>
                                <FormikTextField
                                    formik={formik}
                                    name="width"
                                    label="Width"
                                    size={'small'}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3} md={1} lg={1}>
                                <Typography className={classes.heightStyle}>
                                    Height
                                </Typography>  
                            </Grid>
                            <Grid item xs={12} sm={9} md={4} lg={4}>
                                <FormikTextField
                                    formik={formik}
                                    name="height"
                                    label="Height"
                                    size={'small'}
                                />
                            </Grid>
                            <Grid container direction="row" justifyContent="flex-end" item lg={12}>
                                <Grid item xs={12} sm={12} md={3} lg={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        className={classes.addPositionButton}
                                        size="medium"
                                        fullWidth
                                    >
                                        ADD Position
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </div>
        </form>
    );
}

export default CorpComBannerAddBannerPosition;
