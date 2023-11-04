import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSec = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true,
})

const useAxiosSec = () => {
    const navigate = useNavigate()
    const {logOut}=useContext(AuthContext)
   
    useEffect(()=>{
        axiosSec.interceptors.response.use(res=>{
            return res;
        }, error=>{
            console.log('error tracked in the interceptor', error.response)
            if(error.response.status === 401 || error.response.status === 403){
                                console.log('logout the user')
                                logOut()
                                .then(()=>{
                                    navigate('/login')
                                })
                                .catch(error=>console.log(error))
                            }
        })
    },[])

    return axiosSec;
};

export default useAxiosSec;