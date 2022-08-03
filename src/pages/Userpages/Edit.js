import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";



function Edit(){

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <div>
            <h1>Edit Page</h1>
        </div>
    )
}
export default Edit;