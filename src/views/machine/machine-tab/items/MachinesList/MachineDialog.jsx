import PropTypes from "prop-types";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Typography from "@mui/material/Typography";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import {UpdateMachineDialog} from "./UpdateMachineDialog";
import Grid from "@mui/material/Grid";
import SubCard from "../../../../../ui-component/cards/SubCard";
import {Logo32} from "../../../../../ui-component/Logo";
import AnimateButton from "../../../../../ui-component/extended/AnimateButton";
import Chip from "@mui/material/Chip";

export const MachineDialog = ({open, handleClose, handleConfirm, action, element}) => {
    const getStatusChip = (element) => {
        switch (element) {
            case "ACTIVE":
                return (
                    <Chip
                        label="Active"
                        color="success"
                        size="small"
                        sx={{cursor: "default"}}
                    />
                );
            case "WORKING":
                return (
                    <Chip
                        label="Woriking"
                        color="info"
                        size="small"
                        sx={{cursor: "default"}}
                    />
                );
            case "INACTIVE":
                return (
                    <Chip
                        label="Inactive"
                        color="error"
                        size="small"
                        sx={{cursor: "default"}}
                    />
                );
            case "MAINTENANCE":
                return (
                    <Chip
                        label="Maintenance"
                        color="warning"
                        size="small"
                        sx={{cursor: "default"}}
                    />
                );
        }
    }

    const getMachineDetails = (element) => {
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h3">
                        Machine Details
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <SubCard title={element.name} secondary={<Logo32/>}>
                        <Grid container spacing={5}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1">General information:</Typography>
                                <Typography variant="body1">Machine type: {element.manufacturingMachineType}</Typography>
                                <Typography variant="body1">Brand: {element.brandName}</Typography>
                                <Typography variant="body1">Machine version: {element.version}</Typography>
                                <Typography variant="body1">Manufacturer: {element.manufacturerName}</Typography>
                                <Typography variant="body1">
                                    Status: {getStatusChip(element.status)}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1">Location details:</Typography>
                                <Typography variant="body1">Country: {element.addressCountry}</Typography>
                                <Typography variant="body1">Region: {element.addressRegion}</Typography>
                                <Typography variant="body1">Locality: {element.addressLocality}</Typography>
                                <Typography variant="body1">District: {element.district}</Typography>
                                <Typography variant="body1">Address: {element.streetAddress}, {element.streetNumber}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Descriptive details:</Typography>
                                <Typography variant="body1">
                                    General description: {element.description}
                                </Typography>
                                <Typography variant="body1">
                                    Process description: {element.processDescription}
                                </Typography>
                                <Typography variant="body1">
                                    Standard operations: {element.standardOperations.join(', ')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </DialogContent>
                <DialogActions>
                    <AnimateButton>
                        <Button onClick={handleClose}>
                            Close
                        </Button>
                    </AnimateButton>
                </DialogActions>
            </Dialog>
        );
    }

    const getUpdateMachineDialog = () => {
        return (
            <UpdateMachineDialog openState={open} handleClose={handleClose} element={element}/>
        );
    }

    const getMachineStatusMessage = (action, element) => {
        switch (action) {
            case "Start":
                return "Do you want to start the " + element.name + " machine?"
            case "Stop":
                return "Do you want to stop the " + element.name + " machine?"
            case "Work":
                return "Do you want to put the " + element.name + " machine in work status?"
            case "Maintenance":
                return "Do you want to put the " + element.name + " machine in maintenance status?"
        }
    }

    const getMachineStatusDetails = (action, element) => {
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography variant="h3">
                        Changing status for {element.name}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {
                            getMachineStatusMessage(action, element)
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    const getDialog = (action) => {
        switch (action) {
            case "View":
                return getMachineDetails(element);
            case "Start":
                return getMachineStatusDetails(action, element);
            case "Stop":
                return getMachineStatusDetails(action, element);
            case "Work":
                return getMachineStatusDetails(action, element);
            case "Maintenance":
                return getMachineStatusDetails(action, element);
            case "Edit":
                return getUpdateMachineDialog();
            default:
                return `Are you sure you want to ${action} ${element.name}?`;
        }
    }

    return (
        getDialog(action)
    );
}

MachineDialog.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    handleConfirm: PropTypes.func,
    content: PropTypes.string,
    object: PropTypes.object,
    action: PropTypes.string,
    element: PropTypes.object
}