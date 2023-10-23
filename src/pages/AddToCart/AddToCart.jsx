import { useEffect, useState } from "react";
import Carts from "../../component/Carts";


const AddToCart = () => {
    const [cartProduct, setCartProduct] = useState(null);
    console.log(cartProduct);
    useEffect(() => {
        fetch('http://localhost:3600/cart')
            .then(res => res.json())
            .then(data => setCartProduct(data))
    }, [])

    const handleProductDelete = (id) => {
        fetch(`http://localhost:3600/delete/${id}`, {
            method: "Delete",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(cartProduct);
                    const filter = cartProduct?.filter(item => item._id != id);
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