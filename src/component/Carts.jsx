import { useState } from "react";

const Carts = ({ product, handleProductDelete }) => {

    const { name, image, brandName, price, _id } = product;
    console.log(product);


    return (
        <div className="card md:card-side bg-base-100 shadow-2xl">
            <figure><img className="h-[200px] bg-base-100" src={image} alt="Shoes" /></figure>
            <div className="card-body justify-left">
                <h2 className="card-title text-3xl ">{name}</h2>
                <h2 className="card-title text-3xl my-5">Brand name: {brandName}</h2>
                <h2 className="card-title text-3xl">Price: {price}$</h2>
                <button onClick={() => handleProductDelete(_id)} className="btn bg-[orange] text-2xl text-white font-bold w-full">Delete</button>
            </div>
        </div>
    );
};

export default Carts;