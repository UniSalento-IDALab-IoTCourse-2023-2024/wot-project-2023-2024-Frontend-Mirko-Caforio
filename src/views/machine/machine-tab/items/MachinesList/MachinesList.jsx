import {useTheme} from "@mui/material/styles";
import {useDispatch, useSelector} from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useEffect, useRef, useState} from "react";
import {machineFilters} from "./Filters";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {
    BuildRounded, EditRounded,
    PlayArrowRounded,
    PrecisionManufacturingRounded,
    StopRounded,
    VisibilityTwoTone
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import MainCard from "../../../../../ui-component/cards/MainCard";
import ClassicTable from "../../../../../ui-component/table/ClassicTable";
import FilterButton from "../../../../../ui-component/extended/FilterButton";
import Popper from "@mui/material/Popper";
import Transitions from "../../../../../ui-component/extended/Transitions";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {MachineDialog} from "./MachineDialog";
import {maintenanceMachine, startMachine, stopMachine, workingMachine} from "../../../../../actions/machine";

const MachinesList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    const anchorRef = useRef(null);
    const [filterOpen, setFilterOpen] = useState(false);
    const [filter, setFilter] = useState(machineFilters);

    const [open, setOpen] = useState(false);
    const [action, setAction] = useState(null);
    const [handleAction, setHandleAction] = useState(() => () => {});
    const [element, setElement] = useState(null);

    const {machinesList} = useSelector((state) => state.machine);
    const [machineList, setMachineList] = useState(null);
    const [filteredMachine, setFilteredMachine] = useState(null);

    useEffect(() => {
        if (machinesList) {
            setMachineList(machinesList.machinesList);
        }

    }, [machinesList]);

    useEffect(() => {
        if (machineList) {
            const machineStatus = filter?.machineStatus;

            if (filter?.machineStatus?.all?.status) {
                setFilteredMachine(machineList);
            } else {
                setFilteredMachine(machineList.filter(element =>
                    Object.keys(machineFilters.machineStatus)
                        .some(status => machineStatus[status]?.status && element.status === machineFilters.machineStatus[status]?.value)
                ));
            }
        }
    }, [machineList, filter?.machineStatus?.all?.status, filter?.machineStatus]);

    const handleFilterToggle = () => {
        setFilterOpen(!filterOpen);
    }

    const handleFilterClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setFilterOpen(false);
    }

    const handleStatusCheckboxChange = (event) => {
        const {name, checked} = event.target;

        setFilter(prevFilter => {
            if (name) {
                const newFilter = {
                    ...prevFilter,
                    machineStatus: {
                        ...prevFilter.machineStatus,
                        [name]: {
                            ...prevFilter.machineStatus[name],
                            status: checked
                        },
                        all: {
                            ...prevFilter.machineStatus.all,
                            status: false
                        }
                    }
                };

                newFilter.machineStatus.all.status = !!(
                    (newFilter.machineStatus?.active?.status && newFilter.machineStatus?.working?.status && newFilter.machineStatus?.inactive?.status && newFilter.machineStatus?.maintenance?.status)
                    ||
                    (!newFilter.machineStatus?.active?.status && !newFilter.machineStatus?.working?.status && !newFilter.machineStatus?.inactive?.status && !newFilter.machineStatus?.maintenance?.status)
                );

                return newFilter;
            }
        });
    }

    const handleView = () => {
        handleClose();
    }

    const handleStart = (element) => {
        dispatch(startMachine(element?.id));
        handleClose();
    }

    const handleStop = (element) => {
        dispatch(stopMachine(element?.id));
        handleClose();
    }

    const handleWork = (element) => {
        dispatch(workingMachine(element?.id));
        handleClose();
    }

    const handleMaintenance = (element) => {
        dispatch(maintenanceMachine(element?.id));
        handleClose();
    }

    const handleEdit = () => {
        handleClose();
    }

    const handleOpen = (element, handleAction, action) => {
        setAction(action);
        setHandleAction(handleAction);
        setOpen(true);
        setElement(element);
    }

    const handleClose = () => {
        setOpen(false);
        setAction(null);
        setHandleAction(null);
        setElement(null);
    }

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

    const getActions = (element) => {
        let actions = [];

        switch (element?.status) {
            case "INACTIVE":
                actions.push(
                    <Tooltip title={"Start"} key={"start_" + element?.name} disableInteractive>
                        <IconButton aria-label="start" onClick={() => {
                            handleOpen(element, () => () => handleStart(element), "Start")
                        }}>
                            <PlayArrowRounded color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                actions.push(
                    <Tooltip title={"Maintenance"} key={"maintenance_" + element?.name} disableInteractive>
                        <IconButton aria-label="maintenace" onClick={() => {
                            handleOpen(element, () => () => handleMaintenance(element), "Maintenance")
                        }}>
                            <BuildRounded color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                actions.push(
                    <Tooltip title={"Edit"} key={"edit" + element?.name} disableInteractive>
                        <IconButton aria-label="edit" onClick={() => {
                            handleOpen(element, () => () => handleEdit(element), "Edit")
                        }}>
                            <EditRounded color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                actions.push(
                    <Tooltip title={"View"} key={"view_" + element?.name} disableInteractive>
                        <IconButton aria-label="view" onClick={() => {
                            handleOpen(element, () => () => handleView(), "View")
                        }}>
                            <VisibilityTwoTone color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                break;

            case "ACTIVE":
                actions.push(
                    <Tooltip title={"Work"} key={"work_" + element?.name} disableInteractive>
                        <IconButton aria-label="work" onClick={() => {
                            handleOpen(element, () => () => handleWork(element), "Work")
                        }}>
                            <PrecisionManufacturingRounded color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                actions.push(
                    <Tooltip title={"Stop"} key={"stop_" + element?.name} disableInteractive>
                        <IconButton aria-label="stop" onClick={() => {
                            handleOpen(element, () => () => handleStop(element), "Stop")
                        }}>
                            <StopRounded color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                actions.push(
                    <Tooltip title={"View"} key={"view_" + element?.name} disableInteractive>
                        <IconButton aria-label="view" onClick={() => {
                            handleOpen(element, () => () => handleView(), "View")
                        }}>
                            <VisibilityTwoTone color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                break;

            case "WORKING":
                actions.push(
                    <Tooltip title={"Stop"} key={"stop_" + element?.name} disableInteractive>
                        <IconButton aria-label="stop" onClick={() => {
                            handleOpen(element, () => () => handleStop(element), "Stop")
                        }}>
                            <StopRounded color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                actions.push(
                    <Tooltip title={"View"} key={"view_" + element?.name} disableInteractive>
                        <IconButton aria-label="view" onClick={() => {
                            handleOpen(element, () => () => handleView(), "View")
                        }}>
                            <VisibilityTwoTone color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                break;

            case "MAINTENANCE":
                actions.push(
                    <Tooltip title={"Stop"} key={"stop_" + element?.name} disableInteractive>
                        <IconButton aria-label="stop" onClick={() => {
                            handleOpen(element, () => () => handleStop(element), "Stop")
                        }}>
                            <StopRounded color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                actions.push(
                    <Tooltip title={"View"} key={"view_" + element?.name} disableInteractive>
                        <IconButton aria-label="view" onClick={() => {
                            handleOpen(element, () => () => handleView(), "View")
                        }}>
                            <VisibilityTwoTone color="primary"/>
                        </IconButton>
                    </Tooltip>
                );

                break;
        }

        return actions;
    }

    const columns = [
        {
            id: 'machineName',
            numeric: false,
            disablePadding: false,
            label: 'Machine Name',
            searchable: true,
            key: true,
            content: (element) => {
                return (
                    <Typography variant="subtitle1">
                        {element?.name}
                    </Typography>
                )
            }
        },
        {
            id: 'manufacturingMachineType',
            numeric: false,
            disablePadding: false,
            label: 'Machine Type',
            content: (element) => {
                return (
                    <Typography variant="subtitle1">
                        {element?.manufacturingMachineType}
                    </Typography>
                )
            }
        },
        {
            id: 'brandName',
            numeric: false,
            disablePadding: false,
            label: 'Brand',
            align: 'left',
            disableOrdering: true,
            content: (element) => {
                return (
                    <Typography variant="subtitle1">
                        {element?.brandName}
                    </Typography>
                )
            }
        },
        {
            id: 'machineStatus',
            numeric: false,
            disablePadding: false,
            label: 'Status',
            align: 'left',
            content: (element) => {
                return (
                    getStatusChip(element?.status)
                )
            }
        },
        {
            id: 'action',
            numeric: false,
            disablePadding: true,
            label: 'Actions',
            align: 'center',
            disableOrdering: true,
            content: (element) => {
                return (
                    getActions(element)
                )
            }
        }
    ];

    return (
        <MainCard>
            <ClassicTable
                searchLabel={"Search by machine name"}
                data={filteredMachine}
                columns={columns}
                header={
                    <FilterButton
                        title={"Filter"}
                        clicked={filterOpen}
                        onClick={handleFilterToggle}
                        ref={anchorRef}
                    />
                }
            />
            {
                open && (
                    <MachineDialog
                        open={open}
                        action={action}
                        handleClose={handleClose}
                        handleConfirm={handleAction}
                        element={element}
                    />
                )
            }
            <Popper
                placement={matchesXs ? 'bottom' : 'bottom-end'}
                open={filterOpen}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [matchesXs ? 5 : 0, 20]
                            }
                        }
                    ]
                }}
            >
                {({TransitionProps}) => (
                    <Transitions position={matchesXs ? 'top' : 'top-right'} in={filterOpen} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleFilterClose}>
                                <MainCard border={false} elevation={16} content={false} boxShadow
                                          shadow={theme.shadows[16]}>
                                    <Grid container direction="column" spacing={2} sx={{padding: 2, paddingRight: 3}}>
                                        <Grid item>
                                            <Typography variant="h5" gutterBottom>
                                                Invoice Status
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Stack direction={matchesXs ? 'column' : 'row'} spacing={2}>
                                                {Object.keys(machineFilters.machineStatus)
                                                    .filter(status => machineFilters.machineStatus[status].show)
                                                    .map(status => (
                                                        <FormControlLabel
                                                            key={status}
                                                            control={
                                                                <Checkbox
                                                                    checked={filter?.machineStatus[status]?.status}
                                                                    onChange={handleStatusCheckboxChange}
                                                                    name={status}
                                                                    color={machineFilters.machineStatus[status].color}
                                                                />
                                                            }
                                                            label={status.charAt(0).toUpperCase() + status.slice(1)}
                                                        />
                                                    ))
                                                }
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </MainCard>
    )
}

export default MachinesList