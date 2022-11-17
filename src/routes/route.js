import { lazy } from 'react'
import { retry } from '../utils/retry'

const Home = lazy(() => retry(() => import('../presentation/Home')))
const Login = lazy(() => retry(() => import('../presentation/Login')))
const Dashboard = lazy(() => retry(() => import('../presentation/Dashboard')))
const UserManagement = lazy(() => retry(() => import('../presentation/UserManagement')))
const Permissions = lazy(() => retry(() => import('../presentation/Permissions')))
const ForgotPassword = lazy(() => retry(() => import('../presentation/ForgotPassword')))

export const Routes = [
    {
        id: "home_page",
        path: "/",
        name: "Home",
        element: <Home/>,
        publiclyAccess: true,
        exact: true
    },
    {
        id: "login_page",
        path: "/login",
        name: "Login",
        element: <Login/>,
        isAuthRoute: true,
        exact: true
    },
    {
        id: "forgot_password",
        path: "/forgot-password",
        name: "Forgot Password",
        element: <ForgotPassword/>,
        isAuthRoute: true,
        isHideNavbar: true,
        useAsLink: true,
        exact: true
    },
    {
        id: "dashboard",
        path: "/dashboard",
        name: "Dashboard",
        element: <Dashboard/>,
        role: ['super_admin', 'admin', 'manager', 'user'],
        exact: true
    },
    {
        id: "user_management",
        path: "/user-management",
        name: "User Management",
        element: <UserManagement/>,
        role: ['super_admin'],
        exact: true
    },
    {
        id: "use_permissions",
        path: "/user-permission/:id",
        name: "Permissions",
        element: <Permissions/>,
        role: ['super_admin'],
        isHideNavbar: true,
        exact: true
    }
]

export const publicRoute = () => {
    return Routes.filter(data => data['publiclyAccess'])
}

export const authRoutes = () => {
    return Routes.filter(data => data['isAuthRoute'])
}

export const privateRoutes = (role) => {
    return Routes.filter((value) => {
        if(Array.isArray(value.role)) return value?.role?.find(val => val === role)
        return null
    })
}