import Singup from "../layouts/auth/Singup"
import Login from "../layouts/auth/Login"
import ForgetPassword from "../layouts/auth/ForgetPassword"
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
                element: <Login />
            },
            {
                path: 'singup',
                element: <Singup />
            },
            {
                path: 'forgetPassword',
                element: <ForgetPassword />
            },
            {
                path: 'user',
                element: <MasterAuth />,
                children: RouteAuthUser()

            }
        ]
    )
}