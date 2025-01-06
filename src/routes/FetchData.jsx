import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getProfileData} from "../actions/profile";
import {getPopupNotificationByEmail} from "../actions/notification";
import {getAllMachines} from "../actions/machine";

const FetchData = ({children, type}) => {
    const dispatch = useDispatch();
    let fetchData;
    switch (type) {
        case "profile":
            fetchData = getProfileData;
            break;
        case "notification":
            fetchData = getPopupNotificationByEmail;
            break;
        case "machine":
            fetchData = getAllMachines;
            break;
        default:
            fetchData = getProfileData;
            break;
    }

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch, fetchData]);

    return children;
}

export default FetchData;