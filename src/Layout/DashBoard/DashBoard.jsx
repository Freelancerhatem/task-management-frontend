import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useState } from "react";
import AddTask from "../../components/dashboard components/AddTask/AddTask";
import MyTask from "../../components/dashboard components/MyTask/MyTask";


const DashBoard = () => {
    const { user } = useAuth();
    const [components, setComponents] = useState('addTask')

    const image = user?.photoURL;
    const name = user?.displayName

    return (
        <div className="h-screen">
            <div className="h-12 bg-fuchsia-400 grid grid-cols-2 px-10 justify-center gap-2 items-center">
                <div className="  flex gap-4">
                    <button onClick={() => setComponents('addTask')} className="btn btn-xs">Task Management</button>
                    <button onClick={() => setComponents('myTask')} className="btn btn-xs">My Task</button>

                </div>
                <div className="flex justify-end items-center">
                    <h1>{name}</h1>
                    <img className="w-10 rounded-full" src={image} alt="" />
                </div>
            </div>

            <div>
                {
                    components == 'addTask' ?
                        <div className="w-1/2 mx-auto mt-12">
                            <AddTask></AddTask>
                        </div>
                        :
                        components == 'myTask' ?
                            <div className="bg-slate-400 w-1/2 mx-auto mt-12">
                                <MyTask></MyTask>
                            </div>
                            : ''
                }
            </div>

        </div>
    );
};

export default DashBoard;