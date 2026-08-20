import { useEffect, useState } from "react";
import ProductCard from "../components/productcard";
import { useOutletContext } from "react-router-dom";

function Product(){
     const [Products, setProducts]=useState([]);
    
     const {addToCart}=useOutletContext();
       useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then (response => response.json())
        .then (data => setProducts(data));
    
    },[]);

    return(

        <div>
            <h2 className="text-center text-danger">My Products</h2>
           <div className="row g-4">
          
            {
                Products.map((p) => (
                    
                       
                        <ProductCard key={p.id}
                        product={p} onAddToCart={addToCart}

                        // title={(pro.title)}
                        // price={(pro.price)}
                        // image={(pro.image)}
                        />
)            
            )
            }
            </div>
        </div>
    )
};
export default Product;
