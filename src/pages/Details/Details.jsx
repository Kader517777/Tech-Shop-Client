import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const id = useParams();
    const [__id, set__id] = useState(id)
    const [detailsProduct, setDetailsProduct] = useState(null);
    if (__id) {
        fetch('http://localhost:3600/products')
            .then(res => res.json())
            .then(data => setDetailsProduct(data))
    }

    const product = detailsProduct?.find(item => item?._id == id?.brand);

    console.log(product?.image);
    fetch('http://localhost:3600/products')
        .then(res => res.json())
        .then(data => setDetailsProduct(data))


    const handleUserAddToCart = (card) => {
        fetch('http://localhost:3600/cart', {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(card)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    console.log('data submited');
                }
            })
    }
    return (
        <div className="hero h-[500px] md:min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={product?.image} className=" w-full rounded-lg shadow-2xl p-6" />
                <div>
                    <h1 className="text-5xl font-bold">{product?.name}</h1>
                    <p className="py-6 text-2xl">{product?.detailsDescription}</p>
                    <p className="pb-6 text-3xl">Brand Name: {product?.brandName}</p>
                    <p className="pb-6 text-3xl">Price: {product?.price}$</p>
                    <button onClick={() => handleUserAddToCart(product)} className="btn bg-[orange] text-2xl text-white font-bold w-full">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;