import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Layout/Home/Home";
import Task from "../Layout/Task/Task";
import DashBoard from "../Layout/DashBoard/DashBoard";
import SignIn from "../Layout/SignIn/SignIn";
import SignUp from "../Layout/SignUp/SignUp";

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
                element:<DashBoard></DashBoard>
            },
            {
                path:'/login',
                element:<SignIn></SignIn>
            },
            {
                path:'/create',
                element:<SignUp></SignUp>
            },
        ]
    },
]);
export default router;