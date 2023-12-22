import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMyTask from "../../Hooks/useMyTask/useMyTask";
import { IoMdCloseCircleOutline } from "react-icons/io";
import useAxios from "../../Hooks/useAxios/useAxios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { MdAddCircleOutline } from "react-icons/md";


const TaskDetails = () => {
    const{id}=useParams();
    const[MyTask,refetch]=useMyTask();
    const [task,setTask] = useState({});

    const axiosLoader = useAxios();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();

    const handleTask =  (data) => {
        const updateTask = {...data,id}
       
        
        axiosLoader.patch('/update',updateTask)
        .then(res=>{
            console.log(res.data);
            
            if(res.data.modifiedCount>0){
                toast.success('Task updated')
                reset();
                refetch();
            }

        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    useEffect(()=>{
        const tasks=MyTask.find(taskdata=>taskdata._id===id);
        setTask(tasks);
    },[MyTask,id]);
    
    const{Type,deadLine,TaskName,TaskDescription} =task||'';
    return (
        <div className="flex justify-center items-center mt-20">
            <Toaster></Toaster>
            details about {id}
            <div>
                <h1 className="text-2xl">{TaskName}</h1>
                <p>Task Description: {TaskDescription}</p>
                <p>Task Type: {Type}</p>
                <p>Task DeadLine: {deadLine}</p>
                
                {/* modal */}
                <button className="btn text-xl " title="update task" onClick={() => document.getElementById('my_modal_1').showModal()}><MdAddCircleOutline />Update Task</button>
            <dialog id="my_modal_1" className="modal">

                <div className="modal-box">

                    {/* modal body st */}
                    <form onSubmit={handleSubmit(handleTask)}>
                        
                        <div className="form-control">
                            <label className="">
                                <span className="">Task Description</span>
                            </label>

                            <textarea {...register("TaskDescription", { required: true })}  className="input h-32 resize-none input-bordered " id="" cols="1" rows="10" placeholder="Description"></textarea>
                        </div>

                        

                        <div>
                            <button type="submit" className="btn mt-2 bg-fuchsia-300 hover:bg-fuchsia-400">Update task</button>
                        </div>
                    </form>
                    {/* modal body end*/}

                    {/* modal action close */}
                    <div className="absolute top-0 right-0">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="bg-transparent text-xl p-4"><IoMdCloseCircleOutline /></button>
                        </form>
                    </div>
                </div>
            </dialog>
            </div>
        </div>
    );
};

export default TaskDetails;