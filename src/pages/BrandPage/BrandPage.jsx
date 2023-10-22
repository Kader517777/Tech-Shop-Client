import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProduct from "../../component/BrandProduct";

const BrandPage = () => {
    const brandName = useParams();
    const [products, setProduct] = useState(null);

    const brandProducts = products?.filter(item => item.brandName === brandName.brand);
    console.log(brandName);
    useEffect(() => {
        fetch('http://localhost:3600/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    return (
        <div className="container mx-auto grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-5 mb-8 mt-8">
            {
                brandProducts?.map(brandProduct => <BrandProduct key={brandProduct._id} brandProduct={brandProduct}></BrandProduct>)
            }
        </div>
    );
};

export default BrandPage;