import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUserToken } from "../store/user/user.selector";
import "./navigation.styles.scss";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet } from "react-router-dom/dist";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { logoutCurrentUserAsync } from '../store/user/user.actions';


const NavBar = () => {
    /**
     * This is the NavBar jsx component.
     * Defines the top bar navigation
     */
    // sign-in is a placeholder for now -- we need to get the user from cookies 
    // or from the redux
    const currentToken = useSelector(selectCurrentUserToken);
    console.log("current Token: ", currentToken);
    const dispatch = useDispatch();
    const signOutCurrentUser = () => {
        dispatch(logoutCurrentUserAsync());
    }
    return (
        <>
            <div className="nav-bar-main-container">
                <div className="nav-bar-container">
                    <div className="logo-container">
                        <Link className="logo-link" to="/">
                            <div className="logo-name-bundle-container">
                                <FontAwesomeIcon icon={faDiceD20} />
                                <h4>MILO</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-links-container">
                        {
                            (!currentToken) ?
                                <Link className="nav-links" to="/signin">
                                    <div className="sign-in-button-container">
                                        <div className="label">Sign-in</div>
                                        <LoginIcon />
                                    </div>
                                </Link>
                                :
                                <Link className="nav-links" onClick={signOutCurrentUser} to="/">
                                    <div className="sign-in-button-container">
                                        <div className="label">Sign-out</div>
                                        <LogoutIcon />
                                    </div>
                                </Link>
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default NavBar;