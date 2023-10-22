import { Link } from "react-router-dom";

/* eslint-disable */
const Brand = ({ brand }) => {

    return (
        <Link to={`/home/${brand.name}`}>
            <div className="card bg-base-100 shadow-2xl">
                <figure><img className="h-[300px] bg-base-100" src={brand.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl justify-center">{brand.name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Brand;