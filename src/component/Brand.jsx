

const Brand = () => {

    const handlebrand = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        console.log(name, img);
        const products = {
            name, img
        }
        fetch('http://localhost:3600/brands', {
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
        <div>
            <form onSubmit={handlebrand}>
                <input type="text" name="name" id="" placeholder="name" className="w-full border-4" />
                <input type="text" name="img" id="" className="w-full border-4" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Brand;