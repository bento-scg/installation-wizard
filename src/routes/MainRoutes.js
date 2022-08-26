import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import {
    Navigate //Link
} from 'react-router-dom';

// wizard routing
const ComponentStatus = Loadable(lazy(() => import('views/wizard/ComponentStatus')));
const Wifi = Loadable(lazy(() => import('views/wizard/Wifi')));
const IO = Loadable(lazy(() => import('views/wizard/IO')));
const Validate = Loadable(lazy(() => import('views/wizard/Validate')));
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const user = localStorage.user;

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <ComponentStatus />
        },
        {
            path: 'status',
            element: <ComponentStatus />
        },
        {
            path: 'io',
            element: <IO />
        },
        {
            path: 'wifi',
            element: user ? <Wifi /> : <Navigate to="/login" />
        },
        {
            path: 'validate',
            element: <Validate />
        }
    ]
};

export default MainRoutes;
