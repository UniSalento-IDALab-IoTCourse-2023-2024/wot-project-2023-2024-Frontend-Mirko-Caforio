import {lazy} from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import RouteGuard from './RouteGuard';
import {HOME_PATH, NOTIFICATION_DURATION, ROLE_SUPERVISOR} from "../config";
import FetchData from "./FetchData";
import {SnackbarProvider} from "notistack";
import NetworkCheck from "./NetworkCheck";
import RoleDashboard from "./RoleDashboard";

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const ProfilePage = Loadable(lazy(() => import('views/profile')));
const MachinePage = Loadable(lazy(() => import('views/machine')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <RouteGuard>
        <FetchData>
            <FetchData type="notification">
                <SnackbarProvider maxSnack={5} autoHideDuration={NOTIFICATION_DURATION}>
                    <MainLayout/>
                    <NetworkCheck/>
                </SnackbarProvider>
            </FetchData>
        </FetchData>
    </RouteGuard>,
    children: [
        {
            path: HOME_PATH,
            element:
                <RoleDashboard/>
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <RoleDashboard/>
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography/>
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor/>
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow/>
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage/>
        },
        {
            path: 'profile',
            element: <ProfilePage/>
        },
        {
            path: 'machine',
            children: [
                {
                    path: 'list',
                    element: <RouteGuard allowedRoles={[ROLE_SUPERVISOR]}>
                        <FetchData type={"machine"}>
                            <MachinePage initialValue={"1"}/>
                        </FetchData>
                    </RouteGuard>
                },
                {
                    path: 'insert',
                    element:
                        <RouteGuard allowedRoles={[ROLE_SUPERVISOR]}>
                            <MachinePage initialValue={"2"}/>
                        </RouteGuard>
                }
            ]
        },
    ]
};

export default MainRoutes;
