import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useState, useEffect } from 'react';
import axios from "axios";

const API_URL = "http://localhost:5005";

function Cart(){
    const { user } = useContext(AuthContext);
    const [ cart, setCart ] = useState([]);
    const getUserProducts = () => {
        axios.get(`${API_URL}/api/profile/cart/${user._id}`)
        .then(response=> {
            setCart(response.data)
        })
        .catch(err=>console.log('there was an error: ', err));
    }

    useEffect(()=>{
        getUserProducts()
    }, []);
    

    return(
        <div>
            <h2>This cart belongs to {user && user.username}</h2>
            {cart.map((product, index)=>{
                return(
                    <div key={index}>
                        <p>{product.title}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Cart;