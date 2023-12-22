import axios from "axios";

const axiosLoader = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxios = () => {
    return axiosLoader
};

export default useAxios;