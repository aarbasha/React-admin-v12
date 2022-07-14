import Singup from "../layouts/auth/Singup"
import Login from "../layouts/auth/Login"
import ForgetPassword from "../layouts/auth/ForgetPassword"
import ConfirmCode from "../layouts/auth/ConfirmCode"
import ResetPassword from "../layouts/auth/ResetPassword"
import MasterAuth from "../layouts/frontend/private/MasterAuth"
import Home from '../components/frontend/public/Home'
import About from '../components/frontend/public/About'
import { RouteAuthUser } from "./RouteAuthUser"
export const RouterUser = () => {
    return (
        [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'login',
                element: localStorage.getItem("auth") ? <Home /> : <Login />
            },
            {
                path: 'singup',
                element: localStorage.getItem("auth") ? <Home /> : <Singup />
            },
            {
                path: 'forgetPassword',
                element: localStorage.getItem("auth") ? <Home /> : <ForgetPassword />
            },
            {
                path: 'confirmCode',
                element: localStorage.getItem("auth") ? <Home /> : <ConfirmCode />
            },
            {
                path: 'resetPassword',
                element: localStorage.getItem("auth") ? <Home /> : <ResetPassword />
            },
            {
                path: 'user',
                element: <MasterAuth />,
                children: RouteAuthUser()

            }
        ]
    )
}