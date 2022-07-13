import Singup from "../layouts/auth/Singup"
import Login from "../layouts/auth/Login"
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
                path: 'user',
                element: <MasterAuth />,
                children: RouteAuthUser()

            }
        ]
    )
}