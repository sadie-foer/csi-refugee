import React from "react";
import { Link } from 'react-router-dom';
import './Persona.css';

function Persona2(props){
    return (
        <div className = "persona2-body">
            <div className="persona2-right">
                <div className = "persona2-hed">{props.name}</div>
                <hr align="left"></hr>
                <div className = "persona2-text"> {props.text} </div>
            </div>
            <div className = "persona2-img-div">
                <div className = {props.class + " persona1-img"}>
                    <img className= {props.class} src={props.src} />
                </div>
            </div>   
        </div>
    )
}

export default Persona2;