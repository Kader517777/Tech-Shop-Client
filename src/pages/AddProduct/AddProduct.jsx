

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name?.value;
        const image = form.image?.value;
        const brandName = form.brandName?.value;
        const catagoryName = form.selectCatagory?.value;
        const price = form.price?.value;
        const Rating = form.rating?.value;
        const shortDescription = form.shortDescription?.value;
        const detailsDescription = form.detailsDescription?.value;
        e.target.reset();

        const products = { name, image, brandName, catagoryName, price, Rating, shortDescription, detailsDescription }

        fetch('https://tech-shope-server-c8xh3rl03-shakhabdulkader2020-gmailcom.vercel.app/products', {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }



    return (
        <div className=" flex items-center justify-center">
            <form onSubmit={handleAddProduct} className="w-3/4 md:w-3/5 ">
                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Name</span>
                        <input type="text" placeholder="Please Product name" name="name" className="input input-bordered " />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group input-group-vertical">
                        <span>Image</span>
                        <input type="text" placeholder="Please Product name" name="image" className="input input-bordered" />
                    </label>
                </div>
                <div className="md:flex justify-between w-full items-center">
                    <div className="form-control ">
                        <label className="input-group ">
                            <span>Brand name</span>
                            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <div className="input-group">
                            <span>Catagory</span>
                            <select className="select select-bordered" name="selectCatagory">
                                <option disabled selected>Pick category</option>
                                <option>Phone</option>
                                <option>Computer</option>
                            </select>

                        </div>
                    </div>
                    <div className="form-control my-4">
                        <label className="input-group">
                            <span>Price</span>
                            <input type="text" name="price" placeholder="$$$" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control my-4">
                        <label className="input-group">
                            <span>Rating</span>
                            <input type="text" name="rating" placeholder="****" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Short Description</span>
                        <input type="text" placeholder="Please Product name" name="shortDescription" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group input-group-vertical">
                        <span>Details Description</span>
                        <textarea className="textarea textarea-success" name="detailsDescription" placeholder="details Description"></textarea>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary w-full">Add</button>
            </form>
        </div>
    );
};

export default AddProduct;