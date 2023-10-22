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

        <div className="container mx-auto">
            <div className=" carousel w-full my-8">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qdsTG7B/nexg-n6.jpg" className="w-full h-[300px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/nb5cq9v/samsung-Monitors-min.jpg" className="w-full h-[300px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/SRDwXb7/walton.webp" className="w-full h-[300px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className=" grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-5 mb-8 mt-8">
                {
                    brandProducts?.map(brandProduct => <BrandProduct key={brandProduct._id} brandProduct={brandProduct}></BrandProduct>)
                }
            </div>
        </div>
    );
};

export default BrandPage;