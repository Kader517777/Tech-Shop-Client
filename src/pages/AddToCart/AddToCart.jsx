import { useContext, useEffect, useState } from "react";
import Carts from "../../component/Carts";
import { userContext } from "../../Provider/AuthContext";


const AddToCart = () => {
    const { user } = useContext(userContext)
    const userEmail = user?.auth?.currentUser?.email;
    const [cartProduct, setCartProduct] = useState(null);
    console.log(cartProduct);
    useEffect(() => {
        fetch('http://localhost:3600/cart')
            .then(res => res.json())
            .then(data => {
                const filterUserCart = data?.filter(item => item.userEmail === userEmail)
                setCartProduct(filterUserCart);
            })
    }, [userEmail])

    const handleProductDelete = (id) => {
        fetch(`https://tech-shope-server-c8xh3rl03-shakhabdulkader2020-gmailcom.vercel.app/delete/${id}`, {
            method: "Delete",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(cartProduct);
                    const filter = cartProduct?.filter(item => item._id != id && item.userEmail == userEmail);
                    console.log(filter);
                    setCartProduct(filter);
                }
            })
    }
    return (
        <div className="container mx-auto ">
            <div className=" grid grid-cols-1 lg:grid-cols-2  gap-6 mt-5">
                {cartProduct?.map(product => <Carts key={product._id} product={product} handleProductDelete={handleProductDelete}></Carts>)}
            </div>
        </div>

    );
};



export default AddToCart;