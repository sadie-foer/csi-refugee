import React from "react";
import { Link } from 'react-router-dom';
import './Representation.css';

function Representation(props){
    return (
        <div className = "representation">
            <div>
                {props.title}
            </div>
            <div>
                <img className = "image" src={props.src} />
            </div>
        </div>
    )
}

export default Representation;