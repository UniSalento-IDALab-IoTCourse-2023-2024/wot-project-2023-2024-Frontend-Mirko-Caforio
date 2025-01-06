// material-ui
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';

// project imports
import SecurityTab from "./Security";
import ProfileTab from "./Profile";

const profileTabItems = {
    supervisorItems: [
        {
            tab: <ProfileTab/>,
            icon: <AccountCircleIcon fontSize="small" />,
            title: "Profile",
            value: "1"
        },
        {
            tab: <SecurityTab/>,
            icon: <LockOpenIcon fontSize="small" />,
            title: "Security",
            value: "2"
        }
    ],
    adminItems: [
        {
            tab: <ProfileTab/>,
            icon: <AccountCircleIcon fontSize="small" />,
            title: "Profile",
            value: "1"
        },
        {
            tab: <SecurityTab/>,
            icon: <LockOpenIcon fontSize="small" />,
            title: "Security",
            value: "2"
        }
    ],
};

export default profileTabItems;