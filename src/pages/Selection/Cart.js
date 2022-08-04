// import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";




function Cart(){
    const { user } = useContext(AuthContext);


    return(
        <div>
            <h2>This cart belongs to {user.username}</h2>
        </div>
    )
}
export default Cart;