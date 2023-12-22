import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    const { createUser, updateUserData } = useAuth();

    const navigate = useNavigate()
    // image bb api
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_upload_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;
    // end img bb
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();

    const OnSubmit = async(data) => {
        console.log(data);
        const { email, password, name,image} = data;

        const imagefile = { image: image[0] };
        const res = await axios.post(image_upload_api, imagefile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        
        const imgUrl = res.data.data.display_url



        createUser(email, password)
            .then(() => {

                updateUserData(name, imgUrl)
                    .then(() => {
                        toast.success('user created');
                        navigate('/login');
                        reset()
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })

            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    return (
        <div className="flex justify-center items-center h-[calc(100vh-200px)] px-10 mt-20">
            <Toaster></Toaster>
            <div className=" bg-gray-200 p-12 rounded-md bg-opacity-70 backdrop-blur-md">

                <form onSubmit={handleSubmit(OnSubmit)} className=" space-y-2">
                    <div className="">
                        <label className="form-control  w-full">
                            <span className="label-text">What is your name?</span>

                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs   focus:border-none" />
                    </div>

                    <div className="">
                        <label className="form-control  w-full">
                            <span className="label-text">Your Image</span>

                        </label>
                        <input {...register("image", { required: true })} type="file" placeholder="Type here" className="file-input focus:border-none  file-input-bordered file-input-sm w-full max-w-xs" />
                    </div>
                    <div className="">
                        <label className="form-control  w-full">
                            <span className="label-text">Email</span>

                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs   focus:border-none" />
                    </div>
                    <div className="">
                        <label className="form-control  w-full">
                            <span className="label-text">Password</span>

                        </label>
                        <input {...register("password", { required: true })} type="password" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs   focus:border-none" />
                    </div>
                    <div>
                        <button type="submit" className="btn bg-fuchsia-300 hover:bg-fuchsia-400 text-white text-center">Sign up</button>
                    </div>
                </form>


            </div>


        </div>
    );
};

export default SignUp;