import { useEffect, useState } from "react";
import Brand from "./brand";


const Brands = () => {
    const [brands, setBrands] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3600/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div>
            <h1 className=" mb-4 mt-8  text-3xl font-bold">Our Brands for you</h1>
            <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-5 mb-8">
                {brands?.map(brand => <Brand key={brand._id} brand={brand}></Brand>)}
            </div>
        </div>
    );
};

export default Brands;