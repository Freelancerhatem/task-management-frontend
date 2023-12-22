import axios from "axios";

const axiosLoader = axios.create({
    baseURL:'https://task-management-backend-orpin.vercel.app'
})
const useAxios = () => {
    return axiosLoader
};

export default useAxios;