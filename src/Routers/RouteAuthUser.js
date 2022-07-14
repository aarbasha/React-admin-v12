
import Card from "../components/frontend/private/Card"
import Login from "../layouts/auth/Login"
import Favorite from "../components/frontend/private/Favorite"

export const RouteAuthUser = () => {
    return (
        [
            {
                path: "card",
                element: localStorage.getItem("auth") ? <Card /> : <Login />
            },
            {
                path: "favorite",
                element: localStorage.getItem("auth") ? <Favorite /> : <Login />
            }
        ]
    )

}