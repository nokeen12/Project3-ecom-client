import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useState, useEffect } from 'react';
import axios from "axios";

const API_URL = "http://localhost:5005";

function Cart(){
    const { user } = useContext(AuthContext);
    const [ cart, setCart ] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);

    const getUserCart = () => {
        axios.get(`${API_URL}/api/profile/cart/${user._id}`)
        .then(response=> {
            setCart(response.data)
        })
        .catch(err=>console.log('there was an error: ', err));
    }

    useEffect(()=>{
        getUserCart()
    }, []);
    // document.querySelectorAll('#price').forEach(each=>{
    //     console.log(each)
    // })

    // const handleDeleteItemSubmit = (e) => {
    //     e.preventDefault();
    //     const requestBody = { userId: user._id, index: key};
    //     axios.put(`${API_URL}/api/cart`, requestBody)
    //       .then(response => {

    //       })
    //       .catch((error) => {
    //         const errorDescription = error.response.data.message;
    //         setErrorMessage(errorDescription);
    //       })
    // };

    let total = 0;
    return(
        <div>
            <h2>This cart belongs to {user && user.username}</h2>
            {cart.map((product, index)=>{
                total += Number(product.price)
                return(
                    <div key={index}>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        {/* <form onSubmit={handleDeleteItemSubmit}>
                            <button type="submit" >Delete Account</button>
                        </form> */}
                    </div>
                )
            })}
            <p>Total is ${Math.round(total*100)/100}</p>

            { errorMessage && <p className="error-message">{errorMessage}</p> }

        </div>
    )
}
export default Cart;