import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';

const icons = {
    PrecisionManufacturingRoundedIcon,
    FormatListBulletedOutlinedIcon,
    AddTaskRoundedIcon
};

const machine = {
    id: 'machine',
    title: 'Machines',
    type: 'group',
    children: [
        {
            id: 'management',
            title: 'Machine Management',
            type: 'collapse',
            icon: icons.PrecisionManufacturingRoundedIcon,

            children: [
                {
                    id: 'machineList',
                    title: 'Machine List',
                    type: 'item',
                    url: '/machine/list',
                    icon: icons.FormatListBulletedOutlinedIcon
                },
                {
                    id: 'addMachine',
                    title: 'Insert Machine',
                    type: 'item',
                    url: '/machine/insert',
                    icon: icons.AddTaskRoundedIcon
                }
            ]
        }
    ]
};

export default machine;