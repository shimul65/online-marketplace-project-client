import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddJob from "../Pages/AddJob";
import MyPostedJob from "../Pages/MyPostedJob";
import MyBids from "../Pages/MyBids";
import BidsRequest from "../Pages/BidsRequest";
import JobsDetails from "../Pages/JobsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/addJob",
                element: <AddJob></AddJob>,
            },
            {
                path: "/jobs/:id",
                element: <JobsDetails></JobsDetails>,
                loader: ({params}) => fetch(`http://localhost:5055/jobs/${params.id}`)
            },
            {
                path: "/postedJob",
                element: <MyPostedJob></MyPostedJob>,
            },
            {
                path: "/bids",
                element: <MyBids></MyBids>,
            },
            {
                path: "/bidsRequest",
                element: <BidsRequest></BidsRequest>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    }
]);


export default router;