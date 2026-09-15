import React, { Fragment, useState } from "react";
import Routien from "./Routien";
import Routien2 from "./Routien2";
import image from "../assets/macronutrients_impact_fat_loss.webp"
function Final(){
     const  [preference, setPreference] = useState('');

    return(
        <Fragment>
            <img src={image} alt="My Local"width="900" />
            <div>
                <label htmlFor="">Enter your food type Vegiterian or Non-Vegiterian </label>
                           <select value={preference}
                           onChange={(e)=> setPreference(e.target.value.toLowerCase())}
                           >
                           <option value ="">--Select--</option>
                           <option value = "nonvegiterian">Non-Vegiterian</option>
                           <option value="vegiterian">Vegiterian</option>
                           </select>
                           <input type="text"placeholder="Type vegiterian or nonvegiterian"
                           onChange={(e)=> setPreference(e.target.value.trim().toLowerCase())} />
                           <div>
                           {preference === 'nonvegiterian' &&<Routien/>}
                           {preference === 'vegiterian' && <Routien2/>}
                           </div>
            </div>
           
        </Fragment>
    )
}
export default Final;