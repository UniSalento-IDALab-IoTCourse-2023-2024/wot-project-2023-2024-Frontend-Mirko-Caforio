import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import * as Yup from "yup";
import {updateMachine} from "../../../../../actions/machine";
import PropTypes from "prop-types";
import {gridSpacing} from "../../../../../store/constant";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Typography from "@mui/material/Typography";
import SubCard from "../../../../../ui-component/cards/SubCard";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {Form, Formik} from "formik";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import AnimateButton from "../../../../../ui-component/extended/AnimateButton";
import Button from "@mui/material/Button";

export const UpdateMachineDialog = ({openState, handleClose, element}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(openState);

    const manufacturingMachineTypes = [
        {manufacturingMachineType: "Printer"},
        {manufacturingMachineType: "Scanner"},
        {manufacturingMachineType: "CNC"},
        {manufacturingMachineType: "Dryer"},
        {manufacturingMachineType: "Fan"},
        {manufacturingMachineType: "Grinding Machine"},
        {manufacturingMachineType: "Injection Molding"},
        {manufacturingMachineType: "Kiln"},
        {manufacturingMachineType: "Laser Cutter"},
        {manufacturingMachineType: "Lathe"},
        {manufacturingMachineType: "Milling Machine"},
        {manufacturingMachineType: "Mixer"},
        {manufacturingMachineType: "Oven"},
        {manufacturingMachineType: "Packaging"},
        {manufacturingMachineType: "Robot"},
        {manufacturingMachineType: "Saw"},
        {manufacturingMachineType: "Stamping Machine"}
    ];

    useEffect(() => {
        setOpen(openState);
    }, [openState]);

    const initialValues = {
        addressCountry: element.addressCountry,
        addressLocality: element.addressLocality,
        addressRegion: element.addressRegion,
        district: element.district,
        streetAddress: element.streetAddress,
        streetNumber: element.streetNumber,
        brandName: element.brandName,
        description: element.description,
        manufacturerName: element.manufacturerName,
        manufacturingMachineType: manufacturingMachineTypes.find(type => type.manufacturingMachineType.toLowerCase() === element.manufacturingMachineType).manufacturingMachineType,
        name: element.name,
        processDescription: element.processDescription,
        standardOperations: element.standardOperations,
        type: 'ManufacturingMachineModel',
        version: element.version,
    };

    const validationSchema = Yup.object().shape({
        addressCountry: Yup.string().required("Required"),
        addressLocality: Yup.string().required("Required"),
        addressRegion: Yup.string().required("Required"),
        district: Yup.string().required("Required"),
        streetAddress: Yup.string().required("Required"),
        streetNumber: Yup.string().required("Required"),
        brandName: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        manufacturerName: Yup.string().required("Required"),
        manufacturingMachineType: Yup.string().oneOf(manufacturingMachineTypes.map(type => type.manufacturingMachineType), `Manufacturing machine type must be one of ${manufacturingMachineTypes.map(type => type.type).join(', ')}`).required("Required"),
        name: Yup.string().required("Required"),
        processDescription: Yup.string().required("Required"),
        standardOperations: Yup.string().required("Required"),
        type: Yup.string().required("Required"),
        version: Yup.string().required("Required")
    });

    const handleUpdateMachine = (values) => {
        values = {
            ...values,
            id: element.id
        }

        return dispatch(updateMachine(values))
            .then(() => {
                return Promise.resolve();
            })
            .catch(() => {
                return Promise.reject();
            });
    }

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(true);
                        handleUpdateMachine(values)
                            .then(() => {
                                setSubmitting(false);
                                setOpen(false);
                            }).catch(() => {
                            setSubmitting(false);
                            setOpen(false);
                        });
                    }}
                >
                    {({
                          values,
                          errors,
                          handleBlur,
                          handleChange,
                          submitForm,
                          resetForm,
                          isSubmitting,
                          touched
                      }) => (
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>
                                <Typography variant="h4">Edit Machine</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <Form noValidate>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12} sm={12}>
                                            <SubCard title={"Machine Information"}>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="manufacturingMachineType"
                                                                label="Manufacturing Machine Type"
                                                                select
                                                                error={touched.manufacturingMachineType && !!errors.manufacturingMachineType}
                                                                value={values.manufacturingMachineType}
                                                                onBlur={handleBlur}
                                                                onChange={(e) => {
                                                                    handleChange(e);
                                                                }}
                                                                helperText="Please insert the manufacturing machine type"
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            >
                                                                {manufacturingMachineTypes.map((item, index) => (
                                                                    <MenuItem key={index} value={item.manufacturingMachineType}>
                                                                        {item.manufacturingMachineType}
                                                                    </MenuItem>
                                                                ))}
                                                            </TextField>
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="name"
                                                                label="Name"
                                                                value={values.name}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the name"
                                                                error={touched.name && !!errors.name}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="brandName"
                                                                label="Brand"
                                                                value={values.brandName}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the brand"
                                                                error={touched.brandName && !!errors.brandName}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="description"
                                                                label="Description"
                                                                value={values.description}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the description"
                                                                error={touched.description && !!errors.description}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="manufacturerName"
                                                                label="Manufacturer"
                                                                value={values.manufacturerName}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the manufacturer"
                                                                error={touched.manufacturerName && !!errors.manufacturerName}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="processDescription"
                                                                label="Process Description"
                                                                value={values.processDescription}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the process description"
                                                                error={touched.processDescription && !!errors.processDescription}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="standardOperations"
                                                                label="Standard Operations"
                                                                value={values.standardOperations}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the standard operations"
                                                                error={touched.standardOperations && !!errors.standardOperations}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="version"
                                                                label="Version"
                                                                value={values.version}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the version"
                                                                error={touched.version && !!errors.version}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </SubCard>
                                        </Grid>

                                        <Divider variant="middle" sx={{my: 2}}/>

                                        <Grid item xs={12} sm={12}>
                                            <SubCard title={"Location Information"}>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="addressCountry"
                                                                label="Country"
                                                                value={values.addressCountry}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the country"
                                                                error={touched.addressCountry && !!errors.addressCountry}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="addressLocality"
                                                                label="Locality"
                                                                value={values.addressLocality}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the locality"
                                                                error={touched.addressLocality && !!errors.addressLocality}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="addressRegion"
                                                                label="Region"
                                                                value={values.addressRegion}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the region"
                                                                error={touched.addressRegion && !!errors.addressRegion}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>

                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="district"
                                                                label="District"
                                                                value={values.district}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the district"
                                                                error={touched.district && !!errors.district}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="streetAddress"
                                                                label="Address"
                                                                value={values.streetAddress}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the street address"
                                                                error={touched.streetAddress && !!errors.streetAddress}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4}>
                                                        <FormControl fullWidth>
                                                            <TextField
                                                                fullWidth
                                                                name="streetNumber"
                                                                label="Number"
                                                                value={values.streetNumber}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                helperText="Please insert the street number"
                                                                error={touched.streetNumber && !!errors.streetNumber}
                                                                margin="normal"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                            />
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </SubCard>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </DialogContent>
                            <DialogActions>
                                <AnimateButton>
                                    <Button
                                        type="reset"
                                        disabled={isSubmitting}
                                        onClick={() => {
                                            resetForm();
                                        }}
                                    >
                                        Reset
                                    </Button>
                                </AnimateButton>
                                <AnimateButton>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                    >
                                        Update
                                    </Button>
                                </AnimateButton>
                            </DialogActions>
                        </Dialog>
                    )}
                </Formik>
            </Grid>
        </Grid>
    );
}

UpdateMachineDialog.propTypes = {
    openState: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    element: PropTypes.object.isRequired
};