import { useQuery } from "@tanstack/react-query";
import useAxios from "../useAxios/useAxios";
import useAuth from "../useAuth/useAuth";


const useMyTask = () => {
    const axiosLoader = useAxios();
    const{user}=useAuth();
    const{email}=user || '';
    const{data:MyTask=[],refetch}=useQuery({
        queryKey:['MyTask'],
        queryFn: async()=>{
           const res=await axiosLoader.get(`/myTask?email=${email}`);
           return res.data
        }
    })

    return [MyTask,refetch]
};

export default useMyTask;