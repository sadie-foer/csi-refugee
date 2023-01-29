import React from "react";
import { Link } from 'react-router-dom';
import './Insight.css';

function Insight (props){
    return (
        <div className = 'insight'>
            <div className = "insight-hed">
                {props.hed}
            </div>
            <div className = 'insight-text'>
                {props.text}
            </div>
        </div>
    )
}

export default Insight;