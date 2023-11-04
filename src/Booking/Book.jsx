/* eslint-disable react/prop-types */


const Book = ({book}) => {

    const {name,image,ServiceName,price}=book;

    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="">{ServiceName}</p>
                    <div className="card-actions justify-end items-center">
                        <p>Price: {price}</p>
                      <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;