import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./component/ErrorPage"
import CreateJob from "./component/CreateJob";
import Jobs from "./component/Jobs";

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <CreateJob />,
            },
            {
                path: "/Jobs",
                element: <Jobs />,
            },
        ]
    },

    // {
    //     path:"/joblist",
    //     element:<JobList/>,
    // },
])

export default appRoute