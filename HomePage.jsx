import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import myimage from "../assets/OIP.webp"
function HomePage(){
    const navigate = useNavigate();
    const handlejoin = ()=>{
        navigate('/join');
    }
    return(
        <Fragment>
            <div>
                <img src={myimage} alt="My Local"width="500" />
                <h1>Welcome to My Project!</h1>
                <h3>Healthy body is everything  when body left you no one and nothing with you or for you so take care of your body health with us only rupees 199/month</h3>
                <p>Its about the college project that is a web application name gym membership & Diet manegment System</p>
                <p>To join click below</p>

                <button onClick={handlejoin} className="join">Join</button>



            </div>
        </Fragment>
    )
}
export default HomePage;