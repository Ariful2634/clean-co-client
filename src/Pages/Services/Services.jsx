import { useEffect, useState } from "react";
import Serve from "./Serve";


const Services = () => {

    const [services, setServices]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ml-20">
                {
                    services.map(service=><Serve key={service._id} service={service}></Serve>)
                }
            </div>
        </div>
    );
};

export default Services;