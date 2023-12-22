import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Layout/Home/Home";
import Task from "../Layout/Task/Task";
import DashBoard from "../Layout/DashBoard/DashBoard";
import SignIn from "../Layout/SignIn/SignIn";
import SignUp from "../Layout/SignUp/SignUp";
import TaskDetails from "../Layout/TaskDetails/TaskDetails";
import PrivateRoute from "../private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/task',
                element:<Task></Task>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            },
            {
                path:'/login',
                element:<SignIn></SignIn>
            },
            {
                path:'/create',
                element:<SignUp></SignUp>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>
            },
        ]
    },
]);
export default router;