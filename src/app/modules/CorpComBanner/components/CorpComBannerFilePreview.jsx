import React from "react";
import { AppBar, Dialog, DialogContent, DialogTitle, Grid, IconButton, Paper, Slide, Toolbar, Typography, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./Ifram.css";

const useStyle = makeStyles((theme) => ({
    paper: {
        position: "relative",
        overflow: "hidden",
        paddingBottom: "56.25%",
    },
    appBar: {
        position: "relative",
        backgroundColor: "#1db0e6",
    },
    title: {
        flex: 1,
        color: "#fff",
    },
}));

function CorpComBannerFilePreview({ isOpen, setIsOpen, filePreview, setFilePreview }) {
    const classes = useStyle();
    const frame = React.useRef(null);
    const dialogRef = React.useRef(null);

    const handleCloseApp = () => {
        setIsOpen(false);
    };

    React.useEffect(() => {
        if (filePreview?.isSet === true) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (frame.current.src != null) {
                    frame.current.src = filePreview.targetResult;
                }
            };
            reader.readAsDataURL(filePreview.targetFile0);
        }
    }, [isOpen]);

    return (
        <div>
            <Dialog
                onClose={(event, reason) => {
                    if (reason === "escapeKeyDown") {
                        handleCloseApp();
                    } else if (reason === "backdropClick") {
                        handleCloseApp();
                    }
                }}
                ref={dialogRef}
                open={isOpen}
                fullWidth
                maxWidth="lg"
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                scroll="paper"
                PaperProps={{
                    style: { width: '100%', height: '100%' },
                }}
            >
                <React.Fragment>
                    <DialogTitle className={classes.appBar}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Typography variant="h6" className={classes.title}>
                                File Preview
                            </Typography>
                            <IconButton edge="start" color="inherit" onClick={handleCloseApp} aria-label="close" style={{ color: '#fff' }}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </DialogTitle>
                    <DialogContent dividers>
                        <div class="iframe-container">
                            <iframe src="about:blank" ref={frame} allow="encrypted-media" />
                        </div>
                    </DialogContent>
                </React.Fragment>
            </Dialog>
        </div>
    );
}

export default CorpComBannerFilePreview;
