import {Link} from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from 'react';

const API_URL = "http://localhost:5005";


function HomePage(){
    const [products, setProducts] = useState([]);

    const getAllProducts = () => {
        axios.get(`${API_URL}/api/products`)
        .then(response=> setProducts(response.data))
        .catch(err=>console.log(err));
    }

    //only grabs all products once
    useEffect(()=>{
        getAllProducts();
    }, []);


    return(
        <div className="Homepage">
            <h1>Home Page</h1>
            <div className="homeproducts">
                {products.map(product=>{
                    return(
                        <div className="ProductCard card" key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                <div className="pictures">
                                    <img src={product.gallery[4]} className="mainPic"/>
                                    <div className="galleryPics">

                                    </div>
                                </div>
                                <div className="description">
                                    <h3>{product.title}</h3>
                                    <p>{product.price}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default HomePage;