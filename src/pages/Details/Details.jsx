import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../Provider/AuthContext";
import toast from "react-hot-toast";

const Details = () => {
    const { user } = useContext(userContext);
    const userEmail = user?.auth?.currentUser?.email;
    const id = useParams();
    const [detailsProduct, setDetailsProduct] = useState(null);

    const product = detailsProduct?.find(item => item?._id == id?.brand);

    console.log(product?.image);
    useEffect(() => {
        fetch('https://tech-shope-server-c8xh3rl03-shakhabdulkader2020-gmailcom.vercel.app/products')
            .then(res => res.json())
            .then(data => setDetailsProduct(data))
    }, [])


    const handleUserAddToCart = (card) => {

        const { _id, name, image, brandName, catagoryName, price } = card;
        const cardInfo = {
            _id, name, image, brandName, catagoryName, price, userEmail
        };
        fetch('https://tech-shope-server-c8xh3rl03-shakhabdulkader2020-gmailcom.vercel.app/cart', {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(cardInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Successfully Add TO Cart!!!')
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