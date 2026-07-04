import Product from "@/components/product";


const getProducts = async () => {
      const res = await fetch("http://localhost:5000/products",
          // {
          //   cache: "force-cache" }
          // {cache: "no-store"}
         {next: {revalidate: 20}})
      return res.json();
}

const Productspage =  async() => {
     const products = await getProducts();
     console.log(products);
      
    return (
        <div>
           <h2>Products: {products.length}</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                 {
                     products.map(product => <Product key={product.id} product={product}/>)

                 };

           </div>
        </div>
    );
};

export default Productspage;
