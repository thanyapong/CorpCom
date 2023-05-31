import React from "react";
import { Button, Divider, FormControlLabel, Grid, Radio, makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SaveIcon from '@material-ui/icons/Save';
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import { blue, green } from "@material-ui/core/colors";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useFormik } from "formik";
import FormikTextField from "../../_common/components/CustomFormik/FormikTextField";
import * as swal from "../../_common/components/SweetAlert";
import CorpComBannerFilePreview from "./CorpComBannerFilePreview";
import "./Ifram.css";

const useStyles = makeStyles((theme) => ({
    divStyle: {
        marginTop: theme.spacing(4),
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
    heightStyle: {
        [theme.breakpoints.down("sm")]: {
            fontSize: 14,
            textAlign: "left",
        },
        fontSize: 14,
        textAlign: "center",
    },
    addDocButton: {
        backgroundColor: "#fff",
        border: "1px solid #1db0e6",
        color: "#1db0e6",
    },
    fileDetails: {
        [theme.breakpoints.down("sm")]: {
            fontSize: 14,
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
        },
        fontSize: 14,
        textAlign: "center",
    },
    deleteFileButton: {
        color: "red",
        backgroundColor: "#fff",
        border: "1px solid red",
    },
    filePreview: {
        height: "40px",
        borderColor: green[200],
        border: "2px solid",
        color: green[200],
        textTransform: "capitalize",
    },
    addNewBannerButton: {
        color: "#FFFFFF",
        fontFamily: "sarabun",
        backgroundColor: "#1DB0E6",
        height: "39px",
        "&:hover": {
            backgroundColor: blue[300],
        },
    },
}));

function CorpComBannerDetailsNewBanner({ isOpen, setIsOpen, filePreview, setFilePreview }) {
    const classes = useStyles();
    const frame = React.useRef(null);
    const [inputKey, setInputKey] = React.useState(0);
    const [imageUrl, setImageUrl] = React.useState('');
    const [files, setFiles] = React.useState(null);
    const [filesname, setFilesname] = React.useState(null);
    const [priority, setPriority] = React.useState('');
    const [publish, setPublish] = React.useState('');

    const handleChangePriority = (event) => {
        setPriority(event.target.value);
    };

    const handleChangePublish = (event) => {
        setPublish(event.target.value);
    };

    const handleUpload = (event) => {
        if (event !== undefined && event?.target?.files.length !== 0) {
            const maxSizeInBytes = 414 * 125;
            if (event?.target?.files[0] && event?.target?.files[0].size > maxSizeInBytes) {
                swal.swalWarning('Warning.', 'The selected image exceeds the maximum allowed size');
                event.target.value = null; // Clear the input field
            } else {
                setFiles(event?.target?.files[0]);
                setFilesname(event?.target?.files[0].name);
                let targetFile = event?.target?.files;
                let targetFile0 = event?.target?.files[0];
                setFiles(event?.target?.files[0]);
                var reader = new FileReader();
                reader.onload = function (event) {
                    if (frame.current.src != null) {
                        frame.current.src = event.target.result;
                    }
                    const dataUrl = reader.result;
                    setImageUrl(dataUrl);
                    let payload = {
                        targetFile: targetFile,
                        targetFile0: targetFile0,
                        targetResult: event.target.result,
                        isSet: true,
                    };
                    setFilePreview(payload);
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };

    const handleFileClear = () => {
        if (frame.current) {
            setFiles(null);
            setFilesname(null);
            setFilePreview(null);
            setInputKey((prevKey) => prevKey + 1);
            frame.current.value = null;
            frame.current.src = null;
        }
    };

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

    // const href = window.location.href;

    // alert(href);

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={classes.divStyle}>
                <Accordion square defaultExpanded className={classes.accordionStyle}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <Grid container direction="row" justifyContent="center">
                            <Typography className={classes.heading}>Add New Banner</Typography>
                        </Grid>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails>
                        <Grid container direction="row" alignItems="center" justifyContent="flex-start" style={{ marginTop: 5, marginBottom: 5 }}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Typography className={classes.header}>Banner's Image</Typography>
                                </Grid>
                                <Grid container direction="row" alignItems="center" item style={{ marginTop: 10, marginBottom: 10 }}>
                                    <Grid item xs={12} sm={12} md={3} lg={2}>
                                        <input 
                                            accept=".jpg, .png, .pdf" 
                                            style={{ display: "none" }} 
                                            id="contained-button-file" 
                                            multiple 
                                            type="file" 
                                            onChange={handleUpload} 
                                            ref={frame} 
                                            key={inputKey} 
                                        />
                                        <label htmlFor="contained-button-file">
                                            <Button
                                                variant="contained"
                                                size="medium"
                                                className={classes.addDocButton}
                                                startIcon={<AddToPhotosIcon />} 
                                                component="span" 
                                                fullWidth
                                            >
                                                SELECT BANNER
                                            </Button>
                                        </label>
                                    </Grid>
                                    {files !== null && filesname !== undefined && (
                                        <Grid item xs={12} sm={12} md={7} lg={8}>
                                            <Typography className={classes.fileDetails}>
                                                {filesname} File Size {(files?.size * (1.0 * 0.000001)).toFixed(2)} MB
                                            </Typography>
                                        </Grid>
                                    )}
                                    {files !== null && filesname !== undefined && (
                                        <Grid item xs={12} sm={12} md={2} lg={2} style={{ textAlign: "right" }}>
                                            <Button
                                                size="medium"
                                                variant="contained"
                                                startIcon={<HighlightOffIcon/>}
                                                className={classes.deleteFileButton}
                                                onClick={handleFileClear}
                                                fullWidth
                                            >
                                                DELETE BANNER
                                            </Button>
                                        </Grid>
                                    )}
                                    {filePreview?.isSet &&
                                        <Grid item lg={12} style={{ marginTop: 15 }}>
                                            <img src={imageUrl} style={{ maxWidth: '100%' }}/>
                                        </Grid>
                                    }
                                    {/* {filePreview?.isSet === true && (
                                        <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop: 20 }}>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                className={classes.filePreview}
                                                onClick={() => {
                                                    setIsOpen(true);
                                                }}
                                                disabled={filePreview?.isSet === false ? true : false}
                                            >
                                                File Preview
                                            </Button>
                                        </Grid>
                                    )} */}
                                    <Grid item lg={12}>
                                        <Typography className={classes.header} style={{ marginTop: 10 }}>
                                            Banner ควรจะมีขนาด 414px*125px
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start" item lg={12} style={{ marginTop: 5, marginBottom: 5 }}>
                                <Grid item xs={5} sm={3} md={2} lg={2}>
                                    <Typography className={classes.header}>Link URL</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9} md={10} lg={10}>
                                    <FormikTextField
                                        formik={formik}
                                        name="linkURL"
                                        label="Link URL"
                                        size={"small"}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start" item lg={12} style={{ marginTop: 15, marginBottom: 5 }}>
                                <Grid item xs={5} sm={3} md={2} lg={2}>
                                    <Typography className={classes.header}>Priority</Typography>
                                </Grid>
                                <Grid container direction="row" alignItems="center" justifyContent="flex-start" item xs={12} sm={9} md={10} lg={10}>
                                    <Grid style={{ marginRight: 15 }}>
                                        <FormControlLabel
                                            value = "1"
                                            control= {<Radio />} 
                                            checked={priority === "1"}
                                            onChange={handleChangePriority}
                                            name="radio-buttons"
                                            label="Annoucement"
                                        />
                                    </Grid>
                                    <Grid style={{ marginRight: 15 }}>
                                        <FormControlLabel
                                            value = "2"
                                            control= {<Radio />} 
                                            checked={priority === "2"}
                                            onChange={handleChangePriority}
                                            name="radio-buttons"
                                            label="Sticky"
                                        />
                                    </Grid>
                                    <Grid style={{ marginRight: 15 }}>
                                        <FormControlLabel
                                            value = "3"
                                            control= {<Radio />} 
                                            checked={priority === "3"}
                                            onChange={handleChangePriority}
                                            name="radio-buttons"
                                            label="Normal"
                                            style={{ fontSize: 14 }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center" justifyContent="flex-start" item lg={12} style={{ marginTop: 15, marginBottom: 5 }}>
                                <Grid item xs={5} sm={3} md={2} lg={2}>
                                    <Typography className={classes.header}>Publish</Typography>
                                </Grid>
                                <Grid container direction="row" alignItems="center" justifyContent="flex-start" item xs={12} sm={9} md={10} lg={10}>
                                    <Grid style={{ marginRight: 15 }}>
                                        <FormControlLabel
                                            value = "1"
                                            control= {<Radio />} 
                                            checked={publish === "1"}
                                            onChange={handleChangePublish}
                                            name="radio-buttons"
                                            label="Hide"
                                        />
                                    </Grid>
                                    <Grid style={{ marginRight: 15 }}>
                                        <FormControlLabel
                                            value = "2"
                                            control= {<Radio />} 
                                            checked={publish === "2"}
                                            onChange={handleChangePublish}
                                            name="radio-buttons"
                                            label="Show"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justifyContent="flex-end" item lg={12}>
                                <Grid item xs={12} sm={12} md={3} lg={2}>
                                    <Button
                                        startIcon={<SaveIcon/>}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        className={classes.addNewBannerButton}
                                        size="medium"
                                        fullWidth
                                    >
                                        ADD BANNER
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                {/* <CorpComBannerFilePreview isOpen={isOpen} setIsOpen={setIsOpen} filePreview={filePreview} setFilePreview={setFilePreview} /> */}
                {/* {filePreview?.isSet &&
                    <iframe src={imageUrl} ref={frame} allow="encrypted-media" />    
                } */}
            </div>
        </form>
    );
}

export default CorpComBannerDetailsNewBanner;
