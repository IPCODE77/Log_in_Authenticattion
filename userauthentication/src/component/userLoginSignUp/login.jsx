
import { useContext, useState } from "react"
import { SingUpParentDiv,SubmitButton, FormWrapper, Title, ItemDiv, InputField, LabelName } from "./signup"
import axios from "axios";
import backendUrl from "../../applicationProperties/database.json";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../globalVariables/AuthContext";



export const LoginForm = () => {
    const [loginEmail, setlogintEmail] = useState('');
    const [loginPsw, setLoginpsw] = useState('');
    const [loginObject, setloginObject] = useState({
        loginEmail: '',
        loginPsw: ''});
    const navigate = useNavigate();    
    const {setUser} = useContext(AuthContext);

    const handelLoginButton = () =>{
        const newObject = {
            userEmail:loginEmail,
            userPassword:loginPsw
        }

        setloginObject(newObject);
        handelLoginMatch(newObject)
    }   
  
    const handelLoginMatch = async(newObject) =>{

        const logInUrl = `${backendUrl.development.localserver}/user/getuser`;
        console.log("Login url-->" , logInUrl);
        console.log("newObject-->" , newObject);
         try{
             const getLogInInfo = await axios.post(logInUrl,newObject,{ withCredentials: true } );
             console.log("logininfo -->" , getLogInInfo);
             if(getLogInInfo.status == "200"){

                setUser(getLogInInfo.data.user);
                navigate("/home",{state:{usrName:getLogInInfo.data.user.name}})
             }
         }
         catch(error){
            console.log("Error-->",error);
         }

    }
    return (
        <>
            <SingUpParentDiv>
                <FormWrapper>
                    <Title>Welcome Back!</Title>

                    <ItemDiv>
                        <LabelName>Email Address</LabelName>
                        <InputField
                            type="email"
                            placeholder="Enter Email Address..."
                            value={loginEmail}
                            onInput={(e) => setlogintEmail(e.target.value)}
                        />
                    </ItemDiv>
                    <ItemDiv>
                        <LabelName>Password</LabelName>
                        <InputField
                            type="password"
                            placeholder="Enter Password..."value={loginPsw}
                            onInput={(e) => setLoginpsw(e.target.value)}
                        />
                    </ItemDiv>
                    <SubmitButton onClick={handelLoginButton}>Log In</SubmitButton>
                </FormWrapper>
            </SingUpParentDiv>

        </>
    )
}