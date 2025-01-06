import {ROLE_ADMIN, ROLE_SUPERVISOR} from "../config";
import {Navigate} from "react-router-dom";
import Loadable from "../ui-component/Loadable";
import React, {lazy} from "react";
import {useSelector} from "react-redux";

const SupervisorDashboard = Loadable(lazy(() => import('views/dashboard/SupervisorDashboard')));

export const RoleDashboard = () => {
    const {profile} = useSelector((state) => state.profile);
    const [role] = profile ? [profile.role] : [null];

    switch (role) {
        case ROLE_ADMIN:
            return <SupervisorDashboard/>
        case ROLE_SUPERVISOR:
            return <SupervisorDashboard/>
        default:
            return <Navigate to={"/"}/>; //Should be a landing page
    }
}

export default RoleDashboard;