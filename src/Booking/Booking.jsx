import { useContext, useEffect, useState } from "react";
import Book from "./Book";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSec from "../hooks/useAxiosSec";
// import { FaBookDead } from "react-icons/fa";


const Booking = () => {

    const{user}=useContext(AuthContext)
    const [book,setBook]=useState([])
    const axiosSec = useAxiosSec()

    const url = `/bookings?email=${user?.email}`

    useEffect(()=>{
        // fetch(url, {credentials:'include'})
        // .then(res=>res.json())
        // .then(data=>setBook(data))

        axiosSec.get(url)
        .then(res=>{
            setBook(res.data)
        })

    },[url,axiosSec])

    return (
        <div>
            <div className="grid grid-cols-2 ml-20 mt-20 gap-5">
                {
                    book.map(book=><Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Booking;