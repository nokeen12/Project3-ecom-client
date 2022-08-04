import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";

const API_URL = "http://localhost:5005";

function ProductDetails(){
    const { isLoggedIn, user } = useContext(AuthContext);
    const params = useParams();
    const [product, setProduct] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const productId = params.id
    const navigate = useNavigate();

    function getProduct(){
        axios.get(`${API_URL}/api/products/${params.id}`)
        .then(response=> setProduct(response.data))
        .catch(err=>console.log(err));
    }

    //grabs the product that matches the params
    useEffect(()=>{
        getProduct();
    }, []);

    //need to send this product to the user cart
    const handleAddCartSubmit = (e) => {
        e.preventDefault();
        const requestBody = { userId: user._id, productId};
        axios.put(`${API_URL}/api/cart`, requestBody)
          .then(response => {
            navigate('/cart');
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })
    };
    
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
                <p>${product.price}</p>
            </div>

            {isLoggedIn && <form onSubmit={handleAddCartSubmit}><button type='submit'>Add to Cart</button></form>}
            

            { errorMessage && <p className="error-message">{errorMessage}</p> }
        </div>
    )
}
export default ProductDetails;