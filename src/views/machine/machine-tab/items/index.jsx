// material-ui
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

// project imports
import MachinesList from "./MachinesList/MachinesList";
import AddMachine from "./AddMachine/AddMachine";

const machineTabItems = {
    items: [
        {
            tab: <MachinesList/>,
            icon: <FormatListBulletedOutlinedIcon fontSize="small" />,
            title: "Machines list",
            value: "1"
        },
        {
            tab: <AddMachine/>,
            icon: <PrecisionManufacturingIcon fontSize="small" />,
            title: "Insert machine",
            value: "2"
        }
    ]
};

export default machineTabItems;