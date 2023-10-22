
const BrandProduct = ({ brandProduct }) => {

    const { name, image, brandName, catagoryName, price, Rating, shortDescription, detailsDescription } = brandProduct;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Brand name: {brandName}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary w-full">Details</button>
                    <button className="btn btn-primary w-full">Update</button>
                </div>
            </div>
        </div>
    );
};

export default BrandProduct;