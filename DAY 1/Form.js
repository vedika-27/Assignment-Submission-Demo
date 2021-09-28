import React from "react";
import Inputfield from "./Inputfield";
import './Form.css';


function Form(){
    return(
        <body>
        <div class="form">
            <form class="form-container">
            <label className="enter">First Name</label>
            <Inputfield/>
            <label className="enter">Last Name</label>
            <Inputfield/>
            <br></br>
            <label class="enter">Hobbies</label>
            <div class="hobbies"><Inputfield/></div>
            </form>
        </div>
        </body>
    )
}
export default Form;