import { useState } from "react";
import { Navigate } from "react-router-dom";

function Register(){

    const[user,setUser]=useState({

        username:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    function handleChange(e){
        setUser({
            ...user,

            [e.target.name]:e.target.value
        });
    }

    function RegisterNew(){

        if(
            !user.username||
            !user.email||
            !user.password||
            !user.confirmPassword)

        {
            alert("All fields are Required");
            return;
        }
        else if(user.password !== user.confirmPassword){
            alert("Password does not match");
            return;
        }
        localStorage.setItem("user",JSON.stringify(user));
        alert("Registration Successful")
        Navigate("/login")
    }
    return(
         <div className="container">
            <div className="card shadow mx-auto mt-5 p-5" style={{maxwidth:"500px"}}>
                <h3 className="text-danger text-center">Registration</h3>

                <input className="form-control mt-3"
                placeholder="Username"
                name="username"
                value={(user.username)}
                onChange={handleChange}
                />
                
                <input className="form-control mt-3"
                placeholder="Email"
                name="email"
                value={(user.email)}
                onChange={handleChange}
                />
                
                <input className="form-control mt-3"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
                />
                 <input className="form-control mt-3"
                placeholder="Confirm-Password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                />
                <button className="btn btn-info" onClick={RegisterNew}>Register
                    
                </button>
                <p className="text-center mt-3">
                    Already a Registered User?
                    <a href="/login" className="text-decoration-none">Login
                    </a>

                </p>
            </div>

         </div>
    );


}

export default Register;