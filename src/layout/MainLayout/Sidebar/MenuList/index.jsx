// material-ui
import {Typography} from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import {useSelector} from "react-redux";
import {ROLE_ADMIN, ROLE_SUPERVISOR} from "../../../../config";

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const {profile} = useSelector(state => state.profile);
    const role = profile?.role;

    let items = [];

    switch (role) {
        case ROLE_ADMIN:
            items = menuItem.adminItems;
            break;
        case ROLE_SUPERVISOR:
            items = menuItem.supervisorItems;
            break;
        default:
            break;
    }

    const navItems = items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item}/>;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;
