import Product from "@/components/product";

const getPosts = async()=>{
     const res = await fetch('http://127.0.0.1:5000/products');
     return res.json();
}

const Productspage = async () => {
      const products = await getPosts();
    return (
        <div>
             <h2>Products: {products.length}</h2>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {
                    products.map(product => <Product key={product.id}
                    product={product}></Product>)
                  }
             </div>
        </div>
    );
};

export default Productspage;