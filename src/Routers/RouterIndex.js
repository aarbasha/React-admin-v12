import React from 'react'
import { useRoutes } from 'react-router-dom'
import { RouterAdmin } from './RouterAdmin'
import { RouterUser } from './RouterUser'
import MasterAdmin from '../layouts/admin/MasterAdmin'
import MasterUsers from "../layouts/frontend/public/MasterUsers"
import Login from "../layouts/auth/Login"
import Error_404 from "../components/admin/Error_404"

const RouterIndex = () => {

    const Router = useRoutes([
        {
            path: "/admin",
            element: localStorage.getItem('auth') ? <MasterAdmin /> : <Login />,
            children: RouterAdmin()
        },
        {
            path: "/",
            element: <MasterUsers />,
            children: RouterUser()
        },
        {
            path: "*",
            element: <Error_404 />
        }
    ])

    return Router
}

export default RouterIndex