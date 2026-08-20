import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){

    const navigate=useNavigate();

    const[login,setLogin]=useState({

        email:"",
        password:""

    });

    function handleChange(e){
        setLogin({
            ...login,

            [e.target.name]:e.target.value
        });
    }
    
    function LoginNew(){

        if(!login.email || !login.password){
            alert("All fields are Required");
            return;
        }
        const user=JSON.parse(localStorage.getItem("user"));

        if(
            user.email === login.email &&
            user.password === login.password
        ){
            localStorage.setItem("isLoggedIn","true");
            alert("Login Successful");
            navigate("/");

        }
        else{
            alert("Login Failed");
        }

    }
    return(
        <div className="container">
            <div className="card shadow mx-auto mt-5 p-5" style={{maxwidth:"500px"}}>
                <h3 className="text-danger text-center">Login</h3>

                
                <div>
                <input className="form-control mt-3"
                placeholder="Email"
                name="email"
                value={(Login.email)}
                onChange={handleChange}
                />
                </div>
                <div>
                <input className="form-control mt-3"
                placeholder="Password"
                name="password"
                value={(Login.password)}
                onChange={handleChange}
                />
                </div>
                 
                <button className="btn btn-info" onClick={LoginNew}>Login
                    
                </button>
                <p className="text-center mt-3">
                    New User?
                    <a href="/register" className="text-decoration-none">Register
                    </a>

                </p>
            </div>

         </div>
    )


}
export default Login;