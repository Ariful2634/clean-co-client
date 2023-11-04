/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Serve = ({ service }) => {

    const {_id, image, price, service_name, service_description } = service;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <p className="h-[120px]">{service_description}</p>
                    <div className="card-actions justify-end items-center">
                        <p>Price: {price}</p>
                        <Link to={`/bookNow/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Serve;