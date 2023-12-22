import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const {LoginUser,user,googleLogin}=useAuth();
    
    const navigate=useNavigate();
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      
      const OnSubmit=(data)=>{
        console.log(data);
        const {email,password}=data;
        if (!user){
            LoginUser(email,password)
        .then(()=>{
            toast.success('login success')
            navigate('/dashboard')
        })
        .catch(error=>{
            toast.error(error.message)
        })
        }
        else{
            toast.error('already sign in')
        }
        
      }
      const handleGoogle=e=>{
        e.preventDefault();
        googleLogin()
        .then(()=>{
            toast.success('login with google success');
        })

      }
    return (
        <div className="flex justify-center items-center h-[calc(100vh-200px)] px-10 mt-20">
            <Toaster></Toaster>
            <div className=" bg-gray-200 p-12 rounded-md bg-opacity-70 h-[50vh] backdrop-blur-md">

                <form onSubmit={handleSubmit(OnSubmit)} className=" space-y-2">
                    

                    
                    <div className="">
                        <label className="form-control  w-full">
                            <span className="label-text">Email</span>

                        </label>
                        <input {...register("email", { required: true })}  type="email" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs   focus:border-none" />
                    </div>
                    <div className="">
                        <label className="form-control  w-full">
                            <span className="label-text">Password</span>

                        </label>
                        <input {...register("password", { required: true })}  type="password" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs   focus:border-none" />
                    </div>
                    <div>
                    
                        <button type="submit" className="btn bg-fuchsia-300 hover:bg-fuchsia-400 text-white text-center">Sign In</button>
                    </div>
                </form>
                <div>
                    <button onClick={handleGoogle} className="btn">Google Login</button>
                </div>


            </div>


        </div>
    );
};

export default SignIn;