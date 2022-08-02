import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navlinks(){
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


    return(
        <div>
            <Link to="/"><button>home</button></Link>
            {isLoggedIn && (
            <>
            <Link to="/profile"><button>profile</button></Link>
            <Link to="/edit"><button>edit profile</button></Link>
            <button onClick={logOutUser}>Logout</button>
            <span> {user && user.username}</span>
            </>
            )}
            {!isLoggedIn && (
            <>
            <Link to="/signup"><button>signup</button></Link>
            <Link to="/login"><button>login</button></Link>
            </>
            )}
        </div>
    )
}
export default Navlinks;