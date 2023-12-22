import { useEffect, useState } from "react";
import useMyTask from "../../../Hooks/useMyTask/useMyTask";
import { Link } from "react-router-dom";



const MyTask = () => {

    const [MyTask] = useMyTask();
    console.log(MyTask);
    const [Opentask, setOpenTask] = useState([]);
    const [ProgressTask, setProgressTask] = useState([]);
    const [DoneTask, setDonetask] = useState([]);

    useEffect(() => {
        const openTasks = MyTask.filter((openTask) => openTask.Type === 'open');
        setOpenTask(openTasks)

    }, [MyTask])
    useEffect(() => {

        const progressTasks = MyTask.filter((progressTasks) => progressTasks.Type === 'inprogress')
        setProgressTask(progressTasks)
    }, [MyTask])
    useEffect(() => {

        const doneTasks = MyTask.filter((doneTask) => doneTask.Type === 'done')
        setDonetask(doneTasks)
    }, [MyTask]);
    
    return (
        <div className="grid grid-cols-3 h-[80vh]">

            <div className="bg-green-200">
                <h1 className="bg-gray-400 text-center text-xl font-bold text-white p-2">Open</h1>
                <ul className="list-none p-4 ">
                    {
                        Opentask.map((taskData, index) =>
                        <Link to={`/details/${taskData._id}`} key={index}><li key={index} className="bg-gray-200 p-2 mb-2 rounded-md">{taskData.TaskName}</li></Link>
                        )}

                </ul>
            </div>

            <div className="bg-red-300">
                <h1 className="bg-gray-400 text-center text-xl font-bold text-white p-2">In progress</h1>
                <ul className="list-none p-4 ">

                    {
                        ProgressTask.map((taskData, index) =>
                        <Link to={`/details/${taskData._id}`} key={index}><li key={index} className="bg-gray-200 p-2 mb-2 rounded-md">{taskData.TaskName}</li></Link>
                        )}
                </ul>
            </div>

            <div className="bg-yellow-200">
                <h1 className="bg-gray-400 text-center text-xl font-bold text-white p-2">Done</h1>
                <ul className="list-none p-4 ">

                    {
                        DoneTask.map((taskData, index) =>
                            <Link to={`/details/${taskData._id}`} key={index}><li key={index} className="bg-gray-200 p-2 mb-2 rounded-md">{taskData.TaskName}</li></Link>
                        )}
                </ul>
            </div>
        </div>
    );
};

export default MyTask;