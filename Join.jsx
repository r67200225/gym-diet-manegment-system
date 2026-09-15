import React, { } from "react";
import myimage from "../assets/download.webp"
import { useNavigate } from "react-router-dom";
function Join(){
    const navigate = useNavigate();
    const handleclick = ()=>{
        alert("Congrats you become our healthy team member");
        navigate('/final')
    }
    
       
    
    
    return(
        <>
        <img className="input" src={myimage} alt="My Local"width="500" />
            <div>
                <h1>Fill the  following details that we give you right diet plan and fix your health</h1>
                <input className="input"  type="number"placeholder="Enter your age " /><br/>
                <input className="input"  type="number"placeholder="your height in cm" /><br/>
                <input className="input"  type="number"placeholder="your weight" /><br/>
                <label htmlFor="">Gender:- </label>
                <label htmlFor="">Male</label>
                <input type="checkbox" />
                <label className="input"  htmlFor="">Female</label>
                <input className="input"  type="checkbox" /><br/>
                <input className="input"  type="date" name="date of joining"/><br/>
                <label htmlFor="">Select that you wanna do</label>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Weight gain</label>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Weight lose </label><br/>
                
                <br/>
                <label htmlFor="">Choose your plan</label>
                <div className="maindiv">
                    <div className="div1">
                    <h2>Basic 199/month</h2>
                    <p>Gym membership</p>
                    <button className="button">Try for Free</button><br/>
                    <button className="buttons">Choose Plan</button>
                    </div>
                    <div className="div2">
                     <h2> Premium 499/month</h2>
                    <p>Gym membership</p>
                    <p>Trainer</p>
                    <p>Access of gym anytime</p>
                    <p>Extra time</p>
                    <button className="button">Try for Free</button><br/>
                    <button className="buttons">Choose Plan</button>
                    </div>
                    <div className="div3">
                    <h2>Advanced 999/month </h2>
                    <p>Gym membership</p>
                    <p>Personal trainer provided</p>
                    <p>Personal time according to your choise</p>
                    <p>Personal space for exercise</p>
                    <p>Cold shower access</p>
                    <p>Showna access</p>
                    <p>And anything you want that have provid for exercise </p>
                    <button className="button">Try for Free</button><br/>
                    <button className="buttons">Choose Plan</button>
                    </div>
                </div>
                <button  onClick={handleclick} className="submit" type="submit">Submit</button>
            </div>
        </>
    )
}
export default Join;