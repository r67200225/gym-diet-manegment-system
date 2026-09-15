import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
function RegisterPage(){
    const navigate = useNavigate();
    const handleclick = () =>{
        navigate('/home');

    }
    return(
        <Fragment>
            
            <div>
                <input className="inputs" type="text"placeholder="Name" /><br/>
                <input className="inputs" type="email"placeholder="enter your email" /><br/>
                <input className="inputs" type="number"placeholder="your number" /><br/>
                <input className="inputs" type="address"placeholder="full address" /><br/>
                <button onClick={handleclick} className="register">Register</button>
            </div>
        </Fragment>
    )
}
export default RegisterPage;