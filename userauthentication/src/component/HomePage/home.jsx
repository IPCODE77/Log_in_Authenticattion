import { useLocation, useNavigate } from "react-router"
import { AuthContext } from "../globalVariables/AuthContext";
import { useContext } from "react";
import { SubmitButton } from "../userLoginSignUp/signup";
import axios from "axios";
import backendUrl from "../../applicationProperties/database.json";


export const HomePage = () => {
    const location = useLocation('');
    const { user, loader } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log("User object:", user);
    console.log("User details:", JSON.stringify(user, null, 2));

    const handelUserLogOut = async () => {
        const url = `${backendUrl.development.localserver}/user/logout`;

        try {
            const logoutUser = await axios.post(url, {}, { withCredentials: true });
            console.log("Logout user -->", logoutUser);

            if (logoutUser.status === 200) {
                navigate('/login'); 
            }
        } catch (error) {
            console.error("Error in logout -->", error.response || error.message);
        }
    };

    return (
        <>
            <h3>Hii {user.userName} Welcome Back!</h3>
            <SubmitButton style={{ width: 'auto' }} onClick={handelUserLogOut}>Log Out</SubmitButton>

        </>
    )
}