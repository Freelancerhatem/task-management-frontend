
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAxios from "../../../Hooks/useAxios/useAxios";
import useAuth from "../../../Hooks/useAuth/useAuth";
import toast, { Toaster } from "react-hot-toast";
const AddTask = () => {
    const{user}=useAuth();
    const{email}=user || ''
    const axiosLoader = useAxios();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();

    const handleTask =  (data) => {
        const addTaskData = {...data,email}
        
        axiosLoader.post('/addTask',addTaskData)
        .then(res=>{
            console.log(res.data);
            
            if(res.data.insertedId){
                toast.success('Task Added')
                reset();
            }

        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return (
        <div>
            <Toaster></Toaster>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn text-xl " title="Add task" onClick={() => document.getElementById('my_modal_1').showModal()}><MdAddCircleOutline />Add Task</button>
            <dialog id="my_modal_1" className="modal">

                <div className="modal-box">

                    {/* modal body st */}
                    <form onSubmit={handleSubmit(handleTask)}>
                        <div className="form-control space-y-2">
                            <label className="">
                                <span className="">Task Name</span>
                            </label>
                            <input {...register("TaskName", { required: true })} type="text" placeholder="task name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className="">Task Description</span>
                            </label>

                            <textarea {...register("TaskDescription", { required: true })}  className="input h-32 resize-none input-bordered " id="" cols="1" rows="10" placeholder="Description"></textarea>
                        </div>

                        <div className="form-control">
                            <label className="">
                                <span className="">Deadline</span>
                            </label>
                            <input {...register("deadLine", { required: true })} type="Date" placeholder="task deadline" className="input input-bordered " />
                        </div>

                        <div>
                            <select {...register("Type", { required: true })} defaultValue={'open'} className="select select-bordered mt-2 w-full max-w-xs">
                                <option disabled value={'open'}>Type Of Task</option>
                                <option value={'open'}>Open</option>
                                <option value={'inprogress'}>In Progress</option>
                                <option value={'done'}>Done</option>
                            </select>
                        </div>

                        <div>
                            <button type="submit" className="btn mt-2 bg-fuchsia-300 hover:bg-fuchsia-400">Add task</button>
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
    );
};

export default AddTask;