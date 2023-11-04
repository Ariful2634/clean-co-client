import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const BookNow = () => {

    const {user}=useContext(AuthContext)

    const service = useLoaderData()
    console.log(service)
    const {id}=useParams()

    const serve = service.find(service=>service._id==id)
    const {_id, service_name,image}=serve
    const handleForm = e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const price = form.price.value
        const email = user?.email

        const booking = {
            ServiceName:service_name,
             name,date,price,email, serviceId: _id,image
         }

         axios.post('http://localhost:5000/bookings',booking)
         .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire(
                    'Congratulations',
                    'Service Booked Successfully!',
                    'success'
                  )
            }
         })

    }

    return (
        <div>
            <h2>name: {serve.service_name}</h2>
            <form onSubmit={handleForm}>
                <div className="flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder=" Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="date" placeholder="Service Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Service Price" defaultValue={serve.price} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* <div>
                <textarea className="textarea textarea-primary w-full h-[200px] mt-4" placeholder="Product Description"></textarea>
                </div> */}
                <div className="mt-4">
                    <button className="btn btn-block  bg-[#FF3811]">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default BookNow;