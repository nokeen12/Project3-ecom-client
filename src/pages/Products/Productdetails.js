import {useParams} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function ProductDetails(){

    const params = useParams();

    const [product, setProduct] = useState([]);

    const getProduct = () => {
        axios.get(`${API_URL}/api/products/${params.id}`)
        .then(response=> setProduct(response.data))
        .catch(err=>console.log(err));
    }

    //grabs the product that matches the params
    useEffect(()=>{
        getProduct();
    }, []);
    return(
        <div className="ProductPage">
            <p>Product details page</p>
            <div className="pictures">
                <img src={product.gallery && product.gallery[3]} className="mainPic" alt="jewelry"/>
                <div className="galleryPics">
                </div>
            </div>
            <div className="description">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>           
        </div>
    )
}
export default ProductDetails;