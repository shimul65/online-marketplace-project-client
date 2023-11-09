import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddJob from "../Pages/AddJob";
import MyBids from "../Pages/MyBids";
import BidsRequest from "../Pages/BidsRequest";
import JobsDetails from "../Pages/JobsDetails";
import MyPostedJobs from "../Pages/MyPostedJobs";
import PrivateRoutes from "./PrivateRoutes";
import UpdateJobs from "../Pages/UpdateJobs";
import JobCategories from "../Components/Jobs/JobCategories";
import Company from "../Components/Company/Company";

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
                path: "/job",
                element: <JobCategories></JobCategories>,
            },
            {
                path: "/company",
                element: <Company></Company>,
            },
            {
                path: "/addJob",
                element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>,
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoutes><JobsDetails></JobsDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://online-marketplace-client.vercel.app/jobs/${params.id}`)
            },
            {
                path: "/updatedJob/:id",
                element: <PrivateRoutes><UpdateJobs></UpdateJobs></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://online-marketplace-client.vercel.app/jobs/${params.id}`)
            },
            {
                path: "/postedJob",
                element: <PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>,
            },
            {
                path: "/bids",
                element: <PrivateRoutes><MyBids></MyBids></PrivateRoutes>,
            },
            {
                path: "/bidsRequest",
                element: <PrivateRoutes><BidsRequest></BidsRequest></PrivateRoutes>,
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