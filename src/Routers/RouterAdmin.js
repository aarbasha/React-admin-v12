import Dashborde from "../components/admin/Dashborde"
import Index2 from "../components/admin/Index2"

export const RouterAdmin = () => {
    return (
        [
            {
                path: "index",
                element: <Dashborde />,
            },
            {
                path: "app",
                element: <Index2 />,
            },
        ]
    )
}