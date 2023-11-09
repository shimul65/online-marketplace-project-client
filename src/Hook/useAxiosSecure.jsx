import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://online-marketplace-client.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {

    const { logOut } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            console.log("error tracked in the interceptor:", err.response);
            if (err.response.status === 401 || err.response.status === 403) {
                logOut()
                    .then(() => {
                        navigate('/login');
                    })
                    .catch(error => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    })
            }
        })
    }, [logOut, navigate])

    return axiosSecure;
};

export default useAxiosSecure;