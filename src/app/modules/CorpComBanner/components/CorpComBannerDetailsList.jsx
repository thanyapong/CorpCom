import React from 'react';
import { Button, Divider, Grid, Typography, makeStyles } from "@material-ui/core";
import StandardDataTable from '../../_common/components/DataTable/StandardDataTable';

const useStyles = makeStyles((theme) => ({
    textColumnHeader: {
        fontFamily: "sarabun",
        textAlign: "center",
        fontSize: 13,
        fontWeight: "bold",
        color: "#000000",
    },
}));


function CorpComBannerDetailsList() {
    const classes = useStyles();

    const paginatedHandeler = (newPaginated) => { 
        //dispatch(premiumPAReportRedux.actions.updatePaginated(newPaginated));
    };

    const columns = [
        {
            name: "billNo",
            label: "ID",
            options: {
                sort: false,
                customHeadLabelRender: (options) => {
                    let cellStyle = {
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        marginLeft: "-8px",
                    };
                    return (
                        <Typography style={cellStyle} className={classes.textColumnHeader}>
                            {options.label}
                        </Typography>
                    );
                },
                customBodyRender: (val) => {
                    let cellStyle = {
                        whiteSpace: "nowrap",
                        textAlign: "left",
                    };
                    return (
                        <div style={{ height: "20px" }}>
                            <div style={cellStyle}>{val === null ? "-" : val}</div>
                        </div>
                    );
                },
            },
        },
        {
            name: "applicationCode",
            label: "Banner",
            options: {
                sort: false,
                customHeadLabelRender: (options) => {
                    let cellStyle = {
                        whiteSpace: "nowrap",
                        textAlign: "center",
                    };
                    return (
                        <Typography style={cellStyle} className={classes.textColumnHeader}>
                            {options.label}
                        </Typography>
                    );
                },
                customBodyRender: (val) => {
                    let cellStyle = {
                        whiteSpace: "nowrap",
                        textAlign: "center",
                    };
                    return (
                        <div style={{ height: "20px" }}>
                            <div style={cellStyle}>{val === null ? "-" : val}</div>
                        </div>
                    );
                },
            },
        },
        {
            name: "payerWorkPlaceName",
            label: "Priority",
            options: {
                sort: false,
                customHeadLabelRender: (options) => {
                    let cellStyle = {
                        whiteSpace: "nowrap",
                        textAlign: "left",
                    };
                    return (
                        <Typography style={cellStyle} className={classes.textColumnHeader}>
                            {options.label}
                        </Typography>
                    );
                },
                customBodyRender: (val) => {
                    let cellStyle = {
                        whiteSpace: "nowrap",
                        textAlign: "left",
                    };
                    let url = 'https://uatdocprv.siamsmile.co.th/2023/5/25/DOC202352513533196.JPG'
                    return (
                        <div style={{ height: "20px" }}>
                            <div style={cellStyle}>{url === null ? "-" : url}</div>
                        </div>
                    );
                },
            },
        },
        {
            name: "branchDetail",
            label: "Status",
            options: {
                sort: false,
                customHeadLabelRender: (options) => {
                    let cellStyle = {
                        whiteSpace: "nowrap",
                        textAlign: "left",
                    };
                    return (
                        <Typography style={cellStyle} className={classes.textColumnHeader}>
                            {options.label}
                        </Typography>
                    );
                },
                customBodyRender: (val) => {
                    let cellStyle = {
                        whiteSpace: "nowrap",
                        textAlign: "left",
                    };
                    return (
                        <div style={{ height: "20px" }}>
                            <div style={cellStyle}>{val === null ? "-" : val}</div>
                        </div>
                    );
                },
            },
        },
        {
            name: "",
            label: "",
            options: {
                sort: false,
                filter: false,
                customHeadLabelRender: (options) => {
                    let cellStyle = {
                        whiteSpace: "nowrap",
                        textAlign: "right",
                    };
                    return (
                        <Typography style={cellStyle} className={classes.textColumnHeader}>
                            {options.label}
                        </Typography>
                    );
                },
                customBodyRender: (val) => {
                    let cellStyle = {
                        whiteSpace: "nowrap",
                        textAlign: "right",
                    };
                    return (
                        <div style={{ height: "20px" }}>
                            <div style={cellStyle}>{val === null ? "-" : val.toLocaleString("th-TH", { minimumFractionDigits: 2 })}</div>
                        </div>
                    );
                },
            },
        },
    ];

    return (
        <div>
            <StandardDataTable
                name="corpComBannerDetails"
                denseTable
                title=""
                columns={columns} 
                // data={premiumPAReportData.data?.data}
                // paginated={premiumPAReportReducer.paginated}
                setPaginated={paginatedHandeler}
                headerbgcolor={"#FFF"}
                // totalRecords={premiumPAReportData.data?.totalAmountRecords}
                viewColumns={false}
            />
        </div>
    )
}

export default CorpComBannerDetailsList