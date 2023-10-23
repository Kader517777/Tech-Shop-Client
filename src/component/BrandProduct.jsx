import { Link } from "react-router-dom";

const BrandProduct = ({ brandProduct }) => {

    const { name, image, brandName, catagoryName, price, Rating, shortDescription, detailsDescription, _id } = brandProduct;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[250px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Brand name: {brandName}</p>
                <p>type: {catagoryName}</p>
                <p>price: {price}$</p>
                <p>Rating: {Rating}</p>
                <div className="card-actions justify-center">
                    <Link className="w-full" to={`/home/details/${_id}`}><button className="btn btn-primary w-full">Details</button></Link>
                    <Link className="w-full" to={`/updated/${_id}`}><button className="btn btn-primary w-full">Update</button></Link>

                </div>
            </div>
        </div>
    );
};

export default BrandProduct;