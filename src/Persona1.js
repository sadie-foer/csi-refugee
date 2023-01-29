import React from "react";
import { Link } from 'react-router-dom';
import './Persona1.css';

function Persona1(props){
    return (
        <div className = "persona-body">
                <div className = "persona-img-div">
                    <div className = {props.class + " persona1-img"}>

                    </div>
                </div>
                <div className="persona-right">
                    <div className = "persona-hed">{props.name}</div>
                    <hr align="right"></hr>
                    <div className = "persona-text"> {props.text} </div>
                </div>
                
        </div>
    )
}

export default Persona1;